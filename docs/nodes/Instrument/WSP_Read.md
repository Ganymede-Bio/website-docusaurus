---
sidebar_label: WSP_Read
title: WSP_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Reads an XML file, processes via user-defined function, and stores result
table in Ganymede data lake

### Node Attributes

- **input_file_xml**
  - File extension for valid XML files submitted.  For example, filling in this attribute with "*.xml" will only allow files with the extension .xml to be uploaded.
- **output_table_results**
  - Table displayed on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) in Ganymede UI.

### Notes

In the execute function, returning NodeReturn(tables_to_upload=\{'results': df\}) would render the DataFrame df in the Flow Editor if Table Head visualization is enabled.

## User-Defined Python

Parse WSP file

### Parameters

- **wsp_file** : `BytesIO`
    - Contents of WSP file
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
Object containing data to store in data lake and/or file storage.