---
sidebar_label: Python
title: Python
displayed_sidebar: nodeSidebar
---

### Node Description
Runs user-defined Python function on results of query on Ganymede data lake.

Retrieves table(s) from Ganymede data lake, processes via user-defined Python function,
and stores result table(s) to Ganymede data lake.


### Node Attributes
- **output_table_results**
  - Table displayed on Table Header in Ganymede UI
## User-Defined Python
Process tabular data from user-defined SQL query, writing results back to data lake.  Data
is written to the output bucket.


### Parameters
- **df_sql_result** : `Union[pd.DataFrame, List[pd.DataFrame]]`
    - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`NodeReturn`
  - Table(s) and File(s) to store in Ganymede.  To write to the table referenced on the node,
  - return a DataFrame in the "results" key of the tables_to_upload dictionary.  For more info,
  - type '?NodeReturn' into a cell in the editor notebook.