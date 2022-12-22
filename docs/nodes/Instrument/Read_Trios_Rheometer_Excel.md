---
sidebar_label: Read_Trios_Rheometer_Excel
title: Read_Trios_Rheometer_Excel
displayed_sidebar: nodeSidebar
---

Reads Trios output data tables from (in Excel format, with each tab denoting a separate run),
and uploads files to data lake.

### Parameters
- **input_file_excel** : `str`
  - file extension of input excel file
- **output_table_results** : `str`
  - data lake table to write to