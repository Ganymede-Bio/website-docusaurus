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
    - Input schema ID Tag. schema associated with Benchling entity to be created This should  
    be a string starting with "ts_"
- **registry_id** : `str`
    - Project associated with custom entity.  This identifies the registry that your run  
    entity will be registered to.  This can be found by clicking on Avatar -> Feature
    Settings -> Registry Settings, and you will be able to find it in the URL.  This should
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
Upload blob files to Benchling and return a dictionary of {filename: ID}


###  Parameters

- **files** : `Dict[str, bytes]`
    - Files to upload to Benchling  


###  Returns

- Dict[str, Union[Unset, str]]
    - Returns a dictionary of IDs from benchling_sdk.models.Blob  


###   Examples
```python

from ganymede_sdk.api.benchling import Benchling
from ganymede_sdk.editor import MockGanymedeContext
import pandas as pd

mock_ganymede_context = MockGanymedeContext()
b = Benchling(mock_ganymede_context)

# Get the IDs for two files that are uploaded to Benchling
file_ids = b.create_benchling_ids_from_files({"filename1": file1, "filename2": file2})
```


##  `function` Benchling.create_assay_results_from_dataframe
Process input DataFrame into assay results for upload to Benchling.


###  Parameters

- **data** : `Union[pd.DataFrame, List[pd.DataFrame]]`
    - Tabular result(s) of data to send to Benchling. Converted to list of dictionaries for  
    each row.
- **schema_id** : `str`
    - Benchling schema id  
- **project_id** : `str`
    - Benchling project id  
- **upload** : `bool`
    - Whether to upload List[AssayResults] to Benchling  
- ***\*kwargs**
    - Keyward args to pass to create_assay_result_from_dict  
    drop_na (Optional[bool])


###  Returns

- `List[AssayResultCreate]`
    - List of AssayResultCreate's to be uploaded to Benchling  


###   Examples
```python

from ganymede_sdk.api.benchling import Benchling
from ganymede_sdk.editor import MockGanymedeContext

mock_ganymede_context = MockGanymedeContext()
b = Benchling(mock_ganymede_context)

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
dataframe = dataframe.replace({*\*custom_entity_id, *\*file_ids, *\*dropdown_ids})

# Upload dataframe to Benchling as Assay Results
assay_results = b.create_assay_results_from_files(
    dataframe, schema_id, project_id, drop_na=True, upload=True
)
```


##  `function` Benchling.upload_results
Batch upload results to Benchling


###  Parameters

- **benchling_results** : `Union[List[AssayResultCreate], Dict[str, Union[Unset, str]]]`
    - Results to upload to Benchling  


##  `function` Benchling.get_id_from_dropdown_name
Get dropdown id from dropdown summary info identified by name. Can pass a dropdown id look
up within the corresponding dropdown summary.


###  Parameters

- **dropdown_name** : `str`
    - Dropdown name to identify id for  
- **\*args**
    - Optional positional arguments to pass to list method of benchling_sdk dropdown service  
- ***\*kwargs**
    - dropdown_id (Optional[str]). If none, list all dropdowns. If given, list all dropdowns  
    of that id. Also accepts other optional keyword arguments to pass to list method of
    benchling_sdk dropdown service


###  Returns

- `str`
    - dropdown id associated with dropdown name. Raises an error if dropdown id is not found  


##  `function` Benchling.retrieve_benchling_input_tag
Retrieve benchling_input_tag


###  Parameters

- **display_tag** : `str`
    - Display tag  


###  Returns

- `FlowInputParam`


##  `function` Benchling.retrieve_flow_input_param
Retrieve input param based on Benchling field name, entity_id


###  Parameters

- **entity_id** : `str`
    - Benchling entity id for retrieving file  
- **field_name** : `str`
    - Parameter passed to benchling  
- **param_name** : `str`
    - Parameter for node in triggered flow  


###  Returns

- `FlowInputParam`


##  `function` Benchling.retrieve_flow_input_file
Retrieve file based on Benchling field name


###  Parameters

- **entity_id** : `str`
    - Benchling entity id for retrieving file  
- **benchling_field** : `str`
    - Name of Benchling field to retrieve blob data from  
- **param_name** : `str`
    - Parameter for node in triggered flow  
- **file_extension** : `Optional[str]`
    - File extension (if different from what is param name)  


###  Returns

- `events.FlowInputFile`


##  `function` Benchling.get_benchling_value
Returns the benchling value for a given entity ID and field name.


###  Parameters

- **object_id** : `str`
    - ID used in Benchling API (e.g. - entity schema ID or notebook entry ID)  
- **field_name** : `str`
    - Parameter passed to benchling  
    conn.custom_entities.get_by_id().fields.additional_properties.get(field_name)


###  Returns

- **str**
    - Benchling value associated with field name and id  


##  `function` Benchling.get_custom_entity_to_schema_id_map
Get a dictionary mapping custom entity IDs to schema IDs.


###  Parameters

- `\*args`
    - Arguments to pass to benchling.conn.custom_entities_list()  
- `*\*kwargs`
    - Keyword arguments to pass to benchling.conn.custom_entities_list()  


###  Returns

- `dict`
    - A dictionary mapping custom entity IDs to schema IDs.  


##  `function` Benchling.get_assay_results_to_schema_id_map
Get a dictionary mapping assay result IDs to schema IDs.


###  Parameters

- **assay_result_columns** : `dict`
    - A dictionary mapping result schema IDs to assay result columns.  


###  Returns

- `dict`
    - A dictionary mapping assay result IDs to schema IDs.  


##  `function` Benchling.retrieve_assay_results_data
Get a pandas dataframe of assay result data. Will raise a BenchlingError if the bulk get
fails.


###  Parameters

- **entry_id** : `str`
    - Entry id to match to results from assay_results.bulk_get  
- **assay_results_map** : `dict`
    - A dictionary of assay results keys  


###  Returns

- `pd.DataFrame`
    - A dataframe of records returned from assay_results.bulk_get  


##  `function` Benchling.retrieve_custom_entity_data
Get a pandas dataframe of custom_entity data. Will raise a BenchlingError if the bulk_get
fails


###  Parameters

- **ts_id** : `str`
    - Benchling timeseries id  
- **custom_entity_map** : `dict`
    - A dictionary to get custom_entity keys from  


###  Returns

- `pd.DataFrame`
    - A dataframe of records returned from custom_entities.bulk_get  


##  `function` Benchling.list_available_services
List available Benchling services


###  Returns

- `List[str]`
    - List of available Benchling services  


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
- ***\*kwargs**
    - Optional keyword arguments to pass to list methods of the benchling service  


###   Examples
```python

from ganymede_sdk.api.benchling import Benchling
from ganymede_sdk.editor import MockGanymedeContext

mock_ganymede_context = MockGanymedeContext()
b = Benchling(mock_ganymede_context)

# retrieve all custom_entities
custom_entities = b.get('custom_entities')

# retrieve plate named "my_plate_name"
test_plate = b.get('plates', benchling_filter={'name': 'my_plate_name'})[0]

# to get a list of available services (e.g. - plates, custom_entities, etc.)
b.list_available_services()
```