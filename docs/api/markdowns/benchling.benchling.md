---
sidebar_label: benchling.benchling
title: benchling.benchling
displayed_sidebar: APISidebar
--- 


# benchling.benchling


## `class` Benchling
  
Benchling object to interact with Benchling API through read and write type methods.  
  
### Attributes  
  
**ganymede_context** : `GanymedeContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Ganymede context to get run attributes  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context variable, which stores Benchling connection information  
**conn** : `benchling_sdk.benchling.Benchling`  
&nbsp; &nbsp; &nbsp; &nbsp; The benchling connection object  
**run_tag** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Tag associated with flow run  
**custom_entity_service** : `CustomEntityService`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling custom entity service to create or update custom entities  
**molecule_service** : `MoleculeService _ defaults to None, initialized when first used`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling molecule service to create or update molecules  


## `function` Benchling.__init__
  
Set up the Benchling object  
  
### Parameters  
  
**ganymede_context** : `GanymedeContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Ganymede context to get run attributes  
**benchling_context** : `Optional[BenchlingContext]`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context variable, which stores Benchling connection information  


## `function` Benchling.list_schemas
  
Lists schemas, filtered by type if provided  
  
### Parameters  
  
**type** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Schema type - potential values are "custom_entity", "assay_result", "molecule", "plate",  
&nbsp; &nbsp; &nbsp; &nbsp; "aa_sequence", "box", "container", "entry", "location", "mixture", "workflow_task", etc.  
  
### Returns  
  
