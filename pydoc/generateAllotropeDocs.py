def get_allotrope_schema_dict(path: str) -> dict:
    allotrope_globals = {}
    with open(path, "r") as f:
        exec(f.read(), allotrope_globals)

    instrument_schemas = [
        value for name, value in allotrope_globals.items() if name.endswith("Schema")
    ]

    instrument_schema_dict = {}
    for instrument_schema in instrument_schemas:
        document_list = []

        for document_name in dir(instrument_schema):
            if document_name.startswith("_"):
                continue

            document = getattr(instrument_schema, document_name)
            if hasattr(document, "dtypes"):
                document_list.append({document_name: document.dtypes})

        instrument_schema_dict[instrument_schema.__name__] = document_list

    return {k: v for k, v in instrument_schema_dict.items() if v}


if __name__ == "__main__":
    allotrope_classes = "../pylib/src/ganymede_sdk/validation/allotrope.py"
    allotrope_schema_dict = get_allotrope_schema_dict(allotrope_classes)

    with open("../docs/api/markdowns/allotrope_schema.md", "w+") as f:
        f.writelines(
            [
                "---\n",
                "sidebar_label: Allotrope Schemas\n",
                "title: Allotrope Schemas\n",
                "displayed_sidebar: APISidebar\n",
                "---",
            ]
        )
        f.write("\n\n\n")

        f.write("## Allotrope Validation Schemas\n\n\n")

        f.write(
            """This page contains the validation schemas to validate Pandas DataFrames against Allotrope data models (ADM).  All models with a REC (recommendation) [status](https://www.allotrope.org/product-releases) is currently supported.  Each schema corresponds to the most recent recommended data model for each instrument.\n

Example code for validating a Pandas DataFrame against a schema is shown below.  For more information on validation functionality, see [Pandera documentation](https://pandera.readthedocs.io/en/stable/index.html).\n\n

```python
from ganymede_sdk.validation.allotrope import *
automated_reactors_schema = AutomatedReactorsSchema()

# Validate data types of an example DataFrame called df_reactor_FTIR
# which contains the FTIR document from the Automated Reactors schema
df_reactor_FTIR = automated_reactors_schema.FTIR_profile.validate(df_reactor_FTIR)
```
                """
        )
        f.write("\n\n")

        for instrument_schema_name, documents in allotrope_schema_dict.items():
            f.write(f"### `instrument` {instrument_schema_name}\n\n")

            for document in documents:
                for document_name, columns in document.items():
                    f.write(f"#### `table` {document_name}\n\n")

                    for column_name, column_type in columns.items():
                        f.write(f"- **{column_name}**: {column_type}\n")
                    f.write("\n")
