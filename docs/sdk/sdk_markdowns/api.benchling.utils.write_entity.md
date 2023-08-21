---
sidebar_label: api.benchling.utils.write_entity
title: api.benchling.utils.write_entity
displayed_sidebar: SDKSidebar
--- 


# api.benchling.utils.write_entity



##  `function` create_custom_entity
Creates and returns the id of the custom entity.


###  Parameters

- **benchling_context** : `Benchling Context object`
    - Benchling context object to get connection  
- **entity_name** : `str`
    - Name of new entity to be created  
- **folder_id** : `str`
    - Folder ID containing Benchling entity to be created. This should be a string starting with  
    "lib_"
- **input_schema_id** : `str`
    - Input schema ID Tag. schema associated with Benchling entity to be created This should be  
    a string starting with "ts_"
- **registry_id** : `str`
    - Project associated with custom entity.  This identifies the registry that your run entity  
    will be registered to.  This can be found by clicking on Avatar -> Feature Settings ->
    Registry Settings, and you will be able to find it in the URL.  This should be a string
    starting with "src_"
- **custom_entity_fields** : `Optional[Dict]`
    - Fields associated with Benchling entity  
- **author_id** : `Optional[str]`
    - Author ID to associate with custom entity. Should be a string starting with "ent_"  


###  Returns

- Dict[str, str]
    - Dictionary with custom entity name as key and custom entity ID as value  


##  `function` update_custom_entity
Updates custom entity


###  Parameters

- **benchling_context** : `BenchlingContext`
    - Benchling Context object  
- **existing_entity_id** : `str`
    - ID of custom entity to be updated  
- **folder_id** : `str`
    - Folder ID containing Benchling entity to be created. This should be a string starting with  
    "lib_"
- **input_schema_id** : `str`
    - Input schema ID Tag. schema associated with Benchling entity to be created This should be  
    a string starting with "ts_"
- **registry_id** : `str`
    - Project associated with custom entity.  This identifies the registry that your run entity  
    will be registered to.  This can be found by clicking on Avatar -> Feature Settings ->
    Registry Settings, and you will be able to find it in the URL.  This should be a string
    starting with "src_"
- **custom_entity_fields** : `Optional[Dict]`
    - Fields associated with Benchling entity  


###  Returns

- Dict[str, str]
    - Dictionary of entity name, custom entity id pair  


##  `function` create_benchling_ids_from_files
Upload blob files to Benchling


###  Parameters

- **benchling_context** : `Benchling Context object`
    - Benchling context object to get connection  
- **file_name** : `List[str]`
    - File names to associate to file content  
- **file_content** : `Union[List[bytes], List[pd.DataFrame]]`
    - Blob or data content to upload  


###  Returns

- Dict[str, Union[Unset, str]]
    - Returns a dictionary of IDs from benchling_sdk.models.Blob  


##  `function` create_benchling_ids_from_file
Get output file id for blob or data created from bytes.


###  Parameters

- **benchling_context** : `Benchling Context object`
    - Benchling context object to get connection  
- **file_name** : `str`
    - File name to associate with data  
- **file_content** : `bytes`
    - Blob or data to upload as a file  


###  Returns

- Union[Unset, str]
    - Returns the id of benchling_sdk.models.Blob  


##  `function` create_benchling_ids_from_data_file
Get output file id for blob created from bytes.


###  Parameters

- **benchling_context** : `Benchling Context object`
    - Benchling context object to get connection  
- **file_name_for_benchling** : `str`
    - File name to associate with data  
- **df** : `pd.DataFrame`
    - Data frame to upload as a file  


###  Returns

- Union[Unset, str]
    - Returns the id of benchling_sdk.models.Blob  


##  `function` create_benchling_ids_from_blob_file
Get output file id for blob created from bytes.


###  Parameters

- **benchling_context** : `Benchling Context object`
    - Benchling context object to get connection  
- **blob_name** : `str`
    - File name to associate with data  
- **blob** : `bytes`
    - Blob to upload as a file.  


###  Returns

- Union[Unset, str]
    - Returns the id of benchling_sdk.models.Blob  


###  Notes

- The file type is necessary to upload to benchling which is guessed based on the blob_name using
- - the mimetypes package.  


##  `function` create_assay_results_from_dataframe
Processes input DataFrame for upload to Benchling.


###  Parameters

- **data** : `pd.DataFrame`
    - Tabular result(s) of data to send to Benchling. Converted to list of dictionaries for each  
    row.
- **\*args**
    - Arguments to pass to create_assay_result_from_dict  
    schema_id (str)
    project_id (str)
- ***\*kwargs**
    - Keyward args to pass to create_assay_result_from_dict  
    drop_na (Optional[bool])


###  Returns

- `List[AssayResultCreate]`
    - List of AssayResultCreate's to be uploaded to Benchling  


##  `function` create_assay_result_from_dict
Set up AssayResultCreate from dictionary


###  Parameters

- **result** : `dict`
    - Dictionary of values to send to Benchling  
- **schema_id** : `str`
    - Benchling schema id  
- **project_id** : `str`
    - Benchling project id  
- **drop_na** : `Optional[bool]`
    - Determine if you should remove na from benchling results dict  


###  Returns

- `AssayResultCreate`
    - Assay results to be uploaded to Benchling  