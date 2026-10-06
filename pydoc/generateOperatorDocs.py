import json
import os
import re
import shutil
from typing import List, Optional

import yaml

keywords = [
    "Parameters",
    "Notes",
    "Returns",
    "Yields",
    "Raises",
    "Node Attributes",
    "Example",
    "Examples",
]

params_to_highlight = [
    "tables_to_upload",
    "files_to_upload",
    "downstream_nodes_to_execute",
    "src_azure_blob_name",
]
params_to_highlight_str = "(" + "|".join(params_to_highlight) + "):"

# Input param keys have the form input_<type>_<label>; the web app shows only <label> for these
# types (InputParamTypeEnum in api-server frontend/src/common/api/models/InputParamTypeEnum.ts)
input_param_key_pattern = r"input_(empty|file|multi|string|event|tag)_(\w+)$"


def ui_label_to_param_key(param_keys: List[str]) -> dict:
    """
    Maps the label the web app shows for an input param to its full key, e.g. csv -> input_file_csv.
    Mirrors getInputParamType in api-server frontend/src/components/NodeEditor/Input/Util.ts.
    """
    label_map = {}
    for key in param_keys:
        match = re.match(input_param_key_pattern, key.lower())
        if match:
            label_map[match.group(2)] = key
    return label_map


def format_attribute(attribute: str, label_map: dict) -> str:
    """
    Renders a Node Attribute as the label the web app displays plus its full parameter key, e.g.
    "- **csv** (parameter key: `input_file_csv`)". Docstrings may use either form, and container
    docstrings shared by single- and multi-file operators name the single-file key.
    """
    match = re.match(input_param_key_pattern, attribute)
    label = match.group(2) if match else attribute
    if label in label_map:
        return f"- **{label}** (parameter key: `{label_map[label]}`)"
    if match:
        print(f"  warning: attribute {attribute} matches no input param in operators.yaml")
    return f"- **{label}**"


def extract_docstring(
    filename: str,
    search_str: str = "class",
    python_spaces: int = 4,
    param_keys: Optional[List[str]] = None,
) -> List:
    """
    Extracts docstring from Ganymede operator class
    """
    label_map = ui_label_to_param_key(param_keys or [])

    docstrings: list = []
    is_comment = False
    search_str_found = False
    lines = open(filename, "r").readlines()
    current_table = None
    last_description = None  # (index in docstrings, nesting level) of the last description bullet

    for prev_line, line in zip(lines[:-1], lines[1:]):
        line_stripped = line.strip()

        if prev_line.startswith(search_str):
            search_str_found = True

        if not search_str_found:
            continue

        if "branch" in filename.lower():
            print(line)

        if re.search(params_to_highlight_str, line):
            line = re.sub(r"([^\s:]+): (.+)", r"**\1**: `\2`", line)

        if prev_line.strip().endswith(":") and line_stripped.startswith('"""'):
            is_comment = True
        elif line_stripped.endswith('"""') and is_comment:
            is_comment = False
            break
        elif prev_line.strip() in keywords and line.strip() == "-" * len(prev_line.strip()):
            cleaned_docstring = prev_line[python_spaces:].strip()
            docstrings[-1] = f"### {cleaned_docstring}\n"
            current_table = cleaned_docstring
        elif is_comment:
            line_indent = len(line) - len(line.lstrip())
            if re.search(r"^\w+ : .+$", line.strip()) or (
                # tolerate "name: type" (no space before the colon) for top-level entries
                current_table in ("Parameters", "Node Attributes")
                and line_indent == python_spaces
                and re.search(r"^\w+: .+$", line.strip())
            ):
                params = [val.strip() for val in line.split(":", 1)]
                if current_table == "Node Attributes":
                    param_line = format_attribute(params[0], label_map)
                else:
                    param_line = f"- **{params[0]}**"
                docstrings.append(param_line + " : " + f"`{params[1]}`")
            elif (
                len(docstrings) > 1
                and docstrings[-1].strip() == "### Returns"
                and current_table == "Returns"
            ):
                docstrings.append(f"`{line.strip()}`")
            else:
                if current_table:
                    table_record = re.findall(r"^( +)(.+)", line)

                    if not table_record:
                        docstrings.append(line_stripped)
                        continue
                    table_record = table_record[0]

                    num_spaces = len(table_record[0]) // python_spaces - 1

                    if current_table in ["Notes", "Example"]:
                        table_record = "".join(table_record[1:]).strip()
                        if re.search(r"^\w+: [\w\"'@]", table_record):
                            secrets = [v.strip() for v in table_record.split(":", 1)]
                            docstring_line = f"- **{secrets[0]}**: {secrets[1]}"
                            # a list needs a blank line after the prose that introduces it
                            if follows_prose(docstrings):
                                docstrings.append("")
                        else:
                            docstring_line = table_record
                    elif current_table == "Node Attributes" and num_spaces == 0:
                        docstring_line = format_attribute(table_record[1].strip(), label_map)
                    elif current_table == "Node Attributes" and table_record[1].startswith("- "):
                        # option lists under an attribute description nest one level deeper
                        docstring_line = (num_spaces + 1) * "  " + table_record[1]
                    elif current_table in ("Returns", "Examples", "Yields"):
                        docstring_line = max(num_spaces, 0) * "  " + table_record[1]
                    else:
                        # a wrapped description line continues the previous bullet
                        if (
                            num_spaces >= 1
                            and last_description == (len(docstrings) - 1, num_spaces)
                        ):
                            docstrings[-1] += " " + table_record[1].strip()
                            continue
                        docstring_line = max(num_spaces, 0) * "  " + "- " + table_record[1]
                        docstrings.append(docstring_line)
                        last_description = (len(docstrings) - 1, num_spaces)
                        continue
                    docstrings.append(docstring_line)
                else:
                    docstrings.append(line_stripped)
    return fence_doctest_lines(docstrings)


