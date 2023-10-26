---
sidebar_label: Trigger_Python
title: Trigger_Python
displayed_sidebar: nodeSidebar
---

### Node Description

Execute downstream flow

Retrieves table(s) from Ganymede data lake, processes via user-defined Python function,
and uses result to execute downstream flow

### Node Attributes

- **input_trigger_flow_name**
  - Input Ganymede flow to trigger from captured event

## User-Defined Python

Calls Benchling to get data for flow to trigger

### Parameters

- **df_sql_result** : `Union[pd.DataFrame, List[pd.DataFrame]]`
    - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `Optional[GanyemdeContext]`
    - Ganymede context variable, which stores flow run metadata

### Returns

`FlowInputs`
  FlowInputs class for kicking off subsequent Flow