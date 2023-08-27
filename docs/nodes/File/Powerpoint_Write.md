---
sidebar_label: Powerpoint_Write
title: Powerpoint_Write
displayed_sidebar: nodeSidebar
---

### Node Description
Parses table data and writes Powerpoint output to storage.

Retrieves one or more tables from Ganymede data lake, processes via user-defined function,
and writes powerpoint output to Ganymede cloud storage.
## User-Defined Python
Processes table(s) from user-defined SQL query into Powerpoint output


### Parameters
- **df_sql_result** : `Optional[Union[pd.DataFrame, List[pd.DataFrame]]]`
    - table or list of tables from SQL query to process
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`NodeReturn`
  Object containing data to store in data lake and/or file storage