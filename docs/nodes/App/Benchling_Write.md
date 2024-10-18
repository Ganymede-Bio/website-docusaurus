---
sidebar_label: Benchling_Write
title: Benchling_Write
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Writes to Benchling via API

Pulls table from data lake based on SQL query provided, applies user-defined logic,
and uploads processed result to Benchling.  This node is used in conjunction with
the BenchlingTag node; this node writes to the location specified by the Benchling
run tag.

### Notes

Usage requires configuration of a
[Benchling application](https://docs.benchling.com/docs/getting-started-benchling-apps#getting-started)
in the relevant Benchling tenant.

Prior to usage, the secrets below must be configured in your Ganymede environment.  More information
on acquiring these credentials can be found [here](https://docs.benchling.com/docs/authentication).

- **benchling_url**: URL for Benchling tenant; has form https://\<tenant\>.benchling.com
- **benchling_app_client_id**: Client_ID
- **benchling_client_secret**: Client_Secret

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.

## User-Defined Python

Processes input DataFrame for upload to Benchling

### Parameters

- **df** : `pd.DataFrame`
  - Tabular result of user-defined SQL query
- **benchling_context** : `BenchlingContext`
  - Benchling context variable, which stores Benchling connection information
- **ganymede_context** : `GanymedeContext`
  - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or blob storage
