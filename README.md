# Ganymede Documentation

This repository hosts documentation for using the Ganymede Cloud Server. It is served at docs.ganymede.bio.

---

#### Installation
```
yarn install
yarn build
```
#### Run local instance for debugging (defaulting to port 3000)
```
yarn start
```
---

## Dependencies

Docusaurus v2.0.0 requires Node 16.14+; this website is known to run under Node 18.7.  If you run into unexpected issues, rebuild the dependencies by running
```
> yarn clear
> yarn build
```

---

## Building Function docs

Function documentation is built using `pydoc-markdown` and pulling from `core-operators` as a submodule.

### Initial setup

Install the dependencies
```
pushd pydoc
python3 -m venv env 
source env/bin/activate
pip install -r requirements.txt
deactivate
popd
```

### Doc generation

Fetch the latest operators and generate the docs

```
git submodule update --recursive --remote --init
pushd pydoc
source env/bin/activate
python generateOperatorDocs.py
deactivate
popd
```

### Updating search crawler

1. Follow [setup instructions on typesense documentation search](https://typesense.org/docs/guide/docsearch.html)

2. Run the following command:
```
docker run -it --env-file=.env -e "CONFIG=$(cat docsearch-config.json | jq -r tostring)" typesense/docsearch-scraper
```

## License

[Apache 2.0](https://github.com/Ganymede-Bio/website-docusaurus/blob/main/LICENSE)

Ganymede Documentation is developed using [Docusaurus](https://docusaurus.io/)
