---
sidebar_label: AVI_Read
title: AVI_Read
displayed_sidebar: nodeSidebar
---

### Node Description
Reads contents of a avi file into data lake

The contents of avi file are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.


### Node Attributes
- **input_file_avi**
  - File extension for valid avi files submitted.  For example, filling in this attribute with "*.avi" will only allow files with the extension .avi to be uploaded.
- **output_table_results**
  - Table to display on Table Head referencing table output from node in Flow Editor
- **output_table_blob_metadata**
  - Table to display on Table Head referencing non-tabular data output from node in Flow Editor
## User-Defined Python
Processes avi file(s) (passed to function as BytesIO file-like objects) into blobs and
data tables stored in the data lake


### Parameters
- **avi_file** : `Dict[str, BytesIO]`
    - avi files, indexed by file name
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Union[`
  - Union[pd.DataFrame, Dict[str, pd.DataFrame]],
  - Tuple[Union[pd.DataFrame, Dict[str, pd.DataFrame]], Dict[str, bytes]],
- ]
  - Either table(s) or
  - Tuple of table(s) and blob(s) to store in data lake


### Notes
If a DataFrame is returned, the table name corresponds to the **results** parameter of the node.

If a dict of dataframes is returned, the keys of the dict are used as table names
for the corresponding DataFrames to store.  The table with **results** as its key
is displayed on the Flow Editor.