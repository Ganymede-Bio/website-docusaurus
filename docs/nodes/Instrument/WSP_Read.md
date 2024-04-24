---
sidebar_label: WSP_Read
title: WSP_Read
displayed_sidebar: nodeSidebar
---

### Node Description

Reads a FlowJo WSP file and stores processed results in data lake

Reads a FlowJo WSP file, processes via user-defined function, and stores result
table in Ganymede data lake

### Node Attributes

- **input_file_wsp**
  - File extension for valid WSP files submitted.  For example, filling in this attribute with "*.wsp" will only allow files with the extension .wsp to be uploaded.

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