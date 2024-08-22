---
sidebar_label: LC_Read
title: LC_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Parse data from an LC file and ingest into Ganymede data lake.

### Node Attributes

- **input_file_lc**
  - Glob pattern matching the LC file to be read.

### Example

The Node configuration below would capture CDF files:

lc: *.cdf

## User-Defined Python

Function to process LC file data

### Parameters

- **lc_file_path** : `list[str]`
    - Path to LC file to be read
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage