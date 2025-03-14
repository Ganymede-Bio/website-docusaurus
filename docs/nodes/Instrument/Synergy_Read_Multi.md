---
sidebar_label: Synergy_Read_Multi
title: Synergy_Read_Multi
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Reads contents of a Synergy file into data lake

The contents of Synergy file are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.

### Node Attributes

- **txt**
  - File extension for valid text files submitted.  For example, filling in this attribute with "*.txt" will only allow files with the extension .txt to be uploaded.
- **output_table_results**
  - Table displayed on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) in Ganymede UI.

### Notes

In the execute function, returning NodeReturn(tables_to_upload=\{'results': df\}) would render the DataFrame df in the Flow Editor if Table Head visualization is enabled.

## User-Defined Python

Processes Synergy text file(s) into data tables stored in data lake

### Parameters

- **synergy_file** : `dict[str, bytes]`
  - Synergy text files, indexed by file name
- **ganymede_context** : `GanymedeContext`
  - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.
