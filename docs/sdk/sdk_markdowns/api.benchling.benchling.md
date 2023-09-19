---
sidebar_label: api.benchling.benchling
title: api.benchling.benchling
displayed_sidebar: SDKSidebar
--- 


# api.benchling.benchling



##  `class` Benchling
Benchling object to interact with Benchling API through read and write type methods.


###  Attributes

- **ganymede_context** : `GanymedeContext`
    - Ganymede context to get run attributes  
- **benchling_context** : `BenchlingContext`
    - Benchling context variable, which stores Benchling connection information  
- **conn** : `benchling_sdk.benchling.Benchling`
    - The benchling connection object  
- **run_tag** : `str`
    - Tag associated with flow run  


##  `function` Benchling.__init__
Set up the Benchling object


###  Parameters

- **ganymede_context** : `GanymedeContext`
    - Ganymede context to get run attributes  
- **benchling_context** : `Optional[BenchlingContext]`
    - Benchling context variable, which stores Benchling connection information  


##  `function` Benchling.create_or_update_custom_entity
Creates custom entity in Benchling.  If the entity does not exist, first create it.


###  Parameters

- **entity_name** : `str`
    - Name of new entity to be created  
- **folder_id** : `str`
    - Folder ID containing Benchling entity to be created. This should be a string starting  
    with "lib_"
- **input_schema_id** : `str`
    - Input schema ID Tag. schema associated with Benchling entity to be created. This should  
    be a string starting with "ts_"
- **registry_id** : `str`
    - Project associated with custom entity.  This identifies the registry that your run  
    entity will be registered to.  This can be found by clicking on Avatar - Feature
    Settings - Registry Settings, and you will be able to find it in the URL.  This should
    be a string starting with "src_"
- **custom_entity_fields** : `Optional[Dict]`
    - Dictionary of field names and values to associate with custom entity  
- **author_id** : `Optional[str]`
    - Author ID to associate with custom entity. Should be a string starting with "ent_"  
- **if_exists** : `str`
    - Either "fail" or "update". If "fail", will raise an error if the entity already exists.  


###  Returns

- Dict[str, str]
    - Dictionary with custom entity name as key and custom entity ID as value  


##  `function` Benchling.create_benchling_ids_from_files
Upload blob files to Benchling and return a dictionary of
{blob name: blob ID from Benchling}


###  Parameters

- **files** : `Dict[str, bytes]`
    - Files to upload to Benchling  
- **process_file_names** : `bool`
    - Use to process file_name for benchling by converting string to lowercase and removing  
    periods. Default is False.


###  Returns

- Dict[str, Union[Unset, str]]
    - Returns a dictionary of IDs from benchling_sdk.models.Blob where the keys are the blob  
    names and the benchling IDs are the values


###   Examples
```python

from ganymede_sdk.api.benchling import Benchling
from ganymede_sdk import Ganymede
import pandas as pd

g = Ganymede()
b = Benchling(g.ganymede_context)

# Get the IDs for two files that are uploaded to Benchling

file_ids = b.create_benchling_ids_from_files(
    {"Filename1.csv": file1, "Filename2.csv": file2}, process_file_names=True
) # where file_ids.keys() = ['filename1csv', 'filename2csv']"

file_ids = b.create_benchling_ids_from_files(
    {"Filename1.csv": file1, "Filename2.csv": file2}
) # where file_ids.keys() = ['Filename1.csv', 'Filename2.csv']"
```


##  `function` Benchling.create_assay_results_from_dataframe
Process input DataFrame into assay results for upload to Benchling.


###  Parameters

- **data** : `Union[pd.DataFrame, List[pd.DataFrame]]`
    - Tabular result(s) of data to send to Benchling. Converted to list of dictionaries for  
    each row.
- **schema_id** : `str`
    - ID should contain the Benchling schema ID to write to.  This should be a string starting  
    with "assaysch_"
