import json
import os
import re
import shutil
from typing import List

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


def extract_docstring(filename: str, search_str: str = "class", python_spaces: str = 4) -> List:
    """
    Extracts docstring from Ganymede operator class
    """

    docstrings = []
    is_comment = False
    search_str_found = False
    lines = open(filename, "r").readlines()
    current_table = None

    for prev_line, line in zip(lines[:-1], lines[1:]):
        line_stripped = line.strip()

        if prev_line.startswith(search_str):
            search_str_found = True

        if not search_str_found:
            continue

        if "branch" in filename.lower():
            print(line)

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
            if re.search(r"^\w+ : .+$", line.strip()):
                params = [val.strip() for val in line.split(":")]
                docstrings.append(f"- **{params[0]}**" + " : " + f"`{params[1]}`")
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

                    num_spaces = len(table_record[0]) // python_spaces
                    if current_table != "Parameters":
                        num_spaces -= 1

                    if current_table in ["Notes", "Example"]:
                        table_record = "".join(table_record[1:]).strip()
                        if re.search(r"^\w+: \w+", table_record):
                            secrets = [v.strip() for v in table_record.split(":", 1)]
                            docstring_line = f"- **{secrets[0]}**: {secrets[1]}"
                        else:
                            docstring_line = table_record
                    elif current_table == "Node Attributes" and num_spaces == 0:
                        docstring_line = num_spaces * "  " + "- **" + table_record[1].strip() + "**"
                    elif current_table in ("Returns", "Examples", "Yields"):
                        docstring_line = max(num_spaces, 0) * "  " + table_record[1]
                    else:
                        docstring_line = max(num_spaces, 0) * "  " + "- " + table_record[1]
                    docstrings.append(docstring_line)
                else:
                    docstrings.append(line_stripped)
    return docstrings


if __name__ == "__main__":
    """Generates sidebars for nodes"""

    markdown_dir = "../docs/nodes"
    operators_dir = "../core-operators"

    with open(os.path.join(operators_dir, "operators.yaml"), "r") as operators_yaml:
        operators = yaml.safe_load(operators_yaml)

        # remove dev flag nodes from documentation
        operators = {k: v for k, v in operators.items() if "dev" not in v or not v["dev"]}

    for path in os.listdir(markdown_dir):
        if os.path.isdir(path):
            shutil.rmtree(os.path.join(markdown_dir, path))

    # copy markdown files to subdirectory by operator type
    missing_files = []
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

        search_str = "class" if name != "Branch_Python" else "class BranchPythonNode"
        operator_data_list = extract_docstring(operator_filename, search_str=search_str)
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

            dest_file.write(header + operator_data + action_data)

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
