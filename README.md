# Ganymede Documentation

This repository hosts documentation for using the Ganymede Cloud Server. It is served at [docs.ganymede.bio](https://docs.ganymede.bio).

---

## Setup for local development

Download and install [nodejs](https://nodejs.org/en/download).  Install v18.16 LTS (or other LTS version with a major version number of 18) if possible.

Download and install [VS Code](https://code.visualstudio.com/) or other editor of choice.

If you are using MacOS, install brew by running the following in terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install xcode command line tools by running: 

```bash
xcode-select --install
```

Clone the website-docusaurus repo

```bash
git clone https://github.com/Ganymede-Bio/website-docusaurus.git
```

> It is necessary to create an `.env` file to configure Typesense to get the following steps to work. [Instructions here](https://docs.google.com/document/d/1e9MGV-JOuCrt06K_9yyWBO5McjJDGCDNlCspIe1Jjz8/edit#)

### Install packages required for running documentation website

```bash
npm install --global yarn
yarn install
yarn build
```

---

## Run website-docusaurus locally

Run local instance for debugging (defaults to port 3000).  Doing so, you should be able to see the website in the browser by visiting [localhost:3000](localhost:3000).

```bash
yarn start
```

## Editing website-docusaurus

1. Create a new branch, so that you can validate website updates before deploying to [docs.ganymede.bio](docs.ganymede.bio).  The -b option on the checkout command below creates a new branch.

```bash
cd website-docusaurus
git checkout -b <name-of-new-branch>
```

2. Make changes.  Changes should viewable in the browser on [localhost:3000](localhost:3000)

3. When satisfied, with changes, run the following code.  You should be able to view changes after a couple minutes from the link in the notifications-website channel in Slack.

```bash
git commit -am '<description of changes>'
git push
```

4. If successful, run the following code to deploy to [docs.ganymede.bio](docs.ganymede.bio)

```bash
git checkout main
git merge <name-of-new-branch>
git push
```

---

## Generating API Docs

`yarn api` will generate new docs based on the openapi yaml definition that is linked via api-server.

## Make Commands

The project includes a Makefile with various commands to help manage documentation and builds. Run `make help` to see all available commands.

### Development Commands

```bash
make start          # Start development server
make build          # Build for production (with exclusions for optimized build)
make clean          # Clean build artifacts
make dev            # Start dev server with all files restored
```

### API Documentation Management

Commands for managing API documentation generation and file exclusions:

```bash
make api-generate   # Generate API docs and apply exclusions
make api-exclude    # Exclude large API documentation files (>350KB)
make api-restore    # Restore all excluded API files for development
make api-list       # List API files that would be excluded
make api-status     # Show current API exclusion status
make api-clean      # Remove all API documentation
```

#### Common API Workflows

**Generate new API documentation:**
```bash
make api-generate
```
This will:
1. Run `yarn api` to generate docs from OpenAPI spec
2. Automatically exclude large files (>350KB) to optimize builds
3. Update sidebar to remove references to excluded files

**Develop with all API docs:**
```bash
make api-restore    # Restore all files
make start          # Start dev server
```

**Production build:**
```bash
make build          # Automatically excludes large files before building
```

### Node Documentation

```bash
make node-docs      # Generate node documentation from submodules
```

### Combined Workflows

```bash
make docs-all       # Generate all documentation (API + nodes)
make build-optimized # Build with optimizations (excludes large files)
```

### Utility Commands

```bash
make check-size     # Check size of documentation folders
make validate       # Validate that build will work
make install        # Install dependencies
make setup          # Setup project (install + build)
```

### API Build Optimization

The build system automatically excludes large API documentation files (>350KB) that contain circular references or excessive nested structures. These files can cause memory issues during builds. The exclusion system:

- Identifies files larger than 350KB
- Renames them to `.excluded` extension
- Updates the sidebar to remove references
- Reduces build size from ~15MB to ~0.36MB

To see which files are excluded: `make api-status`
To restore all files for development: `make api-restore`

### Sidebar Management Script

The `scripts/update-sidebar.js` script manages the API documentation sidebar (`docs/api/sidebar.ts`). It performs several important functions:

#### Features

1. **Remove Excluded Files**: Removes references to excluded documentation files from the sidebar
2. **Remove PublicApi Category**: Automatically removes the duplicate PublicApi category that contains the same endpoints as other categories
3. **Sort Schemas Alphabetically**: Sorts all schema entries in the Schemas section alphabetically for easier navigation

#### Usage

```bash
# Run directly
node scripts/update-sidebar.js

# Or via make command (runs automatically with api-generate)
make api-generate
```

#### How It Works

- **Exclusion Processing**: Reads `.exclude-list` file and removes any matching entries from sidebar
- **PublicApi Removal**: Detects and removes the entire PublicApi category to avoid duplication
- **Schema Sorting**: Parses the Schemas section and sorts all entries alphabetically by label
- **Cleanup**: Removes any formatting issues like double commas or trailing commas

The script runs automatically as part of `make api-generate` to ensure the sidebar stays clean and organized.

## Dependencies

Docusaurus v2.6 requires Node 18+; this website is known to run under Node v18.12.  You can install node by visiting the [node](https://nodejs.org/en/download) website.  If you run into unexpected issues, rebuild the dependencies by running

```bash
yarn clear
yarn build
```

---

## Building Node docs

Documentation for nodes is built using `pydoc-markdown` and pulling from `core-operators` as a submodule.  The generatorOperatorDocs.py script retrieves comments from operator code and systematically re-formats the comments as Markdown.

### Initial setup

Install the dependencies

```bash
pushd pydoc
python3 -m venv env 
source env/bin/activate
pip install -r requirements.txt
deactivate
popd
```

### Node documentation generation

Fetch the latest nodes and generate the docs

```bash
git submodule update --recursive --remote --init
pushd pydoc
source env/bin/activate
python generateOperatorDocs.py
python generatePylibDocs.py
python generateAllotropeDocs.py
deactivate
popd
```

### API Server documentation generation

Fetch the latest nodes and generate the docs

```bash
git submodule update --recursive --remote --init api-server
yarn run api
```

---

## Notes on Docusaurus, as used in this repo

### Key files

* sidebars.js in the root directory contains the layout of the sidebars for each page
* docusaurus.config.js in the root directory contains navbar and footer menu

### Docusaurus features

* Documentation files are in [MD or MDX format](https://docusaurus.io/docs/markdown-features/react); MDX is markdown that allows for React components
* [Admonitions](https://docusaurus.io/docs/markdown-features/admonitions) are used to add colored chips
* The [title size determines how titles are featured in a sidebar](https://docusaurus.io/docs/markdown-features/toc)

### Images

To add images, drop them into [this GCS bucket](https://console.cloud.google.com/storage/browser/ganymede-bio-website/public;tab=objects?project=ganymede-website-356920&pageState=(%22StorageObjectListTable%22:(%22f%22:%22%255B%255D%22))&prefix=&forceOnObjectsSortingFiltering=false)


### Spellchecking

To add new words to the allowed list, update `.wordlist.txt`.

---

## License

[Apache 2.0](https://github.com/Ganymede-Bio/website-docusaurus/blob/main/LICENSE)

Ganymede Documentation is developed using [Docusaurus](https://docusaurus.io/)
