---
sidebar_label: AirtableImport
title: AirtableImport
displayed_sidebar: nodeSidebar
---

### Node Description
Retrieves Airtable table and uploads data to Ganymede data lake.


### Node Attributes
- **airtable_base_id**
  - Base ID used in Airtable API
- **airtable_id**
  - ID used in Airtable API
- **output_table_ganymede_table**
  - Table in Ganymede data lake to store results of pulling Airtable table


### Notes
Prior to usage, the following secrets must be configured in your Ganymede environment:
- **airtable_api_key**: API key from Airtable

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.