---
sidebar_label: Excel_Read
title: Excel_Read
displayed_sidebar: nodeSidebar
---

### Node Description
Reads Excel file and uploads processed result to data lake

Ingests one Excel file, which is passed to the user-defined function as a bytes object
for processing.  The user-defined function returns one or more tables, which are
uploaded to the Ganymede data lake.


### Node Attributes
- **input_file_excel**
  - File extension for valid Excel files submitted.  For example, filling in this attribute with "*.xls*" will allow any file containing extension .xls, .xlsx, .xlsm, and .xlsb to be uploaded.
- **output_table_results**
  - Data lake table to write to
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