---
sidebar_label: Zip_Read
title: Zip_Read
displayed_sidebar: nodeSidebar
---

### Node Description
Reads a Zip file and uploads the extracted files to the data lake

Ingests one Zip file, which is passed to the user-defined function as a bytes object
for processing.  The user-defined function returns one or more files and a metadata table
which are written to the Ganymede data lake.


### Node Attributes
- **input_file_zip**
  - File extension on zip file
- **output_table_results**
  - Data lake table to write metadata to
## User-Defined Python
Reads Zip file and stores extracted files in the data lake.


### Parameters
- **zip_file** : `bytes`
    - Zip file as a bytes object
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Dict[str, bytes]`
  - Files to store in data lake