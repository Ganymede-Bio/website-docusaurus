---
sidebar_label: Image_Write
title: Image_Write
displayed_sidebar: nodeSidebar
---

### Node Description

Parse table data and writes to storage.  Useful for storing graphs created from data.

Retrieves table(s) from Ganymede data lake, processes table(s) via user-defined function,
and stores result in cloud storages.

Inkscape is installed in the container to convert various image formats.

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