---
sidebar_label: Excel_Read
title: Excel_Read
displayed_sidebar: nodeSidebar
---

Reads Excel files and upload to data lake
Ingests one Excel file, which is passed to the user-defined function as a bytes object
for processing.  The user-defined function returns one or more tables, which are
uploaded to the Ganymede data lake.

### Parameters
- **input_file_excel** : `str`
  - File extension on excel file
- **output_table_results** : `str`
  - Data lake table to write to