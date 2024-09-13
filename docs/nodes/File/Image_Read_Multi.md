---
sidebar_label: Image_Read_Multi
title: Image_Read_Multi
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Ingests and processes an image file

Takes multiple images as input, processes via user-defined function, and stores a dict of processed
images to the storage bucket

### Node Attributes

- **input_multi_image**
  - File extension for valid image files submitted.  For example, filling in this attribute with "*.bmp" will only allow files with the extension .bmp to be uploaded.
- **output_table_image_info**
  - Metadata table displayed on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) in Ganymede UI.

### Notes

In the execute function, returning NodeReturn(tables_to_upload=\{'image_info': df\}) would render the DataFrame df in the Flow Editor if Table Head visualization is enabled.

### Example

The example Node configuration captures PNG files and would render image_info_tbl in Flow Editor if Table Heads are enabled

- **image**: *.png
- **image_info**: image_info_tbl

## User-Defined Python

Process image data into a dictionary of images indexed by filename to save in cloud storage

### Parameters

- **img** : `bytes`
  - Image file, represented as bytes
- **ganymede_context** : `GanymedeContext`
  - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.
