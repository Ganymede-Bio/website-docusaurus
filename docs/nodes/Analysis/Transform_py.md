---
sidebar_label: Transform_py
title: Transform_py
displayed_sidebar: nodeSidebar
---

### Node Description
Runs user-defined Python function on results of query on Ganymede data lake.

Retrieves table(s) from Ganymede data lake, processes via user-defined Python function,
and stores result table(s) to Ganymede data lake.


### Node Attributes
- **output_table_analysis**
  - Table displayed on Table Head
## User-Defined Python
Process tabular data from user-defined SQL query, writing results back to data lake


### Parameters
- **df_sql_result** : `Union[pd.DataFrame, List[pd.DataFrame]]`
    - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Union[pd.DataFrame, Dict[str, pd.DataFrame]]`
  - Table(s) to store in data lake


### Notes
If a DataFrame is returned, the table name corresponds to the **results** parameter of the node.

If a dict is returned, the keys of the dict are used as table names for the corresponding
DataFrames to store.  The table with **results** as its key is displayed on the Flow Editor.