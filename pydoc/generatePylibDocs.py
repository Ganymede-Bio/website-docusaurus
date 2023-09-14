import os
import ast
import textwrap
import re
import json


SIDEBAR_HEADER = """---
sidebar_label: {}
title: {}
displayed_sidebar: SDKSidebar
--- \n\n
"""

PKG = "ganymede_sdk"
PYLIB_PATH = f"../pylib/src/{PKG}"
SAVE_PATH = "../docs/sdk/sdk_markdowns"
sidebar = {"type": "category", "label": "API", "items": []}

keywords = [
    "Parameters",
    "Returns",
    "Notes",
    "Note",
    "Example",
    "Examples",
    "Attributes",
    "Raises",
    "Raise",
]


def dir_files_docstrings_to_markdown_files(_dir, save_path, sidebar):
    for path, subdirs, files in os.walk(_dir):
        for file in files:
            if not re.search(".py$", file) or re.search("__init__", file):
                continue
            if "benchling" not in path and "coda" not in path:
                continue
            file_path = os.path.join(path, file)

            header = re.sub(f".*?({PKG})", r"\1", file_path)
            header = re.sub(r"/", ".", header).replace(".py", "")
            header = re.sub(f"{PKG}\\.", "", header)

            docstrings_md = file_docstrings_to_markdown(file_path, header=header)
            docstrings_md = SIDEBAR_HEADER.format(header, header) + docstrings_md

            markdown_file = os.path.join(save_path, f"{header}.md")
            with open(markdown_file, "w") as mf:
                mf.write(docstrings_md)

            sidebar["items"].append(f"sdk/sdk_markdowns/{header}")


def file_docstrings_to_markdown(file_path, header=None):
    docstrings_dict = extract_docstrings(file_path)

    markdowns = [f"# {header}\n"] if header else []

    for key, val in (docstrings_dict).items():
        markdowns.append("\n" + docstring_to_markdown(key, val))

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
                    and isinstance(item.body[0].value, ast.Str)
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
                    and isinstance(item.body[0].value, ast.Str)
                ):
                    class_docstring = item.body[0].value.s
                    docstrings_dict[f"`class` {current_class}"] = textwrap.dedent(class_docstring)
                for class_item in item.body:
                    if isinstance(class_item, ast.FunctionDef):
                        if (
                            class_item.body
                            and isinstance(class_item.body[0], ast.Expr)
                            and isinstance(class_item.body[0].value, ast.Str)
                        ):
                            function_key = f"`function` {current_class}.{class_item.name}"
                            if function_key not in docstrings_dict:
                                docstring = class_item.body[0].value.s
                                formatted_docstring = textwrap.dedent(docstring)
                                docstrings_dict[function_key] = formatted_docstring
                current_class = None

    return docstrings_dict


def docstring_to_markdown(method, docstring):
    docstring = f"## {method}\n" + docstring.strip("\n")

    pattern = r'(?<!>)>(?!>)|(?<!<)<(?!<)'
    docstring = re.sub(pattern, "", docstring)

    docstring = add_hashtags_to_function_fields(docstring)

    docstring = remove_dashed_lines_from_docstring(docstring)

    markdown = add_dashes_to_function_fields(docstring)
    markdown = example_fields_to_markdown(markdown)

    return markdown


def add_hashtags_to_function_fields(docstring):
    new_lines = []
    for line in docstring.split("\n"):
        if line.strip(" ") in keywords:
            line = "### " + line
        new_lines.append(line)
    docstring = "\n".join(new_lines)
    return docstring


def remove_dashed_lines_from_docstring(docstring):
    new_lines = []
    for line in docstring.split("\n"):
        if not set(line).difference("-"):
            line = ""
        new_lines.append(line)
    docstring = "\n".join(new_lines)
    return docstring


def add_dashes_to_function_fields(input_text):
    new_fields = []
    fields = re.split("###|##", input_text)
    for field in fields:
        if re.search("`class`|`function`", field):
            new_fields.append(f"## {field}")
            continue
        if re.search("Example|Examples|Notes", field):
            new_fields.append(f"### {field}")
            continue
        field = re.sub(r"\*", r"\\*", field)
        new_field = []
        for text in field.split("\n"):
            if "*" in text and ":" not in text:
                text = text + ":"
            if ":" in text:
                params = [val.strip() for val in text.split(":")]
                text = (
                    f"**{params[0]}**" + " : " + f"`{params[1]}`"
                    if params[1] != ""
                    else f"**{params[0]}**"
                )
            elif len(text.split(" ")) == 1 and not re.search("|".join(keywords), text):
                text = f"`{text}`" if len(text) > 1 else text
            else:
                text = text
            new_field.append(text)
        new_field = "\n".join(new_field)
        formatted_lines = [
            f"- {line}"
            if not re.search(r"^\s|^$", line) and not re.search("|".join(keywords), line)
            else line
            for line in new_field.split("\n")
        ]
        i = 1
        while i < len(formatted_lines):
            cur_line = formatted_lines[i]
            prev_line = formatted_lines[i - 1]
            if prev_line.startswith("-"):
                spaces = re.search(r"^\s*", cur_line).group()
                formatted_lines[i] = f"{spaces}- {cur_line.strip()}  "
            i += 1
        new_field = "\n".join(formatted_lines)
        new_fields.append("### " + new_field if len(new_field) > 1 else new_field)
    new_fields = "\n".join(new_fields)
    return new_fields


def example_fields_to_markdown(markdown):
    markdown = markdown.split("###")
    new_markdown = []
    for line in markdown:
        if "Example" in line:
            line = "\n".join([_.lstrip("-").lstrip("-") for _ in line.split("\n")])
            line = re.sub("Examples\n|Example\n", " Examples\n```python\n", line)
            line += "\n```"
        new_markdown.append(line)

    markdown = "###".join(new_markdown)
    return markdown


if __name__ == "__main__":
    dir_files_docstrings_to_markdown_files(PYLIB_PATH, SAVE_PATH, sidebar)
    with open(os.path.join(SAVE_PATH, "sidebar.json"), "w") as sb_file:
        json.dump(sidebar, sb_file)
