---
sidebar_label: LC_Read_Multi
title: LC_Read_Multi
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Parse data from CDF files with LC data and ingest into Ganymede data lake.

### Node Attributes

- **lc**
  - Glob pattern matching the LC file to be read.

### Example

The Node configuration below would capture CDF files:

lc: *.cdf

## User-Defined Python

Function to process LC file data

### Parameters

- **lc_file_paths** : `list[str]`
  - Paths to LC files to be read
- **ganymede_context** : `GanymedeContext`
  - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage
