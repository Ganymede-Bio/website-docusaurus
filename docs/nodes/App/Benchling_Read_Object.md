---
sidebar_label: Benchling_Read_Object
title: Benchling_Read_Object
displayed_sidebar: nodeSidebar
---

### Node Description
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
Usage requires configuration of a
[Benchling application](https://docs.benchling.com/docs/getting-started-benchling-apps#getting-started)
in the relevant Benchling tenant.

Prior to usage, the secrets below must be configured in your Ganymede environment.  More information
on acquiring these credentials can be found [here](https://docs.benchling.com/docs/authentication).
- **benchling_url**: URL for Benchling tenant; has form https://<tenant\>.benchling.com
- **benchling_app_client_id**: Client_ID; has form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
- **benchling_client_secret**: Client_Secret; has form cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.
## User-Defined Python
Reads Benchling data based on input parameter.  This node should be used in
conjunction with the Input_Param node.


### Parameters
- **benchling_context** : `BenchlingContext`
    - Benchling context variable, which stores Benchling connection information
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`NodeReturn`
  Object containing data to store in data lake and/or file storage


### Notes
This template shows how a target plate could be pulled via the Benchling API
Documentation for the Benchling API can be found here: https://benchling.com/api/reference

benchling_context is an object of class BenchlingContext, consisting of
- **conn**: Benchling connection
- **run_tag**: Benchling ID associated with run tag
- **display_tag**: Displayed value of Benchling run tag