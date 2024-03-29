---
sidebar_label: AVI_Read_Multi
title: AVI_Read_Multi
displayed_sidebar: nodeSidebar
---

### Node Description

Reads contents of multiple avi files into data lake

The contents of the avi files are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.

### Node Attributes

- **input_multi_avi**
  - File extension for valid avi files submitted.  For example, filling in this attribute with "*.avi" limits the node to only accepting files ending in .avi.
- **output_table_results**
  - Table to display on Table Head in Flow Editor
- **output_table_blob_metadata**
  - Table to display on Table Head referencing non-tabular data output from node in Flow Editor

## User-Defined Python

Processes avi file(s) (passed to function as BytesIO file-like objects) into blobs and
data tables stored in the data lake

### Parameters

- **avi_file** : `dict[str, BytesIO]`
    - avi files, indexed by file name
- **df_sql_result** : `pd.DataFrame | list[pd.DataFrame]`
    - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage

### Notes

If a DataFrame is returned, the table name corresponds to the **results** parameter of the node.

If a dict of dataframes is returned, the keys of the dict are used as table names
for the corresponding DataFrames to store.  The table with **results** as its key
is displayed on the Flow Editor.