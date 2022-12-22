---
sidebar_label: BMG_Clariostar_CSV
title: BMG_Clariostar_CSV
displayed_sidebar: nodeSidebar
---

Reads Clariostar instrument data as input CSV file and writes results to Ganymede data lake.

### Parameters
- **output_table_metadata** : `str`
  - Name of data lake table to write Clariostar metadata to
- **output_table_results** : `str`
  - Name of data lake table to write core Clariostar microplate reader data to
- **input_file_csv** : `str`
  - File extension on CSV file