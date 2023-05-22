---
sidebar_label: CSV_Write
title: CSV_Write
displayed_sidebar: nodeSidebar
---

### Node Description
Writes 1 table from data lake to CSV

Retrieves one or more tables from Ganymede data lake, which the user-defined function processes
to a single table.  The table returned by the user-defined function is saved in the Ganymede
data lake.


### Node Attributes
- **output_csv_filename**
  - name of output CSV file
## User-Defined Python
Process table(s) resulting from user-defined SQL query into CSV file


### Parameters
- **df_sql_result** : `Union[pd.DataFrame, List[pd.DataFrame]]`
    - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`bytes`
  - CSV file to store