---
sidebar_label: Input_File_Multi
title: Input_File_Multi
displayed_sidebar: nodeSidebar
---

### Node Description
Reads contents of multiple files into data lake

Contents of the data files are processed in the user-defined function, and stored
in result table(s) in the Ganymede data lake.


### Node Attributes
- **input_multi_file_pattern**
  - Filename pattern for specifying valid input files.  For example, filling in this attribute
  - with "exp_*.xml" will only allow files with the prefix "exp_" and the extension ".xml" to
  - be uploaded.
## User-Defined Python
Processes file data for saving in cloud storage


### Parameters
- **file_data** : `Dict[str, bytes]`
    - Bytes object to process, indexed by filename
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`NodeReturn`
  Object containing data to store in data lake and/or file storage


### Notes
Files can also be retrieved and processed using the list_files and retrieve_files functions.
Documentation on these functions can be found at https://docs.ganymede.bio/sdk/ModuleIO