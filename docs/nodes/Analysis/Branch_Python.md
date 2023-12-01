---
sidebar_label: Branch_Python
title: Branch_Python
displayed_sidebar: nodeSidebar
---

### Node Description

Branches to different downstream tasks based on results of Python function.

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

`Tuple[NodeReturn, Union[bool, Union[str, List[str]]]]`
  First parameter:
    Object containing data to store in data lake and/or file storage.  NodeReturn object
    takes 2 parameters:
    - tables_to_upload: Dict[str, pd.DataFrame]
      keys are table names, values are pandas DataFrames to upload
    - files_to_upload: Dict[str, bytes]
      keys are file names, values are file data to upload
  Second parameter:
    Boolean or string indicating whether to continue to next node in flow.  If False,
    the flow will stop at this node.  If True, the flow will continue to the next node(s).
    If a string or list of strings is provided, the flow will continue to the node(s)
    specified in the string(s).


### Notes

Files can also be retrieved and processed using the list_files and retrieve_files functions.
Documentation on these functions can be found at https://docs.ganymede.bio/sdk/GanymedeClass