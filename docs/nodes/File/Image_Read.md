---
sidebar_label: Image_Read
title: Image_Read
displayed_sidebar: nodeSidebar
---

Ingest and process image data
Takes an image as input, processes via user-defined function, and stores a dict of processed
image(s) to the storage bucket

### Parameters
- **input_file_image** : `str`
  - file extension of image file
- **output_table_image_info** : `str`
  - table to write metadata into