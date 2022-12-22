---
sidebar_label: Read_Trios_Rheometer_Excel
title: Read_Trios_Rheometer_Excel
displayed_sidebar: nodeSidebar
---

Reads Trios Rheometer output data tables and uploads files to data lake.

Reads Trios data output in Excel format, with data for each run stored as a tab on an excel
file.  The contents of the file are passed to a user-defined function for processing, which
returns a table for storage in the Ganymede data lake.


### Parameters
- **input_file_excel** : `str`
  - file extension of input excel file
- **output_table_results** : `str`
  - data lake table to write to
