---
sidebar_label: Coda_Write
title: Coda_Write
displayed_sidebar: nodeSidebar
---

### Node Description
Writes a table or set of tables to a Coda.io page.

Retrieves one or more tables from Ganymede data lake, which are processed by user-defined
function.  The tables returned by the user-defined function are uploaded to
the specified Coda.io page.


### Node Attributes
- **output_page_url**
  - URL of the page where table results will be stored.


### Notes
Prior to usage, the following secrets must be configured in your Ganymede environment:
- **coda_api_key**: Coda API Key

Secrets can be configured by clicking on the gear icon in the upper-right hand of the Ganymede
application, then selecting Settings and navigating to the Settings tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.
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


### Returns
`List[str]`
  - List of Coda table IDs written to


### Notes
See [Coda API](https://coda.io/developers/apis/) for more details on API usage.