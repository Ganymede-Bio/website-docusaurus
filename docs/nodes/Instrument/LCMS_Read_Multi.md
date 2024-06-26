---
sidebar_label: LCMS_Read_Multi
title: LCMS_Read_Multi
displayed_sidebar: nodeSidebar
---

### Node Description

An Airflow operator class that parses data from an LCMS file.

### Node Attributes

- **input_multi_lcms**
  - Glob pattern matching the LCMS file to be read.

## User-Defined Python

Function to process LCMS file data

### Parameters

- **lcms_file_paths** : `list[str]`
    - Paths to LCMS files to be read
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage