---
sidebar_label: Blob_Read_Multi
title: Blob_Read_Multi
displayed_sidebar: nodeSidebar
---

### Node Description
Reads contents of multiple blob files into data lake

The contents of the blob files are passed to the user-defined function, which
return one or more blobs for storage in Ganymede data lake.


### Node Attributes
- **input_multi_object**
  - Filename pattern for specifying valid input files.  For example, filling in this attribute with "exp_*.xml" will only allow files with the prefix "exp_" and the extension ".xml" to be uploaded.
- **output_data**
  - Filename to be written to storage bucket
## User-Defined Python
Processes blob data for saving in cloud storage


### Parameters
- **blob_data** : `bytes`
    - Bytes object to process
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`bytes`
  - Bytes object to save in cloud storage