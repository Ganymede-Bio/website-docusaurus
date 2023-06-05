---
sidebar_label: Blob_Read
title: Blob_Read
displayed_sidebar: nodeSidebar
---

### Node Description
Retrieves blob data for processing by user-defined function and uploads
result to Ganymede cloud storage.


### Node Attributes
- **input_file_object**
  - Filename pattern for specifying valid input files.  For example, filling in this attribute with "exp_*.xml" will only allow files with the prefix "exp_" and the extension ".xml" to be uploaded.
- **output_data**
  - Name of file to be written to storage bucket
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