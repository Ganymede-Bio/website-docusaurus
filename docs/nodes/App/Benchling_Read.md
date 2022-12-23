---
sidebar_label: Benchling_Read
title: Benchling_Read
displayed_sidebar: nodeSidebar
---

## Operator
Reads Benchling data specified by Benchling run tag.

Passes Benchling run tag to user-defined function and uploads tabular output
from user-defined function to Ganymede data lake.

This operator is used in conjunction with BenchlingTag; adding BenchlingTag to
a _flow_ enables a Benchling run tag to be specified in the _flow_ input box.
The user-defined function uses the Benchling ID associated with the run tag
to retrieve data and process data into table(s), which are uploaded to the Ganymede
data lake.


### Parameters
- **output_table_results** : `str`
    - Name of data lake table to write results to


### Notes
Prior to usage, Benchling must be configured to permit Ganymede access. In addition to
the client's Benchling URL, this requires creating and utilizing secrets with the following
IDs generated in the App setup process via Benchling:
Client_ID
Client_Secret
## User-Defined Python
Reads Benchling data based on run tag.  This node should be used in
conjunction with the Benchling_Tag node.


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