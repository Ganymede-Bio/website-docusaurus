import ast
import json
import os
import re
import textwrap

SIDEBAR_HEADER = """---
sidebar_label: {}
title: {}
displayed_sidebar: SDKSidebar
--- \n\n
"""

PKG = "ganymede_sdk"
PYLIB_PATH = f"../pylib/src/{PKG}"
SAVE_PATH = "../docs/sdk/sdk_markdowns"

sidebar_dict = {
    "api": {"type": "category", "label": "API", "collapsed": True, "items": []},
    "analytics": {
        "type": "category",
        "label": "Analytics",
        "collapsed": True,
        "items": [],
    },
}

KEYWORDS = "|".join(
    [
        "Parameters",
        "Returns",
        "Notes",
        "Note",
        "Example",
        "Examples",
        "Attributes",
        "Raises",
        "Raise",
        "Method",
    ]
)


def dir_files_docstrings_to_markdown_files(_dir, save_path):
    for path, _, files in os.walk(_dir):
        for file in files:
            if not re.search(".py$", file) or re.search("__init__", file):
                continue
            if not re.search("benchling|coda|analytics|signals", path):
                continue
            file_path = os.path.join(path, file)

            header = re.sub(f".*?({PKG})", r"\1", file_path)
            header = re.sub(r"/", ".", header).replace(".py", "")
            header = re.sub(f"{PKG}\\.", "", header)

            md_key = header.split(".")[0]
            header = ".".join(header.split(".")[1:])

            docstrings_md = file_docstrings_to_markdown(file_path, header=header)

            if docstrings_md is None:
                print(f"{file_path} is empty")
                continue

            docstrings_md = SIDEBAR_HEADER.format(header, header) + docstrings_md

            markdown_file = os.path.join(save_path, f"{header}.md")
            with open(markdown_file, "w") as mf:
                mf.write(docstrings_md.replace("{", "\{").replace("}", "\}"))

            sidebar_dict[md_key]["items"].append(f"sdk/sdk_markdowns/{header}")


def file_docstrings_to_markdown(file_path, header=None):
    docstrings_dict = extract_docstrings(file_path)

    if len(docstrings_dict) < 1:
        return None

    markdowns = [f"# {header}\n"] if header else []

    for key, val in (docstrings_dict).items():
        markdowns.append("\n" + convert_docstring_to_markdown(key, val))

    return "\n".join(markdowns)


def extract_docstrings(file_path):
    docstrings_dict = {}

    current_class = None
    class_docstring = None

    with open(file_path, "r") as file:
        file_contents = file.read()
        parsed = ast.parse(file_contents)

        for item in parsed.body:
            if isinstance(item, ast.FunctionDef):
                if (
                    item.body
                    and isinstance(item.body[0], ast.Expr)
                    and isinstance(item.body[0].value, ast.Constant)
                    and not item.name.startswith("_")
                ):
                    if current_class:
                        function_key = f"`function` {current_class}.{item.name}"
                    else:
                        function_key = f"`function` {item.name}"

                    if function_key not in docstrings_dict:
                        docstring = item.body[0].value.s
                        formatted_docstring = textwrap.dedent(docstring)
                        docstrings_dict[function_key] = formatted_docstring
            elif isinstance(item, ast.ClassDef):
                current_class = item.name
                if (
                    item.body
                    and isinstance(item.body[0], ast.Expr)
                    and isinstance(item.body[0].value, ast.Constant)
                ):
                    class_docstring = item.body[0].value.s
                    docstrings_dict[f"`class` {current_class}"] = textwrap.dedent(class_docstring)
                for class_item in item.body:
                    if isinstance(class_item, ast.FunctionDef):
                        if (
                            class_item.body
                            and isinstance(class_item.body[0], ast.Expr)
                            and isinstance(class_item.body[0].value, ast.Constant)
                            and (
                                not class_item.name.startswith("_")
                                or (
                                    class_item.name.startswith("__")
                                    and class_item.name.endswith("__")
                                )
                            )
                        ):
                            function_key = f"`function` {current_class}.{class_item.name}"
                            if function_key not in docstrings_dict:
                                docstring = class_item.body[0].value.s
                                formatted_docstring = textwrap.dedent(docstring)
                                docstrings_dict[function_key] = formatted_docstring
                current_class = None

    return docstrings_dict


def convert_docstring_to_markdown(method, docstring):
    docstring = textwrap.dedent(docstring)

    # Remove single uses of > and < since they throw HTML errors
    pattern = r"(?<!>)>(?!>)|(?<!<)<(?!<)"
    docstring = re.sub(pattern, "", docstring)

    # Replace the section headers with markdown headings
    docstring = re.sub(r"([A-Z][a-z]+)\n-{3,}", r"### \1\n", docstring)

    field_splits = re.split("###", docstring)

    docstring = "###".join([convert_fields_to_markdown(field) for field in field_splits])

    # Keep new line structure on markdown view
    docstring = re.sub(r"\n", r"  \n", docstring)

    docstring = f"## {method}\n{docstring}"

    return docstring


def convert_fields_to_markdown(docstring):
    docstring = convert_parameters_to_markdown(docstring)
    docstring = convert_examples_to_markdown(docstring)
    docstring = fix_indents(docstring)

    return docstring


def convert_parameters_to_markdown(docstring):
    if not re.search("^Method|^Parameter|^Attribute|^Return|^Raise", docstring.strip()):
        return docstring
    patterns = [
        r"(\w+\[.+\])\s?:?\s?",
        r"(\w+\(.+\))\s?:?\s?",
        r"(\*{0,2}\w+\.?\w+)\s?:\s?(.+)",
        r"(\*{0,2}\w+\.?\w+)\s?",
    ]
    pattern = "|".join(patterns)
    new_lines = []
    for line in docstring.split("\n"):
        if line.strip() == "" or re.search(KEYWORDS, line) or re.search(r"^-|^\s{1,4}", line):
            new_lines.append(line)
            continue
        line = re.sub(r"-", "_", line)

        matches = re.search(pattern, line)
        matches = [match.replace("*", r"\*") for match in matches.groups() if match]
        if len(matches) > 1:
            matches = list(map(lambda x, y: y + x + y, matches, ["**", "`"]))
        elif re.search("Return", docstring):
            matches = list(map(lambda x, y: y + x + y, matches, ["`"]))
        else:
            matches = list(map(lambda x, y: y + x + y, matches, ["**"]))
        new_lines.append(" : ".join(matches))
    docstring = "\n".join(new_lines)

    return docstring


def convert_examples_to_markdown(docstring):
    if not re.search("^Example", docstring.strip()):
        return docstring

    pattern = r"^(\s*Examples?)+\n"
    repl = r"\1\n\n```python"
    docstring = re.sub(pattern, repl, docstring, flags=re.MULTILINE) + "```"

    return docstring


def fix_indents(docstring):
    if re.search("^Example", docstring.strip()):
        return docstring
    docstring = re.sub(r"  ", 2 * r"&nbsp; ", docstring)
    return docstring


if __name__ == "__main__":
    dir_files_docstrings_to_markdown_files(PYLIB_PATH, SAVE_PATH)
    for key, val in sidebar_dict.items():
        with open(os.path.join(SAVE_PATH, f"sidebar_{key}.json"), "w") as sb_file:
            json.dump(val, sb_file)
