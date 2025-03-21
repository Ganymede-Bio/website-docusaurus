---
sidebar_label: Coda_Read
title: Coda_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Reads a table or set of tables from a Coda.io page.

Retrieves one or more tables from the specified Coda.io page, which are processed by
user-defined function.  The tables returned by the user-defined function are written to the
Ganymede data lake.

### Notes

Prior to usage, the following secrets must be configured in your Ganymede environment:
- **coda_api_key**: Coda API Key

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.

## User-Defined Python

Submits tables and files to Coda.io.  A document is generated from a template, and tables
are populated, with the doc_id from the generated document returned.

### Parameters

- **df_sql_result** : `pd.DataFrame | list[pd.DataFrame]`
  - Table(s) to retrieve from data lake
- **ganymede_context** : `GanymedeContext`
  - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.

### Notes

See [Coda API](https://coda.io/developers/apis/) for more details on API usage.
