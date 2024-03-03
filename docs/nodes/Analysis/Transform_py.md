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

- **df_sql_result** : `pd.DataFrame | list[pd.DataFrame]`
    - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage