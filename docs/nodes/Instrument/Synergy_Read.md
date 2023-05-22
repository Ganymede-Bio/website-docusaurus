---
sidebar_label: Synergy_Read
title: Synergy_Read
displayed_sidebar: nodeSidebar
---

### Node Description
Reads contents of a Synergy file into data lake

The contents of Synergy file are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.


### Node Attributes
- **input_file_Synergy**
  - File extension on Synergy file used for specifying valid file extensions
- **output_table_results**
  - Table to display on Table Head in Flow Editor
## User-Defined Python
Processes Synergy text file(s) into data tables stored in data lake


### Parameters
- **synergy_file** : `Dict[str, bytes]`
    - Synergy text files, indexed by file name
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Dict[str, pd.DataFrame]`
  - Tables to store in data lake