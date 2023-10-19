---
sidebar_label: Synergy_Read_Multi
title: Synergy_Read_Multi
displayed_sidebar: nodeSidebar
---

### Node Description

Reads contents of multiple Synergy files into data lake

The contents of the Synergy files are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.

### Node Attributes

- **input_multi_txt**
  - File extension for valid text files submitted.  For example, filling in this attribute with "*.txt" will only allow files with the extension .txt to be uploaded.
- **output_table_results**
  - Table to display on Table Head in Flow Editor

## User-Defined Python

Processes Synergy text file(s) into data tables stored in data lake

### Parameters

- **synergy_file** : `Dict[str, bytes]`
    - Synergy text files, indexed by file name
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.