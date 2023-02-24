---
sidebar_label: Excel_Read_Multi
title: Excel_Read_Multi
displayed_sidebar: nodeSidebar
---

### Node Operator
Reads contents of multiple excel files into data lake

The contents of the excel files are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.


### Node Attributes
- **input_multi_excel**
  - File extension on excel file used for specifying valid file extensions
- **output_table_results**
  - Table to display on Table Head in Flow Editor
## User-Defined Python
Reads Excel file and stores processed table(s) in data lake.


### Parameters
- **excel_file** : `Union[bytes, Dict[str, bytes]]`
    - Excel file as a bytes object or as dict indexed by filename
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Union[pd.DataFrame, Dict[str, pd.DataFrame]]`
  - Table(s) to store in data lake


### Notes
Excel_file is represented in bytes so user can handle cases where Excel spreadsheet is
a binary object within this function