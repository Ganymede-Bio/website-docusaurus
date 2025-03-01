---
sidebar_label: HDF5_Read
title: HDF5_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Reads HDF5 file

Retrieves HDF5 data for processing by user-defined function. The result of the user-defined
function is stored in Ganymede cloud storage.

### Node Attributes

- **input_file_hdf5**
  - File extension for valid HDF5 files submitted.  For example, filling in this attribute with "*.hdf" will only allow files with the extension .hdf to be uploaded.
- **output_data**
  - Name of file to write processed data to

### Notes

HDF5 is stored in generic storage rather than as a table since the format is not tabular.

## User-Defined Python

Processes HDF5 data

### Parameters

- **h5data** : `dict[str, object]`
    - HDF5 data presented as a nested dict
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.
