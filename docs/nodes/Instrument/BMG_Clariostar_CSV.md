---
sidebar_label: BMG_Clariostar_CSV
title: BMG_Clariostar_CSV
displayed_sidebar: nodeSidebar
---

### Node Operator
Reads Clariostar instrument data as input CSV file and writes results to Ganymede data lake.


### Node Attributes
- **output_table_metadata**
  - Name of data lake table to write Clariostar metadata to
- **output_table_results**
  - Name of data lake table to write core Clariostar microplate reader data to
- **input_file_csv**
  - File extension on CSV file
## User-Defined Python
Processes Clariostar CSV file(s), saving data and metadata to the data lake


### Parameters
- **csv_file** : `Dict[str, StringIO]`
    - CSV file(s), indexed by file name
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Dict[str, pd.DataFrame]`
  - Table(s) to store in data lake, indexed by table name