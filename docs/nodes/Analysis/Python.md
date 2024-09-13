---
sidebar_label: Python
title: Python
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Runs user-defined Python function on results of query on Ganymede data lake.

Retrieves table(s) from Ganymede data lake, processes via user-defined Python function,
and stores result table(s) to Ganymede data lake.

### Node Attributes

- **output_table_results**
  - Table displayed on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) in Ganymede UI.

### Notes

In the execute function, returning NodeReturn(tables_to_upload=\{'results': df\}) would render the DataFrame df in the Flow Editor if Table Head visualization is enabled.

## User-Defined Python

Process tabular data from user-defined SQL query, writing results back to data lake.  Data
is written to the output bucket.

### Parameters

- **df_sql_result** : `pd.DataFrame | list[pd.DataFrame]`
    - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.  NodeReturn object takes
  2 parameters:
  - **tables_to_upload**: `dict[str, pd.DataFrame]`
    keys are table names, values are pandas DataFrames to upload
  - **files_to_upload**: `dict[str, bytes]`
    keys are file names, values are file data to upload

### Notes

Files can also be retrieved and processed using the list_files and retrieve_files functions.
Documentation on these functions can be found at https://docs.ganymede.bio/sdk/GanymedeClass
