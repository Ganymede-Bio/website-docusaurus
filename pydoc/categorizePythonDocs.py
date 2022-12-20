import os
import yaml
import json
import shutil

if __name__ == "__main__":
    """Generates sidebars for Nodes"""

    markdown_dir = '../docs/nodes'

    with open('../core-operators/operators.yaml', 'r') as operators_yaml:
        operators = yaml.safe_load(operators_yaml)

    for path in os.listdir(markdown_dir):
        if os.path.isdir(path):
            shutil.rmtree(os.path.join(markdown_dir, path))

    # copy markdown files to subdirectory by operator type
    missing_files = []
    for name, desc in operators.items():
        src_filename = desc['path'].split('.')[-2]

        src = os.path.join(markdown_dir, f'{src_filename}.md')

        if not os.path.exists(src):
            missing_files.append(src_filename)
            print(f'Warning: {src} does not exist; markdown file for {src} not copied..')
            continue

        with open(src, 'r') as src_file:
            dest_dir = os.path.join(markdown_dir, desc['type'])
            if not os.path.exists(dest_dir):
                os.makedirs(dest_dir)
            src_data = src_file.read()

        with open(os.path.join(dest_dir, f'{name}.md'), 'w') as dest_file:
            header = ("---\n"
                      f"sidebar_label: {name}\n"
                      f"title: {name}\n"
                      "displayed_sidebar: nodeSidebar\n"
                      "---\n\n")

            dest_file.write(header + src_data)

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
