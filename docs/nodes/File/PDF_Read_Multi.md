---
sidebar_label: PDF_Read_Multi
title: PDF_Read_Multi
displayed_sidebar: nodeSidebar
---

### Node Description
Reads contents of multiple pdf files into data lake

The contents of the pdf files are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.


### Node Attributes
- **input_multi_pdf**
  - File extension on pdf file used for specifying valid file extensions
- **output_table_results**
  - Table to display on Table Head in Flow Editor
- **output_table_blob_metadata**
  - Table to display on Table Head referencing non-tabular data output from node in Flow Editor
## User-Defined Python
Processes pdf file(s) (passed to function as BytesIO file-like objects) into blobs and
data tables stored in the data lake


### Parameters
- **pdf_file** : `Dict[str, BytesIO]`
    - pdf files, indexed by file name
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

If a tuple is returned, the first element is a table or dict of tables, and the second
element is a dict of blobs. The blob filename will be referenced in the blob_metadata table
on the Flow Editor.