---
sidebar_label: Coda_Write
title: Coda_Write
displayed_sidebar: nodeSidebar
---

## Operator
Writes a table or set of tables to a Coda.io page.

Retrieves one or more tables from Ganymede data lake, which are processed by user-defined
function.  The tables returned by the user-defined function are uploaded to
the specified Coda.io page.


### Parameters
- **output_page_url** : `str`
    - URL of the page where table results will be stored.
## User-Defined Python
Example demonstrating submission of user-defined SQL query into Coda


### Parameters
- **df_sql_result** : `Union[pd.DataFrame, List[pd.DataFrame]]`
    - Table(s) to retrieve from data lake
- **output_page_url** : `str`
    - URL to access
- **coda_api_key** : `str`
    - Coda API key
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Notes
See [Coda API](https://coda.io/developers/apis/) for more details on API usage.