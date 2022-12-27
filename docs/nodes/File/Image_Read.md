---
sidebar_label: Image_Read
title: Image_Read
displayed_sidebar: nodeSidebar
---

### Node Operator
Ingests and processes an image file

Takes an image as input, processes via user-defined function, and stores a dict of processed
image(s) to the storage bucket


### Node Attributes
- **input_file_image**
  - file extension of image file
- **output_table_image_info**
  - table to write metadata into
## User-Defined Python
Process image data into a dictionary of images indexed by filename to save in cloud storage


### Parameters
- **img** : `bytes`
    - Image file, represented as bytes
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Dict[str, bytes]`
  - Bytes object(s) to store in cloud storage, indexed by file name