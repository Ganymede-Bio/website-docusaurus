---
sidebar_label: Image_Read_Multi
title: Image_Read_Multi
displayed_sidebar: nodeSidebar
---

### Node Description
Ingests and processes an image file

Takes multiple images as input, processes via user-defined function, and stores a dict of processed
images to the storage bucket


### Node Attributes
- **input_multi_image**
  - file extension of image files
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
`Tuple[Dict[str, bytes], pd.DataFrame]`
  - First value in tuple is bytes object(s) to store in cloud storage, indexed by file name
  - Second value in tuple is metadata associated with processed image