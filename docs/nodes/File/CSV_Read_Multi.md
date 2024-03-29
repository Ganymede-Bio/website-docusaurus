---
sidebar_label: CSV_Read_Multi
title: CSV_Read_Multi
displayed_sidebar: nodeSidebar
---

### Node Description

Reads contents of multiple CSV files into data lake

The contents of the CSV files are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.

### Node Attributes

- **input_multi_csv**
  - File extension for valid CSV files submitted.  For example, filling in this attribute with "*.csv" will only allow files with the extension .csv to be uploaded.
- **output_table_results**
  - Table to display on Table Head in Flow Editor

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