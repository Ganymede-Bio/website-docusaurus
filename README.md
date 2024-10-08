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

## Dependencies

Docusaurus v2.4.0 requires Node 16.14+; this website is known to run under Node v18.12.  You can install node by visiting the [node](https://nodejs.org/en/download) website.  If you run into unexpected issues, rebuild the dependencies by running

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
