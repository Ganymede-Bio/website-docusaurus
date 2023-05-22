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
  - Data to be written to storage bucket
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