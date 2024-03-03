---
sidebar_label: APINode
title: APINode
displayed_sidebar: nodeSidebar
---

### Node Description

Generic API Node for accessing an API by API Key.

## User-Defined Python

Demonstrates access of generic API

### Parameters

- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.  NodeReturn object takes
  2 parameters:
  - tables_to_upload: dict[str, pd.DataFrame]
    keys are table names, values are pandas DataFrames to upload
  - files_to_upload: dict[str, bytes]
    keys are file names, values are file data to upload