`List[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; list of schemas  


## `function` Benchling.get_schema_id_by_name
  
Get schema by name  
  
### Parameters  
  
**schema_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Schema name  
**type** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Subset search by schema type - potential values are "custom_entity", "assay_result", etc.  
  
### Returns  
  
`str`  
&nbsp; &nbsp; &nbsp; &nbsp; Schema ID for specified schema  


## `function` Benchling.create_or_update_custom_entity
  
Creates custom entity in Benchling.&nbsp; &nbsp; If the entity does not exist, first create it.  
  
### Parameters  
  
**entity_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of new entity to be created  
**folder_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Folder ID containing Benchling entity to be created. This should be a string starting  
&nbsp; &nbsp; &nbsp; &nbsp; with "lib_".&nbsp; &nbsp; If updating a custom entity, specifying the folder ID is optional (if specified,  
&nbsp; &nbsp; &nbsp; &nbsp; moves the custom entity to the specified folder).  
**schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Input schema ID Tag. schema associated with Benchling entity to be created. This should  
&nbsp; &nbsp; &nbsp; &nbsp; be a string starting with "ts_"  
**registry_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Project associated with custom entity.&nbsp; &nbsp; This identifies the registry that your run  
&nbsp; &nbsp; &nbsp; &nbsp; entity will be registered to.&nbsp; &nbsp; This can be found by clicking on Avatar - Feature  
&nbsp; &nbsp; &nbsp; &nbsp; Settings - Registry Settings, and you will be able to find it in the URL.&nbsp; &nbsp; This should  
&nbsp; &nbsp; &nbsp; &nbsp; be a string starting with "src_"  
**naming_strategy** : `NamingStrategy`  
&nbsp; &nbsp; &nbsp; &nbsp; Naming strategy to use when creating new entities. See NamingStrategy for more details.  
**custom_entity_fields** : `Optional[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of field names and values to associate with custom entity  
**author_id** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Author ID to associate with custom entity. Should be a string starting with "ent_"  
**if_exists** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Either "fail" or "update". If "fail", will raise an error if the entity already exists.  
  
### Returns  
  
`Dict[str, str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary with custom entity name as key and custom entity ID as value  


## `function` Benchling.create_or_update_custom_entities_bulk
  
Bulk creates custom entities in Benchling.&nbsp; &nbsp; If the entity does not exist, first create it.  
  
### Parameters  
  
**custom_entities_dataframe** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Dataframe containing custom entities to be created  
&nbsp; &nbsp; &nbsp; &nbsp; Columns should include name_field and all fields in schema  
**name_field** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of column in custom_entities_dataframe containing entity names  
**folder_id** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Folder ID containing Benchling entity to be created. This should be a string starting  
&nbsp; &nbsp; &nbsp; &nbsp; with "lib_".&nbsp; &nbsp; If updating a custom entity, specifying the folder ID is optional (if specified,  
&nbsp; &nbsp; &nbsp; &nbsp; moves the custom entity to the specified folder).  
**schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Input schema ID Tag. schema associated with Benchling entity to be created. This should  
&nbsp; &nbsp; &nbsp; &nbsp; be a string starting with "ts_"  
**registry_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Project associated with custom entity.&nbsp; &nbsp; This identifies the registry that your run  
&nbsp; &nbsp; &nbsp; &nbsp; entity will be registered to.  
**naming_strategy** : `NamingStrategy`  
&nbsp; &nbsp; &nbsp; &nbsp; Naming strategy to use when creating new entities. See NamingStrategy for more details.  
**check_for_existing** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether or not to check for the existence of the entities in `name_field`. This is useful to turn off when you know you'll be creating new entities (for example with many naming strategies) and want to avoid many api calls for checking existence of custom entities,  
**wait** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to wait for the task to complete before returning  
**error_on_fail** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to raise an error if the task fails  
**page_size_limit** : `int`  
&nbsp; &nbsp; &nbsp; &nbsp; Maximum number of entities Benchling will return in a single page. Default is 100  
  
### Returns  
  
`Dict[str, List[str]]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary with keys "created" and "updated" and values of lists of custom entity IDs  


## `function` Benchling.create_or_update_molecule
  
Creates molecule in Benchling.&nbsp; &nbsp; If the entity does not exist, first create it.  
  
### Parameters  
  
**entity_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of new entity to be created  
**folder_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Folder ID containing Benchling entity to be created. This should be a string starting  
&nbsp; &nbsp; &nbsp; &nbsp; with "lib_"  
**schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Input schema ID Tag. schema associated with Benchling entity to be created. This should  
&nbsp; &nbsp; &nbsp; &nbsp; be a string starting with "ts_"  
**registry_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Project associated with custom entity.&nbsp; &nbsp; This identifies the registry that your run  
&nbsp; &nbsp; &nbsp; &nbsp; entity will be registered to.&nbsp; &nbsp; This can be found by clicking on Avatar - Feature  
&nbsp; &nbsp; &nbsp; &nbsp; Settings - Registry Settings, and you will be able to find it in the URL.&nbsp; &nbsp; This should  
&nbsp; &nbsp; &nbsp; &nbsp; be a string starting with "src_"  
**naming_strategy** : `NamingStrategy`  
&nbsp; &nbsp; &nbsp; &nbsp; Naming strategy to use when creating new entities. See NamingStrategy for more details.  
**custom_entity_fields** : `Optional[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of field names and values to associate with custom entity  
**author_id** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Author ID to associate with custom entity. Should be a string starting with "ent_"  
**molecule_fields** : `Optional[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of field names and values to associate with molecule  
**if_exists** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Either "fail" or "update". If "fail", will raise an error if the entity already exists.  
  
### Returns  
  
**molecule** : `Molecule`  
&nbsp; &nbsp; &nbsp; &nbsp; Created molecule object  


## `function` Benchling.create_or_update_molecules_bulk
  
Bulk creates molecules in Benchling.&nbsp; &nbsp; If the entity does not exist, first create it.  
  
### Parameters  
  
**molecules_dataframe** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Dataframe containing molecules to be created  
&nbsp; &nbsp; &nbsp; &nbsp; Columns should include name_field and all fields in schema  
**name_field** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of column in molecules_dataframe containing entity names  
**folder_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Folder ID containing Benchling entity to be created. This should be a string starting  
&nbsp; &nbsp; &nbsp; &nbsp; with "lib_"  
**schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Input schema ID Tag. schema associated with Benchling entity to be created. This should  
&nbsp; &nbsp; &nbsp; &nbsp; be a string starting with "ts_"  
**registry_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Project associated with custom entity.&nbsp; &nbsp; This identifies the registry that your run  
&nbsp; &nbsp; &nbsp; &nbsp; entity will be registered to.  
**naming_strategy** : `NamingStrategy`  
&nbsp; &nbsp; &nbsp; &nbsp; Naming strategy to use when creating new entities. See NamingStrategy for more details.  
**wait** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to wait for the task to complete before returning  
**error_on_fail** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to raise an error if the task fails  
**molecular_structure_field** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of column in molecules_dataframe containing molecular structure  
**molecular_structure_format** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Format of molecular structure.&nbsp; &nbsp; This should be one of ["smiles", "mol-v3000"]  
**check_for_existing** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether or not to check for the existence of the entities in `name_field`. This is useful to turn off when you know you'll be creating new entities (for example with many naming strategies) and want to avoid many api calls for checking existence of molecules,  
**page_size_limit** : `int`  
&nbsp; &nbsp; &nbsp; &nbsp; Maximum number of entities Benchling will return in a single page. Default is 100  
  
### Returns  
  
`Dict[str, List[str]]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary with keys "created" and "updated" and values of lists of molecule IDs  


## `function` Benchling.create_benchling_ids_from_files
  
Upload blob files to Benchling and return a dictionary of  
\{blob name: blob ID from Benchling\}  
  
### Parameters  
  
**files** : `Dict[str, bytes]`  
&nbsp; &nbsp; &nbsp; &nbsp; Files to upload to Benchling  
**process_file_names** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Use to process file_name for benchling by converting string to lowercase and removing  
&nbsp; &nbsp; &nbsp; &nbsp; periods. Default is False.  
  
### Returns  
  
`Dict[str, Union[Unset, str]]`  
&nbsp; &nbsp; &nbsp; &nbsp; Returns a dictionary of IDs from benchling_sdk.models.Blob where the keys are the blob  
&nbsp; &nbsp; &nbsp; &nbsp; names and the benchling IDs are the values  
  
### Example  
  
```python  
from ganymede_sdk.api.benchling import Benchling  
from ganymede_sdk import Ganymede  
import pandas as pd  
  
g = Ganymede()  
b = Benchling(g.ganymede_context)  
  
# Get the IDs for two files that are uploaded to Benchling  
  
file_ids = b.create_benchling_ids_from_files(  
    \{"Filename1.csv": file1, "Filename2.csv": file2\}, process_file_names=True  
) # where file_ids.keys() = ['filename1csv', 'filename2csv']"  
  
file_ids = b.create_benchling_ids_from_files(  
    \{"Filename1.csv": file1, "Filename2.csv": file2\}  
) # where file_ids.keys() = ['Filename1.csv', 'Filename2.csv']"  
```

## `function` Benchling.create_assay_results_from_dataframe
  
Process input DataFrame into assay results for upload to Benchling.  
  
### Parameters  
  
**data** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Tabular results of data to send to Benchling. Converted to list of dictionaries for  
&nbsp; &nbsp; &nbsp; &nbsp; each row.  
**schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID should contain the Benchling schema ID to write to.&nbsp; &nbsp; This should be a string starting  
&nbsp; &nbsp; &nbsp; &nbsp; with "assaysch_"  
**project_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID that results will be recorded against.&nbsp; &nbsp; This should be a string starting with "src_".  
  
&nbsp; &nbsp; &nbsp; &nbsp; The members of your organization that have access to this project will also have  
&nbsp; &nbsp; &nbsp; &nbsp; visibility to the results that this integration generates.&nbsp; &nbsp; You can find this ID by  
&nbsp; &nbsp; &nbsp; &nbsp; right clicking on the Project that you have selected, and click on "Copy API ID".  
&nbsp; &nbsp; &nbsp; &nbsp; If you don't see "Copy API ID" as an option, click on your avatar, click Settings,  
&nbsp; &nbsp; &nbsp; &nbsp; and scroll to the bottom and verify that  
&nbsp; &nbsp; &nbsp; &nbsp; "Enable Copy API ID button" is checked.  
**replace_special_characters** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Replace special characters in column names with underscores to mimic Benchling behavior.  
&nbsp; &nbsp; &nbsp; &nbsp; Default is True.  
**ignore_na** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; If True, drop columns with only nulls prior to upload. Default is True.  
**error_on_empty_result** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; If True, raise an error if the DataFrame is empty. Default is True.  
**upload** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to upload List[AssayResults] to Benchling  
**\*\*kwargs**  
&nbsp; &nbsp; &nbsp; &nbsp; Keyword args to pass to create_assay_result_from_dict  
&nbsp; &nbsp; &nbsp; &nbsp; drop_na (Optional[bool])  
  
### Returns  
  
`List[AssayResultCreate]`  
&nbsp; &nbsp; &nbsp; &nbsp; List of AssayResultCreate's to be uploaded to Benchling  
  
### Example  
  
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
file_ids = b.create_benchling_ids_from_files(\{"filename1": file1, "filename2": file2\})  
dropdown_ids = \{dropdown["name"]: dropdown["id"] for dropdown in b.get("dropdowns")\}  
  
# Use pandas.DataFrame.replace to link entries in your dataframe with Benchling IDs  
# or manually add IDs to the dataframe.  
dataframe = dataframe.replace(\{**custom_entity_id, **file_ids, **dropdown_ids\})  
  
# Upload dataframe to Benchling as Assay Results  
assay_results = b.create_assay_results_from_dataframe(  
    dataframe, schema_id, project_id, drop_na=True, upload=True  
)  
```

## `function` Benchling.transfer_entities_to_plate
  
Transfer entities to a plate in Benchling.  
  
### Parameters  
  
**plate** : `Plate`  
&nbsp; &nbsp; &nbsp; &nbsp; Plate to transfer entities to. E.g.  
&nbsp; &nbsp; &nbsp; &nbsp; ```  
&nbsp; &nbsp; &nbsp; &nbsp; plate_dict = b.get("plates", ids=["plt_efVi6kBw"])[0]  
&nbsp; &nbsp; &nbsp; &nbsp; plate = Plate.from_dict(plate_dict)  
&nbsp; &nbsp; &nbsp; &nbsp; ```  
&nbsp; &nbsp; &nbsp; &nbsp; or  
&nbsp; &nbsp; &nbsp; &nbsp; ```  
&nbsp; &nbsp; &nbsp; &nbsp; plate_create = PlateCreate(PLATE_96_WELL_SCHEMA_ID, plate_barcode, PROJECT_ID, parent_storage_id=FRIDGE_ID)  
&nbsp; &nbsp; &nbsp; &nbsp; plate = b.conn.plates.create(plate_create)  
&nbsp; &nbsp; &nbsp; &nbsp; ```  
**transfer_df** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame with the following columns:  
&nbsp; &nbsp; &nbsp; &nbsp; - entity_id: str  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ID of the entity to transfer  
&nbsp; &nbsp; &nbsp; &nbsp; - well: str  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Well to transfer entity to. Should be in the format "rowcolumn" (e.g. "A1")  
&nbsp; &nbsp; &nbsp; &nbsp; - volume: float  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Volume of the entity  
&nbsp; &nbsp; &nbsp; &nbsp; - volume_units: str  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Units of the volume. See benchling_sdk.models.ContainerQuantityUnits for options  
&nbsp; &nbsp; &nbsp; &nbsp; - concentration: Optional[float]  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Concentration of the entity  
&nbsp; &nbsp; &nbsp; &nbsp; - concentration_units: Optional[str]  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Units of the concentration  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Valid units are molar (M), mass (g/L), and count (cells/L) concentration units. Otherwise, use U/L units. See ContainerQuantityUnits for options to use in the form `f"\{mass or count unit\}/\{volume unit\}"`  


## `function` Benchling.write_dataframe_to_benchling_table
  
Uploads Pandas DataFrame to Benchling assay results with specified Benchling table. Please  
see https://docs.benchling.com/docs/example-creating-results for more information. Make sure  
there are appropriate permissions to write to the notebook entry.  
  
### Parameters  
  
**data** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Tabular results of data to send to Benchling. Converted to list of dictionaries for  
&nbsp; &nbsp; &nbsp; &nbsp; each row.  
**schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID should contain the Benchling schema ID to write to.&nbsp; &nbsp; This should be a string starting  
&nbsp; &nbsp; &nbsp; &nbsp; with "assaysch_"  
**project_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID that results will be recorded against.&nbsp; &nbsp; This should be a string starting with "src_".  
  
&nbsp; &nbsp; &nbsp; &nbsp; The members of your organization that have access to this project will also have  
&nbsp; &nbsp; &nbsp; &nbsp; visibility to the results that this integration generates.&nbsp; &nbsp; You can find this ID by  
&nbsp; &nbsp; &nbsp; &nbsp; right clicking on the Project that you have selected, and click on "Copy API ID".  
&nbsp; &nbsp; &nbsp; &nbsp; If you don't see "Copy API ID" as an option, click on your avatar, click Settings,  
&nbsp; &nbsp; &nbsp; &nbsp; and scroll to the bottom and verify that  
&nbsp; &nbsp; &nbsp; &nbsp; "Enable Copy API ID button" is checked.  
**table_id** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the table to write to.&nbsp; &nbsp; This should be a string starting with "strtbl_". You can  
&nbsp; &nbsp; &nbsp; &nbsp; find this using b.get("entries", id="etr_") or b.get("entries", name="EXP12345678") in  
&nbsp; &nbsp; &nbsp; &nbsp; the apiId field. The default is None.  
**replace_special_characters** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Replace special characters in column names with underscores to mimic Benchling behavior.  
&nbsp; &nbsp; &nbsp; &nbsp; Default is True.  
**ignore_na** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; If True, drop columns with only nulls prior to upload. Default is True.  
**error_on_empty_result** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; If True, raise an error if the DataFrame is empty. Default is True.  
**wait** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to wait for the task to complete before returning  
**\*\*kwargs**  
&nbsp; &nbsp; &nbsp; &nbsp; Keyword args to pass to create_assay_result_from_dict  
&nbsp; &nbsp; &nbsp; &nbsp; drop_na (Optional[bool])  
  
### Returns  
  
`list`  
&nbsp; &nbsp; &nbsp; &nbsp; List of task ids for the results uploaded to Benchling.  
  
### Example  
  
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
file_ids = b.create_benchling_ids_from_files(\{"filename1": file1, "filename2": file2\})  
dropdown_ids = \{dropdown["name"]: dropdown["id"] for dropdown in b.get("dropdowns")\}  
  
# Use pandas.DataFrame.replace to link entries in your dataframe with Benchling IDs  
# or manually add IDs to the dataframe.  
dataframe = dataframe.replace(\{**custom_entity_id, **file_ids, **dropdown_ids\})  
  
# Upload dataframe to Benchling as Assay Results  
task_ids = b.write_dataframe_to_benchling_table(  
    dataframe,  
    schema_id,  
    project_id,  
    table_id = "strtbl_",  
    replace_special_characters = True,  
    ignore_na = True,  
    error_on_empty_result = True,  
    wait = True  
)  
```

## `function` Benchling.create_entry
  
Create a benchling notebook entry in a given folder. Entries can be created from templates  
if passed the entry_template_id.  
  
### Parameters  
  
**folder_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; The ID of the folder where the entry will be created.  
**name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; The name of the new entry.  
**author_ids** : `Union[str, List[str]], optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The IDs of the authors of the entry.  
**custom_fields** : `models.CustomFields, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Any custom fields to include in the entry.  
**entry_template_id** : `str, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The ID of the template to use for the entry. The API ID can be copied from Template  
&nbsp; &nbsp; &nbsp; &nbsp; Collections in Feature Settings.  
**fields** : `models.Fields, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The fields to include in the entry.  
**initial_tables** : `models.InitialTable, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The initial tables to include in the entry.  
**schema_id** : `str, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The ID of the schema to use for the entry.  
  
### Returns  
  
`EntryCreate`  
&nbsp; &nbsp; &nbsp; &nbsp; The object of the created entry  
  
### Example  
  
```python  
b = Benchling(ganymede_context)  
  
entry = b.create_entry(  
    folder_id="lib_",  
    name="My Entry from Template",  
    entry_template_id="tmpl_",  
)  
  
```

## `function` Benchling.create_lab_auto_result_from_dataframe
  
Creates lab auto result from DataFrame.  
  
### Parameters  
  
**df** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame to create lab auto assay result from.&nbsp; &nbsp; A typical use case is to upload a DataFrame with 1 row,  
&nbsp; &nbsp; &nbsp; &nbsp; consisting of IDs associated with uploaded images and raw files to associate.  
**assay_run_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Assay Run ID to associate with assay result.&nbsp; &nbsp; This should be a UUID of the form "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",  
&nbsp; &nbsp; &nbsp; &nbsp; and exists in the event payload for the v2.assayRun.created and v2.assayRun.updated.fields Benchling events.  
**result_table_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of result table associated with lab auto processor of interest.  
  
### Returns  
  
`AsyncTaskLink`  
&nbsp; &nbsp; &nbsp; &nbsp; Link to async task result for assay result creation related to lab auto  


## `function` Benchling.is_automated_test
  
Checks if the current test is an automated test.  
  
### Returns  
  
`bool`  
&nbsp; &nbsp; &nbsp; &nbsp; True if the test is automated, False otherwise.  


## `function` Benchling.get_id_from_dropdown_name
  
Get a dictionary of dropdown name - dropdown id from dropdown summary info identified by  
name. Can pass a dropdown id to look up the id of an option of a dropdown  
  
### Parameters  
  
**dropdown_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Dropdown name to identify id for  
**\*args**  
&nbsp; &nbsp; &nbsp; &nbsp; Optional positional arguments to pass to list method of benchling_sdk dropdown service  
**dropdown_id** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; If supplied, get the ID of an option in the dropdown specified by the dropdown_name. The  
&nbsp; &nbsp; &nbsp; &nbsp; default is None.  
**\*\*kwargs**  
&nbsp; &nbsp; &nbsp; &nbsp; Optional keyword arguments to pass to list method of benchling_sdk dropdown service  
  
### Returns  
  
`Dict[str, str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of dropdown name - dropdown id for a specified dropdown name. Raises an  
&nbsp; &nbsp; &nbsp; &nbsp; error if dropdown id is not found  
  
### Example  
  
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

## `function` Benchling.list_available_services
  
List available Benchling services  
  
### Returns  
  
`List[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; List of available Benchling services  


## `function` Benchling.get_fields_data
  
Get a pandas dataframe of benchling service field results such as custom_entity and assay  
results data.  
  
### Parameters  
  
**service** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling object service (e.g. - 'custom_entities', 'assay_results')  
**\*args**  
&nbsp; &nbsp; &nbsp; &nbsp; Optional arguments to pass to list methods of the benchling service  
**benchling_filter** : `Optional[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Filter to apply to the list of Benchling objects  
**\*\*kwargs**  
&nbsp; &nbsp; &nbsp; &nbsp; Optional keyword arguments to pass to list methods of the benchling service  
  
### Raises  
  
**ValueError**  
&nbsp; &nbsp; &nbsp; &nbsp; Raise an error if the service argument is not a valid method of benchling_context.conn  
**ValueError**  
&nbsp; &nbsp; &nbsp; &nbsp; Raise an error if fields is not an attribute of of the service results.  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; A dataframe of records returned benchling_context.conn.service.list(_...)  
  
### Example  
  
```python  
from ganymede_sdk.api.benchling import Benchling  
from ganymede_sdk import Ganymede  
  
g = Ganymede()  
b = Benchling(g.ganymede_context)  
  
# Get data frame of fields returned from custom entities and assay_results  
df_custom_entity_fields = b.get_fields_data(  
    "custom_entities", ids=['bfi_1234', 'bfi_5678']  
)  
df_assay_result_fields = b.get_fields_data("assay_results", "assaysch_1234")  
  
```

## `function` Benchling.get
  
Get all Benchling objects of a specific type, optionally filtered by object attributes  
  
### Parameters  
  
**service** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling object service (e.g. - 'custom_entities', 'plates', 'entries')  
**\*args**  
&nbsp; &nbsp; &nbsp; &nbsp; Optional arguments to pass to list methods of the benchling service  
**as_dict** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to return each Benchling object as a dictionary. Default is True.  
**benchling_filter** : `Optional[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Filter to apply to the list of Benchling objects  
**\*\*kwargs**  
&nbsp; &nbsp; &nbsp; &nbsp; Optional keyword arguments to pass to list methods of the benchling service  
  
### Raises  
  
**ValueError**  
&nbsp; &nbsp; &nbsp; &nbsp; Raise an error if the service argument is not a valid method of benchling_context.conn  
  
### Example  
  
```python  
from ganymede_sdk.api.benchling import Benchling  
from ganymede_sdk import Ganymede  
  
g = Ganymede()  
b = Benchling(g.ganymede_context)  
  
# retrieve all custom entities  
custom_entities = b.get('custom_entities')  
  
# retrieve all custom entities with specific entity schema  
custom_entities = b.get('custom_entities', schema_id='ts_1234')  
  
# retrieve custom entities with names "ent1" and "ent2" (with alternatives)  
custom_entities = b.get('custom_entities', names_any_of=['ent1', 'ent2'])  
custom_entities = b.get('custom_entities', names_any_of_case_sensitive=['eNt1', 'eNt2'])  
custom_entities = b.get('custom_entities', name_includes='ent')  
  
# retrieve custom entities by Benchling IDs  
custom_entities = b.get('custom_entities', ids=['bfi_1234', 'bfi_5678'])  
  
# retrieve all custom entities with specific entity schema  
# note that author IDs also start with "ent_", like other custom entities  
custom_entities = b.get('custom_entities', author_idsany_of=['ent_1234'])  
  
# get a list of entities filtered by schema fields (in this case, a lab instrument)  
b.get(  
    "custom_entities",  
    schema_id=INSTRUMENT_SCHEMA_ID,  
    schema_fields=\{"Serial #": instrument_serial_number\},  
)  
  
# get specific notebook entry by ID  
b.get('entries', id='etr_1234')  
  
# retrieve plate named "my_plate_name"  
test_plate = b.get('plates', benchling_filter=\{'name': 'my_plate_name'\})[0]  
  
# to get a list of available services (e.g. - plates, custom_entities, etc.)  
b.list_available_services()  
```

## `function` Benchling.get_models_to_map
  
Get a dictionary mapping names to Benchling IDs from a list of dictionaries. This can be  
used in conjunction with Benchling.get()  
  
### Parameters  
  
**benchling_service_results** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Results of the form List[dict] returned from get() where "id" and "name" are common keys  
&nbsp; &nbsp; &nbsp; &nbsp; in the dict.  
**keys** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; The key name of the inner dictionaries in the list used to set the key in the returned  
&nbsp; &nbsp; &nbsp; &nbsp; dictionary.  
**values** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; The key name of the inner dictionaries Used to set the values in the returned dictionary  
&nbsp; &nbsp; &nbsp; &nbsp; Optional keyword arguments to pass to list methods of the benchling service  
  
### Returns  
  
`dict`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary mapping names to the benchling IDs  
  
### Example  
  
```python  
from ganymede_sdk.api.benchling import Benchling  
from ganymede_sdk import Ganymede  
  
g = Ganymede()  
b = Benchling(g.ganymede_context)  
  
# Get the dropdowns of the form [\{"id": id, "name": name\}]  
results = b.get("dropdowns")  
  
# Convert list of dictionaries to dictionary where name is the key and id are the values  
# of the form \{name: value\}  
dropdown_names_to_ids = b.get_model_to_map(results, keys='name', values='id')  
```

## `function` Benchling.validate_assay_result_schema_names
  
Validate column names in a DataFrame against an assay result schema.  
  
### Parameters  
  
**df** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; The DataFrame containing data to be validated against the assay result schema.  
**assay_result_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; The unique identifier of the assay result schema in Benchling.  
  
### Returns  
  
`set`  
&nbsp; &nbsp; &nbsp; &nbsp; A set of matched field names between the DataFrame and the assay result schema.  
  
### Raises  
  
**SchemaError**  
&nbsp; &nbsp; &nbsp; &nbsp; If there are unmatched fields between the DataFrame and the assay result schema.  


## `function` Benchling.get_assay_result_schema_table
  
Retrieve the schema table for an assay result using its ID.  
  
### Parameters  
  
**assay_result_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; The unique identifier of the assay result.  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; A DataFrame containing the field definitions of the assay result schema.  
  
### Examples  
  
```python  
from ganymede_sdk import Ganymede  
from ganymede_sdk.api.benchling import Benchling  
  
g = Ganymede()  
b = Benchling(g.ganymede_context)  
  
result_id = "example_result_id"  
schema_table = b.get_assay_result_schema_table(result_id)  
```

## `function` Benchling.archive_custom_entity
  
Unregisters and Archives a custom entity that has been registered in Benchling Registry.  
  
### Parameters  
  
**custom_entity_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of custom entity to archive  
**reason** : `EntityArchiveReason, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Reason to archive custom entity, by default "Other"  
  
### Raises  
  
**ValueError**  
&nbsp; &nbsp; &nbsp; &nbsp; Error if method is called in pipeline execution.&nbsp; &nbsp; The method is only supported  
&nbsp; &nbsp; &nbsp; &nbsp; in editor and analysis notebooks.  


## `function` Benchling.archive_assay_result
  
Archives assay results based on assay result schema and condition.  
  
### Parameters  
  
**assay_result_schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Assay result schema ID to archive; should start with 'assaysch_'  
**app_name** : `str, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Creator of assay result to filter by, by default "Ganymede App"  
**filter_fields** : `Dict[str, str], optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Fields on assay result to filter by, specified as a dictionary of field name to field display value  
**execute** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to execute the archive.&nbsp; &nbsp; If False, will return assay results to archive.  
  
### Raises  
  
**ValueError**  
&nbsp; &nbsp; &nbsp; &nbsp; Error if method is called in pipeline execution.&nbsp; &nbsp; The method is only supported  
&nbsp; &nbsp; &nbsp; &nbsp; in editor and analysis notebooks.  
  
### Returns  
  
`List[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; List of assay results to archive  


## `class` SchemaError
  
Raised when the assay result trying to be created does not match the table schema in Benchling  
