---
sidebar_label: Image_Read
title: Image_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Ingests and processes an image file

Takes an image as input, processes via user-defined function, and stores a dict of processed
image(s) to the storage bucket

### Node Attributes

- **input_file_image**
  - File extension for valid image files submitted.  For example, filling in this attribute with "*.bmp" will only allow files with the extension .bmp to be uploaded.
- **output_table_image_info**
  - Table to write metadata into.  This table is displayed on the [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) in Ganymede UI.

### Notes

In the execute function, returning NodeReturn(tables_to_upload=\{'image_info': df\}) would render the DataFrame df in the Flow Editor if Table Head visualization is enabled.

## User-Defined Python

Process image data into a dictionary of images indexed by filename to save in cloud storage

### Parameters

- **img** : `bytes`
    - Image file, represented as bytes
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
Object containing data to store in data lake and/or file storage