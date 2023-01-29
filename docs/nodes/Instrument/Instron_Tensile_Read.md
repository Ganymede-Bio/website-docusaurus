---
sidebar_label: Instron_Tensile_Read
title: Instron_Tensile_Read
displayed_sidebar: nodeSidebar
---

### Node Operator
Reads contents of a is_tens file into data lake

The contents of is_tens file are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.


### Node Attributes
- **input_file_is_tens**
  - File extension on is_tens file
- **output_table_results**
  - Table to display on Table Head in Flow Editor
## User-Defined Python
Processes is_tens file (passed to function as BytesIO file-like objects) into data tables
stored in data lake


### Parameters
- **is_tens_file** : `Dict[str, BytesIO]`
    - is_tens file, indexed by file name
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Dict[str, pd.DataFrame]`
  - Tables to store in data lake


### Notes
If a dict is returned, the keys of the dict are used as table names for the corresponding
DataFrames to store.  The table with **results** as its key is displayed on the Flow Editor.