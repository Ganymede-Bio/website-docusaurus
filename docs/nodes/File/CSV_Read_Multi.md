---
sidebar_label: CSV_Read_Multi
title: CSV_Read_Multi
displayed_sidebar: nodeSidebar
---

### Node Operator
Reads contents of multiple CSV files into data lake

The contents of the CSV files are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.


### Node Attributes
- **input_multi_csv**
  - File extension on CSV file used for specifying valid file extensions
- **output_table_results**
  - Table to display on Table Head in Flow Editor
## User-Defined Python
Processes CSV file(s) (passed to function as BytesIO file-like objects) into data tables
stored in data lake


### Parameters
- **csv_file** : `Dict[str, BytesIO]`
    - CSV files, indexed by file name
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Union[pd.DataFrame, Dict[str, pd.DataFrame]]`
  - Table(s) to store in data lake


### Notes
If a DataFrame is returned, the table name corresponds to the **results** parameter of the node.

If a dict is returned, the keys of the dict are used as table names for the corresponding
DataFrames to store.  The table with **results** as its key is displayed on the Flow Editor.