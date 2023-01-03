import os
import yaml
import json
import shutil
import re
from typing import List

keywords = ['Parameters', 'Notes', 'Returns', 'Yields', 'Raises', 'Node Attributes']


def extract_docstring(filename: str, search_str: str = 'class', python_spaces: str = 4) -> List:
    """
    Extracts docstring from Ganymede operator class
    """

    docstrings = []
    is_comment = False
    search_str_found = False
    lines = open(filename, 'r').readlines()
    current_table = None

    for prev_line, line in zip(lines[:-1], lines[1:]):
        line_stripped = line.strip()

        if prev_line.startswith(search_str):
            search_str_found = True
            
        if not search_str_found:
            continue
            
        if prev_line.strip().endswith(":") and line_stripped.startswith('"""'):
            is_comment = True
        elif line_stripped.endswith('"""') and is_comment:
            is_comment = False
            break
        elif prev_line.strip() in keywords and line.strip() == "-" * len(prev_line.strip()):
            cleaned_docstring = prev_line[python_spaces:].strip()
            docstrings[-1] = f"\n### {cleaned_docstring}"
            current_table = cleaned_docstring
        elif is_comment:
            if re.search(r'^\w+ : .+$', line.strip()):
                params = [val.strip() for val in line.split(':')]
                docstrings.append(f"- **{params[0]}**" + " : " + f"`{params[1]}`")
            elif len(docstrings) > 1 and docstrings[-1].strip() == '### Returns' and current_table == 'Returns':
                docstrings.append(f'`{line.strip()}`')
            else:
                if current_table:
                    table_record = re.findall(r"^( +)(.+)", line)

                    if not table_record:
                        docstrings.append(line_stripped)
                        continue
                    table_record = table_record[0]

                    num_spaces = len(table_record[0]) // python_spaces
                    if current_table != 'Parameters':
                        num_spaces -= 1

                    if current_table == 'Notes':
                        docstring_line = table_record[1].strip()
                    elif current_table == 'Node Attributes' and num_spaces == 0:
                        docstring_line = num_spaces * "  " + "- **" + table_record[1].strip() + "**"
                    else:
                        docstring_line = max(num_spaces, 0) * "  " + "- " + table_record[1]
                    docstrings.append(docstring_line)
                else:
                    docstrings.append(line_stripped)
    return docstrings


if __name__ == "__main__":
    """Generates sidebars for nodes"""

    markdown_dir = '../docs/nodes'
    operators_dir = '../core-operators'

    with open(os.path.join(operators_dir, 'operators.yaml'), 'r') as operators_yaml:
        operators = yaml.safe_load(operators_yaml)

    for path in os.listdir(markdown_dir):
        if os.path.isdir(path):
            shutil.rmtree(os.path.join(markdown_dir, path))

    # copy markdown files to subdirectory by operator type
    missing_files = []
    for name, desc in operators.items():
        operator_filename = os.path.join(operators_dir, "/".join(desc['path'].split('.')[1:-1])) + ".py"
        print(f"processing {operator_filename}...")

        dest_dir = os.path.join(markdown_dir, desc['type'])
        if not os.path.exists(dest_dir):
            os.makedirs(dest_dir)

        operator_data_list = extract_docstring(operator_filename, search_str='class')
        operator_data = "### Node Operator\n" + "\n".join(operator_data_list)

        action_data = ""
        if 'action' in desc:
            action_file = desc['action'].split('/')[-1]

            if 'action' in desc and not action_file.endswith('.sql'):
                action_file_path = os.path.join(operators_dir, "/".join(desc['action'].split('/')[:-1]))

                [action_filename] = [user_defined_file for user_defined_file in
                                     os.listdir(action_file_path)
                                     if user_defined_file.endswith('.py')]
                action_filename = os.path.join(action_file_path, action_filename)
                print(f"processing {action_filename}...")

                action_data_list = extract_docstring(action_filename, search_str='def execute(')
                action_data = "\n## User-Defined Python\n" + "\n".join(action_data_list)

        with open(os.path.join(dest_dir, f'{name}.md'), 'w') as dest_file:
            header = ("---\n"
                      f"sidebar_label: {name}\n"
                      f"title: {name}\n"
                      "displayed_sidebar: nodeSidebar\n"
                      "---\n\n")

            dest_file.write(header + operator_data + action_data)

    # create sidebar JSON files
    operator_types = set([v['type'] for v in operators.values()])
    for operator_type in operator_types:
        sidebar = dict()
        sidebar['type'] = 'category'
        sidebar['label'] = operator_type
        sidebar['items'] = [f"nodes/{operator_type}/{k}"
                            for k, v in operators.items()
                            if v['path'].split('.')[-2] not in missing_files
                            and v['type'] == operator_type]
        with open(os.path.join(markdown_dir, operator_type, 'sidebar.json'), 'w') as json_file:
            json_file.write(json.dumps(sidebar))
