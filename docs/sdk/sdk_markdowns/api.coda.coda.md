---
sidebar_label: api.coda.coda
title: api.coda.coda
displayed_sidebar: SDKSidebar
--- 


# api.coda.coda



##  `class` Coda
A class to interact with the Coda API.


###  Attributes

- **chunk_size** : `int`
    - The size of the chunks in which data is sent to the Coda API.  
- **record_limit** : `int`
    - The maximum number of records that can be requested from the Coda API at once.  
- **coda_api_address** : `str`
    - The base URL of the Coda API.  
- **authorization_header** : `str`
    - The authorization header used in requests to the Coda API.  


##  `function` Coda.__init__
Initialize the Coda class


###  Parameters

- **folder_id** : `str, optional`
    - The ID of the folder, by default None  
- **template_doc_id** : `str, optional`
    - The ID of the template document, by default None  


##  `function` Coda.get
Retrieve data from Coda API


###  Parameters

- **endpoint** : `str`
    - Endpoint to retrieve data from  
- **params** : `Dict, optional`
    - Key/Value parameters to pass to get method  
- **limit** : `int, optional`
    - Maximum number of records to request, by default None  
- **offset** : `int, optional`
    - Number of records offset on request, by default None  


###  Returns

- `Dict`
    - Coda API response  


##  `function` Coda.post
Post data to Coda API


###  Parameters

- **endpoint** : `str`
    - Endpoint to retrieve data from  
- **data** : `Dict`
    - Data to post to endpoint  


###  Returns

- `Dict`
    - Coda API response  


##  `function` Coda.get_ids
Get IDs from Coda API


###  Parameters

- **fn_get** : `function`
    - Function to retrieve data from Coda API  
- **offset** : `int, optional`
    - Number of records offset on request, by default None  
- **limit** : `int, optional`
    - Maximum number of records to request, by default None  


###  Returns

- `List`
    - List of IDs retrieved from Coda API  


##  `function` Coda.list_docs
Convenience method for listing documents


###  Returns

- `List`
    - Document objects  


##  `function` Coda.list_tables
Convenience method for listing table IDs associated with a document template


###  Parameters

- **doc_id** : `str`
    - Coda document ID  


###  Returns

- `List`
    - Tables within document  


##  `function` Coda.list_pages
Convenience method for listing pages within document


###  Parameters

- **doc_id** : `str`
    - Coda document ID  


###  Returns

- `Dict`
    - Pages listing within document  


##  `function` Coda.resolve_browser_link
Creates a browser link to a Coda doc containing additional metadata


###  Parameters

- **degrade_gracefully** : `bool, optional`
    - Whether to degrade gracefully if the doc is not found; if set and object is deleted,  
    will resolve to parent up to the doc, by default False


###  Returns

- `Dict`
    - Metadata associated with browser link submitted  


##  `function` Coda.list_columns
Convenience method for listing columns within a table


###  Parameters

- **doc_id** : `str`
    - Coda document ID  
- **table_id_or_name** : `str`
    - Coda table ID or name  


###  Returns

- `Dict`
    - Columns listing within table  


##  `function` Coda.upsert_row
Upserting rows into a table in Coda


###  Parameters

- **doc_id** : `str`
    - Coda Document ID  
- **table_id_or_name** : `str`
    - Coda table ID or name  
- **data** : `Dict`
    - Data to post  


###  Returns

- `Dict`
    - Response from posting data  


##  `function` Coda.upload_df
Upserting DataFrame rows into a table in Coda


###  Parameters

- **doc_id** : `str`
    - Coda Document ID  
- **table_id_or_name** : `str`
    - Coda table ID or name  
- **df** : `pd.DataFrame`
    - DataFrame to upload  


##  `function` Coda.upload_files
Uploads 1 set of files as a row to a table in Coda


###  Parameters

- **doc_id** : `str`
    - Coda Document ID  
- **table_id_or_name** : `str`
    - Coda table ID or name  
- **coda_to_signed_url_map** : `Dict[str, str]`
    - Dictionary containing Ganymede filepaths as keys and Coda column id as values  


##  `function` Coda.create_doc_from_template
Convenience method for creating document from template


###  Parameters

- **title** : `str`
    - Title for document  


###  Returns

- `Dict`
    - Response from call to create document from template  