def follows_prose(docstrings: List[str]) -> bool:
    """
    True when the last line is a paragraph (not a bullet or a wrapped bullet line)
    """
    if not docstrings or not docstrings[-1].strip():
        return False
    for previous in reversed(docstrings):
        if not previous.strip() or previous.startswith("#"):
            return True
        if previous.lstrip().startswith("- "):
            return False
    return True


def fence_doctest_lines(docstrings: List[str]) -> List[str]:
    """
    Wraps runs of ">>>" doctest lines in a code block so they don't render as nested blockquotes
    """
    fenced: list = []
    in_block = False
    for docstring_line in docstrings:
        is_doctest = docstring_line.lstrip().startswith((">>>", "..."))
        if is_doctest and not in_block:
            fenced.append("```python")
            in_block = True
        elif not is_doctest and in_block:
            fenced.append("```")
            in_block = False
        fenced.append(docstring_line.strip() if is_doctest else docstring_line)
    if in_block:
        fenced.append("```")
    return fenced


if __name__ == "__main__":
    """Generates sidebars for nodes"""

    markdown_dir = "../docs/nodes"
    operators_dir = "../core-dev-operators"

    with open(os.path.join(operators_dir, "operators.yaml"), "r") as operators_yaml:
        operators = yaml.safe_load(operators_yaml)

        # remove dev flag nodes from documentation
        operators = {k: v for k, v in operators.items() if "dev" not in v or not v["dev"]}

    for path in os.listdir(markdown_dir):
        if os.path.isdir(path):
            shutil.rmtree(os.path.join(markdown_dir, path))

    # copy markdown files to subdirectory by operator type
    missing_files: list = []
    for name, desc in operators.items():
        operator_filename = (
            os.path.join(operators_dir, "/".join(desc["path"].split(".")[1:-1])) + ".py"
        )
        if operator_filename.endswith("_pod.py"):
            operator_filename = operator_filename[:-7] + "_container.py"

        print(f"processing {operator_filename}...")

        dest_dir = os.path.join(markdown_dir, desc["type"])
        if not os.path.exists(dest_dir):
            os.makedirs(dest_dir)

        # Container files can define helper classes (e.g. Azure's AccessToken) ahead of
        # the operator class, so target GanymedeContainer when the file defines it.
        with open(operator_filename, "r") as operator_file:
            has_container_class = "\nclass GanymedeContainer" in operator_file.read()
        search_str = "class GanymedeContainer" if has_container_class else "class"
        param_keys = [param["name"] for param in desc.get("params") or []]
        operator_data_list = extract_docstring(
            operator_filename, search_str=search_str, param_keys=param_keys
        )
        operator_data = "## Node\n\n"
        operator_data += "### Node Description\n\n" + "\n".join(operator_data_list)
        operator_data = (
            operator_data.replace("{", "\{")
            .replace("}", "\}")
            .replace(">", "\>")
            .replace("<", "\<")
        )

        action_data = ""
        if "action" in desc and name != "RunContainer":
            action_file = desc["action"].split("/")[-1]

            if "action" in desc and not action_file.endswith(".sql"):
                action_file_path = os.path.join(
                    operators_dir, "/".join(desc["action"].split("/")[:-1])
                )

                [action_filename] = [
                    user_defined_file
                    for user_defined_file in os.listdir(action_file_path)
                    if user_defined_file.endswith(".py")
                ]
                action_filename = os.path.join(action_file_path, action_filename)
                print(f"processing {action_filename}...")

                action_data_list = extract_docstring(action_filename, search_str="def execute(")
                action_data = "\n\n## User-Defined Python\n\n" + "\n".join(action_data_list)

        with open(os.path.join(dest_dir, f"{name}.md"), "w") as dest_file:
            header = (
                "---\n"
                f"sidebar_label: {name}\n"
                f"title: {name}\n"
                "displayed_sidebar: webUiSidebar\n"
                "---\n\n"
            )

            dest_file.write(header + operator_data + action_data + "\n")

    # create sidebar JSON files
    operator_types = set([v["type"] for v in operators.values()])
    for operator_type in operator_types:
        sidebar = dict()
        sidebar["type"] = "category"
        sidebar["label"] = operator_type

        sorted_keys = list(operators.keys())
        sorted_keys.sort()

        sidebar["items"] = [
            f"nodes/{operator_type}/{k}"
            for k in sorted_keys
            if operators[k]["path"].split(".")[-2] not in missing_files
            and operators[k]["type"] == operator_type
            and not ("dev" in operators[k] and operators[k]["dev"])
        ]
        with open(os.path.join(markdown_dir, operator_type, "sidebar.json"), "w") as json_file:
            json_file.write(json.dumps(sidebar))
