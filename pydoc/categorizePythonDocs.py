import os
import yaml
import json
import shutil

if __name__ == "__main__":
    """Generates sidebars for Nodes
    """
    markdown_dir = '../docs/nodes'

    with open('../core-operators/operators.yaml', 'r') as operators_yaml:
        operators = yaml.safe_load(operators_yaml)

    for path in os.listdir(markdown_dir):
        if os.path.isdir(path):
            shutil.rmtree(os.path.join(markdown_dir, path))

    # copy markdown files to subdirectory by operator type
    missing_files = []
    for name, desc in operators.items():
        filename = desc['path'].split('.')[-2]

        src = os.path.join(markdown_dir, f'{filename}.md')

        if not os.path.exists(src):
            missing_files.append(filename)
            print(f'Warning: {src} does not exist; markdown file for {src} not copied..')
            continue

        dest_dir = os.path.join(markdown_dir, desc['type'])
        if not os.path.exists(dest_dir):
            os.makedirs(dest_dir)
        dst = os.path.join(dest_dir, f'{filename}.md')

        shutil.copyfile(src, dst)

    # create sidebar JSON files
    operator_types = set([v['type'] for v in operators.values()])
    for operator_type in operator_types:
        sidebar = dict()
        sidebar['type'] = 'category'
        sidebar['label'] = operator_type
        sidebar['items'] = [f"nodes/{operator_type}/{v['path'].split('.')[-2]}" 
                            for v in operators.values()
                            if v['path'].split('.')[-2] not in missing_files
                            and v['type'] == operator_type]
        with open(os.path.join(markdown_dir, operator_type, 'sidebar.json'), 'w') as json_file:
            json_file.write(json.dumps(sidebar))
