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
  - Table(s) and File(s) to store in Ganymede.  To write to the table referenced on the node,
  - return a DataFrame in the "results" key of the tables_to_upload dictionary.  For more info,
  - type '?NodeReturn' into a cell in the editor notebook.