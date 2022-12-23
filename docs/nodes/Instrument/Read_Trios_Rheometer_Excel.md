---
sidebar_label: Read_Trios_Rheometer_Excel
title: Read_Trios_Rheometer_Excel
displayed_sidebar: nodeSidebar
---

## Operator
Reads Trios Rheometer output data tables and uploads files to data lake.

Reads Trios data output in Excel format, with data for each run stored as a tab on an excel
file.  The contents of the file are passed to a user-defined function for processing, which
returns a table for storage in the Ganymede data lake.


### Parameters
- **input_file_excel** : `str`
    - file extension of input excel file
- **output_table_results** : `str`
    - data lake table to write to

## User-Defined Python
Processes Excel file containing Trios Rheometer run data into a single table stored in
the data lake.

Processes Trios Rheometer data with each run stored on a different tab of an Excel file
with tab names containing the name of each run into table to store in the data lake.


### Parameters
- **excel_file** : `pd.ExcelFile`
    - Excel file containing one rheometer run on each tab
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`pd.DataFrame`
  - Stacked table of rheometer results


### Raises
- ValueError
  - If the data contains unlabeled columns
- ValueError
  - If duplicate or extraneous columns exist


### Notes
1st row of input data has field names
2nd row of input data has units of measure