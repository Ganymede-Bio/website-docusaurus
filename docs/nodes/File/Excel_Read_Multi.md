---
sidebar_label: Excel_Read_Multi
title: Excel_Read_Multi
displayed_sidebar: nodeSidebar
---

### Node Description
Reads contents of multiple excel files into data lake

The contents of the excel files are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.


### Node Attributes
- **input_multi_excel**
  - File extension for valid Excel files submitted.  For example, filling in this attribute with "*.xls*" will allow any file containing extension .xls, .xlsx, .xlsm, and .xlsb to be uploaded.
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
`NodeReturn`
  Object containing data to store in data lake and/or file storage


### Notes
Excel_file is represented in bytes so user can handle cases where Excel spreadsheet is
a binary object within this function