---
sidebar_label: Smartsheet_Read
title: Smartsheet_Read
displayed_sidebar: nodeSidebar
---

### Node Operator
Reads Smartsheet sheet into Ganymede

Retrieves sheet from Smartsheet, which is processed by user-defined function.

[Documentation for the Smartsheet API](https://smartsheet.redoc.ly/)


### Notes
Prior to usage, the following secrets must be configured in your Ganymede environment:
- **smartsheet_access_token**: Smartsheet Access Token

Secrets can be configured by clicking on the gear icon in the upper-right hand of the Ganymede
application, then selecting Settings and navigating to the Settings tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.
## User-Defined Python
Process Smartsheet table


### Parameters
- **smartsheet_csv** : `StringIO`
    - File-like CSV object containing contents of Smartsheet sheet


### Notes
See [Smartsheet API documentation](https://smartsheet.redoc.ly/) for more details on API usage.