- **project_id** : `str`
    - ID that results will be recorded against.  This should be a string starting with "src_".  

    The members of your organization that have access to this project will also have
    visibility to the results that this integration generates.  You can find this ID by
    right clicking on the Project that you have selected, and click on "Copy API ID".
    If you don't see "Copy API ID" as an option, click on your avatar, click Settings,
    and scroll to the bottom and verify that
    "Enable Copy API ID button" is checked.
- **replace_special_characters** : `bool`
    - Replace special characters in column names with underscores to mimic Benchling behavior.  
    Default is True.
- **ignore_na** : `bool`
    - Drop columns that only have null values prior to upload. Default is True.  
- **upload** : `bool`
    - Whether to upload List[AssayResults] to Benchling  
- **\*\*kwargs**
    - Keyward args to pass to create_assay_result_from_dict  
    drop_na (Optional[bool])


###  Returns

- `List[AssayResultCreate]`
    - List of AssayResultCreate's to be uploaded to Benchling  


###   Examples
```python

from ganymede_sdk.api.benchling import Benchling
from ganymede_sdk import Ganymede

g = Ganymede()
b = Benchling(g.ganymede_context)

# Create or update the entity
custom_entity_id = b.create_or_update_custom_entity(
    entity_name, folder_id, schema_id, registry_id,
    author_id=None, custom_entity_fields=None, if_exists="fail",
)

# Create file IDs and get dropdown IDs
file_ids = b.create_benchling_ids_from_files({"filename1": file1, "filename2": file2})
dropdown_ids = {dropdown["name"]: dropdown["id"] for dropdown in b.get("dropdowns")}

# Use pandas.DataFrame.replace to link entries in your dataframe with Benchling IDs
# or manually add IDs to the dataframe.
dataframe = dataframe.replace({**custom_entity_id, **file_ids, **dropdown_ids})

# Upload dataframe to Benchling as Assay Results
assay_results = b.create_assay_results_from_files(
    dataframe, schema_id, project_id, drop_na=True, upload=True
)
```


##  `function` Benchling.get_id_from_dropdown_name
Get a dictionary of dropdown name - dropdown id from dropdown summary info identified by
name. Can pass a dropdown id to look up the id of an option of a dropdown


###  Parameters

- **dropdown_name** : `str`
    - Dropdown name to identify id for  
- **\*args**
    - Optional positional arguments to pass to list method of benchling_sdk dropdown service  
- **dropdown_id** : `Optional[str]`
    - If supplied, get the ID of an option in the dropdown specified by the dropdown_name. The  
    default is None.
- **\*\*kwargs**
    - Optional keyword arguments to pass to list method of benchling_sdk dropdown service  


###  Returns

- Dict[str, str]
    - Dictionary of dropdown name - dropdown id for a specified dropdown name. Raises an  
    error if dropdown id is not found


###   Examples
```python

from ganymede_sdk.api.benchling import Benchling
from ganymede_sdk import Ganymede

g = Ganymede()
b = Benchling(g.ganymede_context)

dropdown_id = get_id_from_dropdown_name(
    "option_name",
    b.benchling_context,
    dropdown_id=get_id_from_dropdown_name("Dropdown Name", b.benchling_context),
)
```


##  `function` Benchling.list_available_services
List available Benchling services


###  Returns

- `List[str]`
    - List of available Benchling services  


##  `function` Benchling.get_fields_data
Get a pandas dataframe of benchling service field results such as custom_entity and assay
results data.


###  Parameters

- **service** : `str`
    - Benchling object service (e.g. - 'custom_entities', 'assay_results')  
- **\*args**
    - Optional arguments to pass to list methods of the benchling service  
- **benchling_filter** : `Optional[Dict]`
    - Filter to apply to the list of Benchling objects  
- **\*\*kwargs**
    - Optional keyword arguments to pass to list methods of the benchling service  


###  Raises

- `ValueError`
    - Raise an error if the service argument is not a valid method of benchling_context.conn  
- `ValueError`
    - Raise an error if fields is not an attribute of of the service results.  


###  Returns

- `pd.DataFrame`
    - A dataframe of records returned benchling_context.conn.service.list(_...)  


