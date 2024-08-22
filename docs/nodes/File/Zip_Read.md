---
sidebar_label: Zip_Read
title: Zip_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Ingests one zip file, which is passed to the user-defined function as a bytes object
for processing.  The user-defined function returns one or more files and a metadata table
which are written to the Ganymede data lake.

### Node Attributes

- **input_file_zip**
  - File extension for valid zip files submitted.  For example, filling in this attribute with "*.zip" will only allow files with the extension .zip to be uploaded.
- **output_table_results**
  - Table displayed on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) in Ganymede UI.

### Notes

In the execute function, returning NodeReturn(tables_to_upload=\{'results': df\}) would render the DataFrame df in the Flow Editor if Table Head visualization is enabled.

## User-Defined Python

Reads Zip file and stores extracted files in the data lake.

### Parameters

- **input_zip_file** : `bytes`
    - Zip file as a bytes object
- **ganymede_context** : `Optional[GanymedeContext]`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.