---
sidebar_label: CSV_Read
title: CSV_Read
displayed_sidebar: nodeSidebar
---

Reads contents of a CSV file into data lake

The contents of CSV file are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.


### Parameters
- **input_file_csv** : `str`
  - File extension on CSV file
- **output_table_results** : `str`
  - Table to display on Table Head in Flow Editor