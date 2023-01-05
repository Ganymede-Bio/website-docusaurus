---
sidebar_label: Benchling_Read_Object
title: Benchling_Read_Object
displayed_sidebar: nodeSidebar
---

### Node Operator
Reads Benchling data specified by input Benchling ID string.

Executes Benchling API call(s) based on user-defined function and upload results to data lake

Passes Benchling ID to user-defined function for retrieving Benchling API data.
The user-defined function returns one or more DataFrames, which are uploaded as tables into
the Ganymede data lake.


### Node Attributes
- **input_string_id**
  - Benchling API ID, specified on node
- **output_table_results**
  - Name of data lake table to write results to


### Notes
Prior to usage, Benchling must be configured to permit Ganymede access. In addition to
the client's Benchling URL, this requires creating and utilizing secrets with the following
IDs generated in the App setup process via Benchling:
Client_ID
Client_Secret

Please reach out to Ganymede for configuration assistance.
## User-Defined Python
Reads Benchling data based on input parameter.  This node should be used in
conjunction with the Input_Param node.


### Parameters
- **benchling_context** : `BenchlingContext`
    - Benchling context variable, which stores Benchling connection information
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Union[Dict[str, pd.DataFrame], pd.DataFrame]`
  - Table or dictionary of tables indexed by table name to store in data lake


### Notes
This template shows how a target plate could be pulled via the Benchling API
Documentation for the Benchling API can be found here: https://benchling.com/api/reference

benchling_context is an object of class BenchlingContext, consisting of
conn: Benchling connection
run_tag: Benchling ID associated with run tag
display_tag: Displayed value of Benchling run tag