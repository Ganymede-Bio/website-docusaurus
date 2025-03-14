---
sidebar_label: Excel_Write
title: Excel_Write
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Writes a table or set of tables as an Excel spreadsheet.

Retrieves one or more tables from Ganymede data lake, processes via user-defined function,
and writes output to specified Excel spreadsheet. If output_spreadsheet_name is set to
"override_spreadsheet_name", return a dict where the key is the desired spreadsheet name,
and value is the spreadsheet contents.

ex: \{"\<desired_spreadsheet_name\>": \<spreadsheet_contents\>\}

### Node Attributes

- **output_spreadsheet_name**
  - spreadsheet name to write to storage bucket

## User-Defined Python

Write table(s) from SQL query and stores Excel sheet in cloud storage.

### Parameters

- **df_sql_result** : `pd.DataFrame | list[pd.DataFrame], optional`
  - Table(s) or list of tables retrieved from user-defined SQL query
- **output_spreadsheet_name** : `str`
  - Name of the output spreadsheet
- **ganymede_context** : `GanymedeContext`
  - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage
