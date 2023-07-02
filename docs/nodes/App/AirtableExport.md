---
sidebar_label: AirtableExport
title: AirtableExport
displayed_sidebar: nodeSidebar
---

### Node Description
Reads table(s) from Ganymede data lake and uploads to Airtable.


### Node Attributes
- **input_table_bq**
  - Table from data lake to read in
- **airtable_base_id**
  - Base ID used in Airtable API
- **airtable_id**
  - ID used in Airtable API


### Notes
Prior to usage, the following secrets must be configured in your Ganymede environment:
- **airtable_api_key**: API key from Airtable

Secrets can be configured by clicking on the gear icon in the upper-right hand of the Ganymede
application, then selecting Settings and navigating to the Settings tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.
## User-Defined Python
Process tabular data from user-defined SQL query, writing results to Airtable


### Parameters
- **df_sql_result** : `Union[pd.DataFrame, List[pd.DataFrame]]`
    - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Union[pd.DataFrame, Dict[str, pd.DataFrame]]`
  - Table(s) to store in data lake

