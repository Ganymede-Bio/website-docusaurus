---
sidebar_label: Benchling_Api
title: Benchling_Api
displayed_sidebar: nodeSidebar
---

### Node Description

Reads Benchling data.

Uploads tabular output from user-defined function to Ganymede data lake.

### Node Attributes

- **output_table_results**
  - Table to display on Table Head in Flow Editor

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

If a DataFrame is returned, the table name corresponds to the output_table_results parameter
of the node.

If a dict is returned, the keys of the dict are used as table names for the corresponding
DataFrames to store. The table with output_table_results as its key is displayed on the Flow Editor.

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

Documentation for the Benchling API can be found here: https://benchling.com/api/reference