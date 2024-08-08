---
sidebar_label: benchling.utils.write_entity
title: benchling.utils.write_entity
displayed_sidebar: SDKSidebar
--- 


# benchling.utils.write_entity


## `class` NamingStrategy
  
Different options for handling naming when creating custom entities.  
See: https://help.benchling.com/hc/en-us/articles/9684227098893-Choose-a-naming-option-for-your-Registry-schema  


## `function` register_entity
  
Register custom entity to Benchling registry with retry logic  
  
### Parameters  
  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object to get connection  
**entity_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the entity to register  
**registry_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the registry to register the entity to  
  
### Raises  
  
**BenchlingError**  
&nbsp; &nbsp; &nbsp; &nbsp; Failure to register entity to registry  


## `function` create_custom_entity
  
Creates and returns the id of the custom entity.  
  
### Parameters  
  
**benchling_context** : `Benchling Context object`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object to get connection  
**entity_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of new entity to be created  
**folder_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Folder ID containing Benchling entity to be created. This should be a string starting with  
&nbsp; &nbsp; &nbsp; &nbsp; "lib_"  
**input_schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Input schema ID Tag. schema associated with Benchling entity to be created This should be  
&nbsp; &nbsp; &nbsp; &nbsp; a string starting with "ts_"  
**registry_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Project associated with custom entity.&nbsp; &nbsp; This identifies the registry that your run entity  
&nbsp; &nbsp; &nbsp; &nbsp; will be registered to.&nbsp; &nbsp; This can be found by clicking on Avatar - Feature Settings -  
&nbsp; &nbsp; &nbsp; &nbsp; Registry Settings, and you will be able to find it in the URL.&nbsp; &nbsp; This should be a string  
&nbsp; &nbsp; &nbsp; &nbsp; starting with "src_"  
**custom_entity_fields** : `Optional[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Fields associated with Benchling entity  
**author_id** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Author ID to associate with custom entity. Should be a string starting with "ent_"  
**naming_strategy** : `NamingStrategy`  
&nbsp; &nbsp; &nbsp; &nbsp; Strategy to use for naming the entity.&nbsp; &nbsp; See NamingStrategy for more details.  
  
### Returns  
  
`Dict[str, str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary with custom entity name as key and custom entity ID as value  


## `function` update_custom_entity
  
Updates custom entity  
  
### Parameters  
  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling Context object  
**existing_entity** : `benchling_api_client.v2.stable.models.custom_entity.CustomEntity`  
&nbsp; &nbsp; &nbsp; &nbsp; Existing custom entity to be updated  
**folder_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Folder ID containing Benchling entity to be created. This should be a string starting with  
&nbsp; &nbsp; &nbsp; &nbsp; "lib_"  
**input_schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Input schema ID Tag. schema associated with Benchling entity to be updated. This should be  
&nbsp; &nbsp; &nbsp; &nbsp; a string starting with "ts_"  
**registry_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Project associated with custom entity.&nbsp; &nbsp; This identifies the registry that your run entity  
&nbsp; &nbsp; &nbsp; &nbsp; will be registered to.&nbsp; &nbsp; This can be found by clicking on Avatar - Feature Settings -  
&nbsp; &nbsp; &nbsp; &nbsp; Registry Settings, and you will be able to find it in the URL.&nbsp; &nbsp; This should be a string  
&nbsp; &nbsp; &nbsp; &nbsp; starting with "src_"  
**custom_entity_fields** : `Optional[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Fields associated with Benchling entity  
  
### Returns  
  
`Dict[str, str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of entity name, custom entity id pair  


## `function` create_benchling_ids_from_files
  
Upload blob files to Benchling and return a dictionary where the keys are the file names and the  
values are the benchling IDs  
  
### Parameters  
  
**benchling_context** : `Benchling Context object`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object to get connection  
**file_name** : `List[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; File names to associate to file content  
**file_content** : `Union[List[bytes], List[pd.DataFrame]]`  
&nbsp; &nbsp; &nbsp; &nbsp; Blob or data content to upload  
**keys_as_benchling_name** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Use to process file_name for benchling by converting string to lowercase and removing  
&nbsp; &nbsp; &nbsp; &nbsp; periods. Default is False.  
  
### Returns  
  
`Dict[str, Union[Unset, str]]`  
&nbsp; &nbsp; &nbsp; &nbsp; Returns a dictionary of IDs from benchling_sdk.models.Blob  


## `function` create_benchling_ids_from_file
  
Get output file id for blob or data created from bytes.  
  
### Parameters  
  
**benchling_context** : `Benchling Context object`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object to get connection  
**file_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; File name to associate with data  
**file_content** : `bytes`  
&nbsp; &nbsp; &nbsp; &nbsp; Blob or data to upload as a file  
  
### Returns  
  
`Union[Unset, str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Returns the id of benchling_sdk.models.Blob  


## `function` create_benchling_ids_from_data_file
  
Get output file id for blob created from bytes.  
  
### Parameters  
  
**benchling_context** : `Benchling Context object`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object to get connection  
**file_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; File name to associate with data  
**df** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Data frame to upload as a file  
  
### Returns  
  
`Union[Unset, str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Returns the id of benchling_sdk.models.Blob  


## `function` create_benchling_ids_from_blob_file
  
Get output file id for blob created from bytes.  
  
### Parameters  
  
**benchling_context** : `Benchling Context object`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object to get connection  
**blob_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; File name to associate with data  
**blob** : `bytes`  
&nbsp; &nbsp; &nbsp; &nbsp; Blob to upload as a file.  
  
### Returns  
  
`Union[Unset, str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Returns the id of benchling_sdk.models.Blob  
  
### Notes  
  
The file type is necessary to upload to benchling which is guessed based on the blob_name using  
the mimetypes package.  


## `function` create_assay_results_from_dataframe
  
Processes input DataFrame for upload to Benchling.  
  
### Parameters  
  
**data** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Tabular result(s) of data to send to Benchling. Converted to list of dictionaries for each  
&nbsp; &nbsp; &nbsp; &nbsp; row.  
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
**\*\*kwargs**  
&nbsp; &nbsp; &nbsp; &nbsp; Keyword args to pass to create_assay_result_from_dict  
&nbsp; &nbsp; &nbsp; &nbsp; drop_na (Optional[bool])  
  
### Returns  
  
`List[AssayResultCreate]`  
&nbsp; &nbsp; &nbsp; &nbsp; List of AssayResultCreate's to be uploaded to Benchling  


## `function` create_assay_result_from_dict
  
Set up AssayResultCreate from dictionary  
  
### Parameters  
  
**result** : `dict`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of values to send to Benchling  
**schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling schema id  
**project_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling project id  
**drop_na** : `Optional[bool]`  
&nbsp; &nbsp; &nbsp; &nbsp; Determine if you should remove na from benchling results dict  
  
### Returns  
  
`AssayResultCreate`  
&nbsp; &nbsp; &nbsp; &nbsp; Assay results to be uploaded to Benchling  


## `function` create_custom_entity_obj
  
Create a custom entity object to create in Benchling  
  
### Parameters  
  
**entity_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of the entity to create  
**folder_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the folder to create the entity in  
**input_schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the entity schema to use  
**registry_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the registry to use  
**fields** : `Optional[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of fields to add to the entity  
**author_id** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the author to assign to the entity  
**naming_strategy** : `NamingStrategy`  
&nbsp; &nbsp; &nbsp; &nbsp; Naming strategy to use for the entity, by default NamingStrategy.NEW_IDS  
  
### Returns  
  
**entity_item** : `CustomEntityBulkCreate`  
&nbsp; &nbsp; &nbsp; &nbsp; Custom entity object to create in Benchling  
  


## `function` create_custom_entities_bulk
  
Create custom entities in Benchling  
  
### Parameters  
  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object  
**custom_entities_objs** : `List`  
&nbsp; &nbsp; &nbsp; &nbsp; List of custom entity objects to create  
**custom_entity_service** : `CustomEntityService`  
&nbsp; &nbsp; &nbsp; &nbsp; Initiated custom entity service object  
**wait** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to wait for the task to complete. Defaults to True.  
**error_on_fail** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to raise an error if the task fails. Defaults to True.  
  
### Returns  
  
**custom_entity_task_ids** : `List`  
&nbsp; &nbsp; &nbsp; &nbsp; List of task ids for the custom entities created  
  


## `function` update_custom_entities_bulk
  
Update custom entities in Benchling  
  
### Parameters  
  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object  
**custom_entities_objs** : `List`  
&nbsp; &nbsp; &nbsp; &nbsp; List of custom entity objects to update  
**custom_entity_service** : `CustomEntityService`  
&nbsp; &nbsp; &nbsp; &nbsp; Initiated custom entity service object  
**wait** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to wait for the task to complete. Defaults to True.  
**error_on_fail** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to raise an error if the task fails. Defaults to True.  
  
### Returns  
  
**custom_entity_ids** : `List`  
&nbsp; &nbsp; &nbsp; &nbsp; List of task ids for the custom entities updated  
  


## `function` update_custom_entity_obj
  
Update a custom entity object to update in Benchling  
  
### Parameters  
  
**existing_entity** : `CustomEntity`  
&nbsp; &nbsp; &nbsp; &nbsp; Existing custom entity to update  
**folder_id** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the folder to move the custom entity to (if specified)  
**input_schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the entity schema to use  
**fields** : `Optional[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of fields to add to the entity  
**author_id** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the author to assign to the entity  
  
### Returns  
  
**new_entity_param** : `CustomEntityBulkUpdate`  
&nbsp; &nbsp; &nbsp; &nbsp; Custom entity object to update in Benchling  
  
