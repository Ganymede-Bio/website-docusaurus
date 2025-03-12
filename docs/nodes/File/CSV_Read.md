---
sidebar_label: CSV_Read
title: CSV_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Reads contents of a CSV file into data lake

The contents of CSV file are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.

### Node Attributes

- **csv**
  - File extension for valid CSV files submitted.  For example, filling in this attribute with "*.csv" will only allow files with the extension .csv to be uploaded.
- **output_table_results**
  - Table displayed on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) in Ganymede UI.

### Notes

In the execute function, returning NodeReturn(tables_to_upload=\{'results': df\}) would render the DataFrame df in the Flow Editor if Table Head visualization is enabled.

## User-Defined Python

Processes CSV file(s) (passed to function as BytesIO file-like objects) into data tables
stored in data lake

### Parameters

- **csv_file** : `dict[str, BytesIO]`
  - CSV files, indexed by file name
- **ganymede_context** : `GanymedeContext`
  - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.
