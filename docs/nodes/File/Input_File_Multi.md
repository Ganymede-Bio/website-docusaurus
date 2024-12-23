---
sidebar_label: Input_File_Multi
title: Input_File_Multi
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Retrieves file for processing by user-defined function and uploads
result to Ganymede cloud storage.

### Node Attributes

- **input_file_file_pattern**
  - Filename pattern for specifying valid input files.  For example, filling in this attribute
  - with "exp_*.xml" will only allow files with the prefix "exp_" and the extension ".xml" to
  - be uploaded.

### Example

The Node configuration below would capture files ending in .xml:

file_pattern: *.xml

## User-Defined Python

Processes file data for saving in cloud storage

### Parameters

- **file_data** : `dict[str, bytes]`
    - Bytes object to process, indexed by filename
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage

### Notes

Files can also be retrieved and processed using the list_files and retrieve_files functions.
Documentation on these functions can be found at https://docs.ganymede.bio/sdk/GanymedeClass
