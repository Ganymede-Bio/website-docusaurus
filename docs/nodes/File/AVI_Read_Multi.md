---
sidebar_label: AVI_Read_Multi
title: AVI_Read_Multi
displayed_sidebar: nodeSidebar
---

### Node Operator
Reads contents of multiple avi files into data lake

The contents of the avi files are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.


### Node Attributes
- **input_multi_avi**
  - File extension on avi file used for specifying valid file extensions
- **output_table_results**
  - Table to display on Table Head in Flow Editor
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