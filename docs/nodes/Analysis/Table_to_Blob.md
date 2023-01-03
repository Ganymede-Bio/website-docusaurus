---
sidebar_label: Table_to_Blob
title: Table_to_Blob
displayed_sidebar: nodeSidebar
---

### Node Operator
Processes data table(s) into blobs

Retrieves table(s) from Ganymede data lake, processes via user-defined function,
and writes result to storage bucket.  The user-defined function returns key-value
pairs in which keys specify file path in cloud storage and values are objects to store.
## User-Defined Python
Processes table(s) from query result into blobs for saving in cloud storage.

In the example use case presented here, tabular data is graphed and stored.


### Parameters
- **df_sql_result** : `Union[pd.DataFrame, List[pd.DataFrame]], optional`
    - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Dict[str, bytes]`
  - Blob data to store in cloud storage, indexed by blob file name