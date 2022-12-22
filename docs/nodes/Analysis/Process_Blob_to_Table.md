---
sidebar_label: Process_Blob_to_Table
title: Process_Blob_to_Table
displayed_sidebar: nodeSidebar
---

Retrieves blob data, processes data via user-defined function, and writes output table(s)
to data lake.

### Parameters
- **input_object_names** : `str`
  - Objects to read from Ganymede cloud storage
- **output_table_results** : `str`
  - Table to display on Table Head in Flow Editor

### Notes
More than 1 input object can be retrieved by specifying the input_object_names
delimiting the list of objects to pull by semicolons on the Flow Editor input