###   Examples
```python

from ganymede_sdk.api.benchling import Benchling
from ganymede_sdk import Ganymede

g = Ganymede()
b = Benchling(g.ganymede_context)

# Get data frame of fields returned from custom entities and assay_results
df_custom_entity_fields = b.get_fields_data("custom_entity")
df_assay_result_fields = b.get_fields_data("assay_results", "assaysch_1234")
```


##  `function` Benchling.get
Get all Benchling objects of a specific type, optionally filtered by object attributes


###  Parameters

- **service** : `str`
    - Benchling object service (e.g. - 'custom_entities', 'plates', 'entries')  
- **\*args**
    - Optional arguments to pass to list methods of the benchling service  
- **as_dict** : `bool`
    - Whether to return each Benchling object as a dictionary. Default is True.  
- **benchling_filter** : `Optional[Dict]`
    - Filter to apply to the list of Benchling objects  
- **\*\*kwargs**
    - Optional keyword arguments to pass to list methods of the benchling service  


###  Raises

- `ValueError`
    - Raise an error if the service argument is not a valid method of benchling_context.conn  


###   Examples
```python

from ganymede_sdk.api.benchling import Benchling
from ganymede_sdk import Ganymede

g = Ganymede()
b = Benchling(g.ganymede_context)

# retrieve all custom entities
custom_entities = b.get('custom_entities')

# retrieve custom entities with names "ent1" and "ent2"
custom_entities = b.get('custom_entities', ['ent1', 'ent2'])

# retrieve custom entities by Benchling IDs
custom_entities = b.get('custom_entities', ids=['bfi_1234', 'bfi_5678'])

# retrieve plate named "my_plate_name"
test_plate = b.get('plates', benchling_filter={'name': 'my_plate_name'})[0]

# to get a list of available services (e.g. - plates, custom_entities, etc.)
b.list_available_services()
```


##  `function` Benchling.get_models_to_map
Get a dictionary mapping names to Benchling IDs from a list of dictionaries. This can be
used in conjuction with Genchling.get()


###  Parameters

- **benchling_service_results** : `str`
    - Results of the form List[dict] returned from get() where "id" and "name" are common keys  
    in the dict.
- **keys** : `str`
    - The key name of the inner dictionaries in the list used to set the key in the returned  
    dictionary.
- **values** : `str`
    - The key name of the inner dictionaries Used to set the values in the returned dictionary  
    Optional keyword arguments to pass to list methods of the benchling service


###  Returns

- `dict`
    - Dictionary mapping names to the benchling IDs  


###   Examples
```python

from ganymede_sdk.api.benchling import Benchling
from ganymede_sdk import Ganymede

g = Ganymede()
b = Benchling(g.ganymede_context)

# Get the dropdowns of the form [{"id": id, "name": name}]
results = b.get("dropdowns")

# Convert list of dictionaries to dictionary where name is the key and id are the values
# of the form {name: value}
dropdown_names_to_ids = b.get_model_to_map(results, keys='name', values='id')
```


##  `function` Benchling.validate_assay_result_schema_names
Validate column names in a DataFrame against an assay result schema.


###  Parameters

- **df** : `pd.DataFrame`
    - The DataFrame containing data to be validated against the assay result schema.  
- **assay_result_id** : `str`
    - The unique identifier of the assay result schema in Benchling.  


###  Returns

- `set`
    - A set of matched field names between the DataFrame and the assay result schema.  


###  Raises

- `SchemaError`
    - If there are unmatched fields between the DataFrame and the assay result schema.  


##  `function` Benchling.get_assay_result_schema_table
Retrieve the schema table for an assay result using its ID.


###  Parameters

- **assay_result_id** : `str`
    - The unique identifier of the assay result.  


###  Returns

- `pd.DataFrame`
    - A DataFrame containing the field definitions of the assay result schema.  


###   Examples
```python

from ganymede_sdk import Ganymede
from ganymede_sdk.api.benchling import Benchling

g = Ganymede()
b = Benchling(g.ganymede_context)

result_id = "example_result_id"
schema_table = b.get_assay_result_schema_table(result_id)
```


##  `class` SchemaError
Raised when the assay result trying to be created does not match the table schema in Benchling