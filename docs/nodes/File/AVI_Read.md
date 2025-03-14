---
sidebar_label: AVI_Read
title: AVI_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Reads contents of an avi file into data lake

The contents of the avi file are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.

### Node Attributes

- **avi**
  - File extension for valid avi files submitted.  For example, filling in this attribute with "*.avi" will only allow files with the extension .avi to be uploaded.
- **output_table_results**
  - Table to display on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) referencing table output from the Node in the Flow Editor.
- **output_table_blob_metadata**
  - Table to display on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) referencing non-tabular data output from the Node in the Flow Editor.

### Notes

In the execute function, returning NodeReturn(tables_to_upload=\{'results': df, 'blob_metadata': df_blob_metadata\}) would render the df and df_blob_metadata in the Flow Editor if Table Head visualization is enabled.

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
