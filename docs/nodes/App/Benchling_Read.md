---
sidebar_label: Benchling_Read
title: Benchling_Read
displayed_sidebar: nodeSidebar
---

### Node Description
Reads Benchling data specified by Benchling run tag.

Passes Benchling run tag to user-defined function and uploads tabular output
from user-defined function to Ganymede data lake.

This operator is used in conjunction with BenchlingTag; adding BenchlingTag to
a _flow_ enables a Benchling run tag to be specified in the _flow_ input box.
The user-defined function uses the Benchling ID associated with the run tag
to retrieve data and process data into table(s), which are uploaded to the Ganymede
data lake.


### Node Attributes
- **output_table_results**
  - Table to display on Table Head in Flow Editor


### Notes
Prior to usage, the secrets below must be configured in your Ganymede environment.  More information
on acquiring these credentials can be found [here](https://docs.benchling.com/docs/authentication).
- **benchling_url**: URL for Benchling tenant
- **benchling_app_client_id**: Client_ID
- **benchling_client_secret**: Client_Secret

Secrets can be configured by clicking on the gear icon in the upper-right hand of the Ganymede
application, then selecting Settings and navigating to the Settings tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.

If a DataFrame is returned, the table name corresponds to the output_table_results parameter
of the node.

If a dict is returned, the keys of the dict are used as table names for the corresponding
DataFrames to store. The table with output_table_results as its key is displayed on the Flow Editor.
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
- **conn**: Benchling connection
- **run_tag**: Benchling ID associated with run tag
- **display_tag**: Displayed value of Benchling run tag