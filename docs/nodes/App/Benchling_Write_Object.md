---
sidebar_label: Benchling_Write_Object
title: Benchling_Write_Object
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Writes data stored in Ganymede cloud storage to Benchling custom entity, as specified by input
object names and SQL query

Passes Benchling ID to user-defined function for retrieving Benchling API data.

### Node Attributes

- **src_input_or_output_bucket**
  - Specify "input" or "output" for the Ganymede cloud storage bucket to read from.
  - "input" contains files ingested into a flow; "output" contains processed data.
- **input_object_names**
  - Semicolon-delimited list of objects to retrieve to the execute function

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

## User-Defined Python

Uploads data to Benchling

If new custom entities are created, returns DataFrame associated with custom entity

### Parameters

- **data** : `dict[str, bytes]`
    - Data to retrieve from Ganymede cloud storage
- **df_sql_result** : `pd.DataFrame | list[pd.DataFrame]`
    - Tabular results of user-defined SQL query
- **benchling_context** : `BenchlingContext`
    - Benchling context variable, which stores Benchling connection information
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.