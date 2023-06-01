---
sidebar_label: Process_Blob_to_Table
title: Process_Blob_to_Table
displayed_sidebar: nodeSidebar
---

### Node Description
Retrieves blob data, processes data via user-defined function, and writes output table(s)
to data lake.


### Node Attributes
- **src_input_or_output_bucket**
  - Specify "input" or "output" for the Ganymede cloud storage bucket to read from.
  - "input" contains files ingested into a flow; "output" contains processed data.
- **input_object_names**
  - Objects to read from Ganymede cloud storage
- **output_table_results**
  - Table to display on Table Head in Flow Editor


### Notes
More than 1 input object can be retrieved by specifying the input_object_names
delimiting the list of objects to pull by semicolons on the Flow Editor input
## User-Defined Python
Processes bytes data file(s) into output data table for storage in data lake


### Parameters
- **data** : `Dict[str, bytes]`
    - Bytes data to process, indexed by object name
- **df_sql_result** : `Optional[Union[pd.DataFrame, List[pd.DataFrame]]]`
    - Tabular result(s) of user-defined SQL query
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Union[pd.DataFrame, Dict[str, pd.DataFrame]]`
  - Table(s) to store in data lake.


### Notes
If a DataFrame is returned, the table name corresponds to the **results** parameter of the node.

If a dict is returned, the keys of the dict are used as table names for the corresponding
DataFrames to store.  The table with **results** as its key is displayed on the Flow Editor.