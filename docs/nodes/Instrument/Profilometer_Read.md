---
sidebar_label: Profilometer_Read
title: Profilometer_Read
displayed_sidebar: nodeSidebar
---

### Node Description

Parse profilometer data from Mx Software and upload contents to data lake.

### Node Attributes

- **input_file_datx**
  - File extension for valid datx files submitted.  For example, filling in this attribute with "*.datx" will only allow files with the extension .datx to be uploaded.
- **output_table_image**
  - location to write processed data file to

## User-Defined Python

Processes h5data into bytes object for saving in cloud storage

### Parameters

- **h5data** : `dict`
    - HDF5 file contents structured as a Python dict
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage