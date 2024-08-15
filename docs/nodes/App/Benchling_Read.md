---
sidebar_label: Benchling_Read
title: Benchling_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Reads Benchling data specified by Benchling run tag.

Passes Benchling run tag to user-defined function and uploads tabular output
from user-defined function to Ganymede data lake.

This node is used in conjunction with BenchlingTag; adding BenchlingTag to
a _flow_ enables a Benchling run tag to be specified in the _flow_ input box.
The user-defined function uses the Benchling ID associated with the run tag
to retrieve data and process data into table(s), which are uploaded to the Ganymede
data lake.

### Node Attributes

- **output_table_results**
  - Table displayed on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) in Ganymede UI.

### Notes

Usage requires configuration of a
[Benchling application](https://docs.benchling.com/docs/getting-started-benchling-apps#getting-started)
in the relevant Benchling tenant.

Prior to usage, the secrets below must be configured in your Ganymede environment.  More information
on acquiring these credentials can be found [here](https://docs.benchling.com/docs/authentication).
- **benchling_url**: URL for Benchling tenant; has form https://\<tenant\>.benchling.com
- **benchling_app_client_id**: Client_ID; has form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
- **benchling_client_secret**: Client_Secret; has form cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.

In the execute function, returning NodeReturn(tables_to_upload=\{'results': df\}) would render the DataFrame df in the Flow Editor if Table Head visualization is enabled.

## User-Defined Python

Reads Benchling data based on run tag.  This node should be used in
conjunction with the Benchling_Tag node.

### Parameters

- **benchling_context** : `BenchlingContext`
    - Benchling context variable, which stores Benchling connection information
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
Object containing data to store in data lake and/or file storage

### Notes

This template shows how a target plate could be pulled via the Benchling object
Documentation for the Benchling API can be found here: https://benchling.com/api/reference

benchling_context is an object of class BenchlingContext, consisting of
- **conn**: Benchling connection
- **run_tag**: Benchling ID associated with run tag
- **display_tag**: Displayed value of Benchling run tag