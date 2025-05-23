---
sidebar_label: LCMS_Read
title: LCMS_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Parse and ingest data from an LCMS file into Ganymede data lake.

### Node Attributes

- **lcms**
  - Glob pattern matching the LCMS file to be read.

### Example

The Node configuration below would capture mzML files:

lcms: *.mzML

## User-Defined Python

Function to process LCMS file data

### Parameters

- **lcms_file_paths** : `str`
  - Path to LCMS file to be read
- **ganymede_context** : `GanymedeContext`
  - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage
