---
sidebar_label: Image_Write
title: Image_Write
displayed_sidebar: nodeSidebar
---

### Node Operator
Parse table data and writes to storage.  Useful for storing graphs created from data.

Retrieves table(s) from Ganymede data lake, processes table(s) via user-defined function,
and stores result in cloud storages


### Node Attributes
- **output_table_data_desc**
  - Table describing objects to be moved
## User-Defined Python
Process image data into a dictionary of images indexed by filename to save in cloud storage


### Parameters
- **img** : `bytes`
    - Image file, represented as bytes
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Dict[str, bytes]`
  - Bytes objects to store in cloud storage, indexed by file name