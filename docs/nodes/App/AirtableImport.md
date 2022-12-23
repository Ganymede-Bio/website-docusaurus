---
sidebar_label: AirtableImport
title: AirtableImport
displayed_sidebar: nodeSidebar
---

## Operator
Retrieves Airtable table and uploads data to Ganymede data lake.


### Parameters
- **output_table_ganymede_table** : `str`
    - Table in Ganymede data lake to store results of pulling Airtable table
- **airtable_base_id** : `str`
    - Base ID used in Airtable API
- **airtable_id** : `str`
    - ID used in Airtable API


### Notes
A bearer token from Airtable is required to enable Airtable access.