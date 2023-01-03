---
sidebar_label: Benchling_Write
title: Benchling_Write
displayed_sidebar: nodeSidebar
---

### Node Operator
Writes to Benchling via API

Pulls table from data lake based on SQL query provided, applies user-defined logic,
and uploads processed result to Benchling.  This operator is used in conjunction with
the BenchlingTag operator; this operator writes to the location specified by the Benchling
run tag.


### Notes
Prior to usage, Benchling must be configured to permit Ganymede access. In addition to
the client's Benchling URL, this requires creating and utilizing secrets with the following
IDs generated in the App setup process via Benchling:
Client_ID
Client_Secret
## User-Defined Python
Processes input DataFrame for upload to Benchling


### Parameters
- **df_all** : `pd.DataFrame`
    - Tabular result of user-defined SQL query
- **benchling_context** : `BenchlingContext`
    - Benchling context variable, which stores Benchling connection information
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata