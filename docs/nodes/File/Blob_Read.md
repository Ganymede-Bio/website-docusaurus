---
sidebar_label: Blob_Read
title: Blob_Read
displayed_sidebar: nodeSidebar
---

## Operator
Retrieves blob data for processing by user-defined function and uploads
result to Ganymede cloud storage.


### Parameters
- **output_data** : `str`
    - Filename to be written to storage bucket
- **input_file_object** : `obj`
    - Data to be written to storage bucket
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