---
sidebar_label: Process_Blob_to_Blob
title: Process_Blob_to_Blob
displayed_sidebar: nodeSidebar
---

Retrieves blob data, processes via user-defined function, and writes to storage.

### Parameters
- **input_object_names** : `str`
  - Objects to read from Ganymede cloud storage
output_table_data_desc : pd.DataFrame
  - Metadata table describing processed objects stored

### Notes
More than 1 input object can be retrieved by specifying the input_object_names
delimiting the list of objects to pull by semicolons on the Flow Editor input