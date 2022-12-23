---
sidebar_label: Excel_Read
title: Excel_Read
displayed_sidebar: nodeSidebar
---

## Operator
Reads Excel file and uploads processed result to data lake

Ingests one Excel file, which is passed to the user-defined function as a bytes object
for processing.  The user-defined function returns one or more tables, which are
uploaded to the Ganymede data lake.


### Parameters
- **input_file_excel** : `str`
    - File extension on excel file
- **output_table_results** : `str`
    - Data lake table to write to
## User-Defined Python
Reads Excel file and stores processed table(s) in data lake.


### Parameters
- **excel_file** : `bytes`
    - Excel file as a bytes object
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Union[pd.DataFrame, Dict[str, pd.DataFrame]]`
  - Table(s) to store in data lake


### Notes
Excel_file is represented in bytes so user can handle cases where Excel spreadsheet is
a binary object within this function