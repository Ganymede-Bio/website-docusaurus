---
sidebar_label: Load_Parquet_to_Table
title: Load_Parquet_to_Table
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Loads parquet files saved in Ganymede storage into datalake tables. Data will be appended to the
datalake table if it already exists, otherwise create a new one.  

## User-Defined Python

Specify list of Ganymede Parquet files to reference in Ganymede tables.  

### Returns

`list[FileToTable]`
  List of FileToTable objects to be used in Ganymede tables.  

### Notes

The list of FileToTable objects are applied in the order that they are returned.  For example, a new table could be created from multiple files by setting if_exists to IfExists.REPLACE for the first file being used to write to the table and setting if_exists to IfExists.APPEND for subsequent files.
