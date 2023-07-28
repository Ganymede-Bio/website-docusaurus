---
sidebar_label: Input_File
title: Input_File
displayed_sidebar: nodeSidebar
---

### Node Description
Retrieves file for processing by user-defined function and uploads
result to Ganymede cloud storage.


### Node Attributes
- **input_file_file_pattern**
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
  - Table(s) and File(s) to store in Ganymede.  To write to the table referenced on the node,
  - return a DataFrame in the "results" key of the tables_to_upload dictionary.  For more info,
  - type '?NodeReturn' into a cell in the editor notebook.