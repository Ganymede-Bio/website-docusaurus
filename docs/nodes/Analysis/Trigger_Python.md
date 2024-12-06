---
sidebar_label: Trigger_Python
title: Trigger_Python
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Execute downstream flow

Retrieves table(s) from Ganymede data lake, processes via user-defined Python function,
and uses result to execute downstream flow

## User-Defined Python

The [FlowInputs object](../NodeOverview#flowinputs-object) holds the inputs for the Flow to trigger.

- files: Files to be passed to the Flow to trigger
- params: Input parameters to be passed to the Flow to trigger
- tags: Flow Tags to be passed to the Flow to trigger

### Parameters

- **df_sql_result** : `pd.DataFrame | list[pd.DataFrame]`
  - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `Optional[GanymedeContext]`
  - Ganymede context variable, which stores flow run metadata

### Returns

`tuple[str, FlowInputs]`
  Tuple where first element is the ID of the flow to trigger
  and second element is the FlowInputs class containing all inputs for the flow to trigger

### Notes

The ID for the triggered flow can be found by navigating to the flow in the Ganymede UI
and clicking on Manage.  The ID is an immutable string found on the Configuration panel.

Use ?FlowInputs in the Juppyter notebook to see the class definition for FlowInputs.
Use ?FlowInputFile in the Jupyter notebook to see the class definition for FlowInputFile.
