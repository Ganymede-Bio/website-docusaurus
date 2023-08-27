---
sidebar_label: CSV_Read
title: CSV_Read
displayed_sidebar: nodeSidebar
---

### Node Description
Reads contents of a CSV file into data lake

The contents of CSV file are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.


### Node Attributes
- **input_file_csv**
  - File extension for valid CSV files submitted.  For example, filling in this attribute with "*.csv" will only allow files with the extension .csv to be uploaded.
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
`NodeReturn`
  Object containing data to store in data lake and/or file storage


### Notes
If a DataFrame is returned, the table name corresponds to the **results** parameter of the node.

If a dict is returned, the keys of the dict are used as table names for the corresponding
DataFrames to store.  The table with **results** as its key is displayed on the Flow Editor.