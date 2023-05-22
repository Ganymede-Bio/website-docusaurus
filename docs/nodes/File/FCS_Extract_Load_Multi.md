---
sidebar_label: FCS_Extract_Load_Multi
title: FCS_Extract_Load_Multi
displayed_sidebar: nodeSidebar
---

### Node Description
Reads contents of multiple FCS files into data lake

The contents of the FCS files are passed to the user-defined function, which
return tables for storage in Ganymede data lake.


### Node Attributes
- **input_multi_fcs**
  - File extension on FCS file used for specifying valid file extensions
- **output_table_results**
  - Table to display on Table Head in Flow Editor
## User-Defined Python
Process FCS data/metadata file


### Parameters
- **metadata** : `Dict[str, pd.DataFrame]|Dict[Dict[str, pd.DataFrame]]`
    - Metadata from FCS file
- **data** : `pd.DataFrame`

- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Dict[str, pd.DataFrame]`
  - Tables containing data and metadata parsed from FCS file