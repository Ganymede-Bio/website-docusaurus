---
sidebar_label: Instron_Tensile_Read
title: Instron_Tensile_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Reads contents of an is_tens file into data lake

The contents of is_tens file are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.

### Node Attributes

- **input_file_is_tens**
  - File extension on is_tens file
- **output_table_key**
  - Table with associations between files
- **output_table_raw_metadata**
  - Table with the raw metadata
- **output_table_dimensions**
  - Table with the material dimensions

## User-Defined Python

Processes is_tens file (passed to function as BytesIO file-like objects) into data tables
stored in data lake

### Parameters

- **is_tens_file** : `dict[str, BytesIO]`
    - is_tens file, indexed by file name
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.
