---
sidebar_label: AirtableExport
title: AirtableExport
displayed_sidebar: nodeSidebar
---

Reads 1 table from Ganymede data lake and uploads to Airtable.

### Parameters
- **input_table_bq** : `str`
  - Table from data lake to read in
- **airtable_base_id** : `str`
  - Base ID used in Airtable API
- **airtable_id** : `str`
  - ID used in Airtable API

### Notes
A bearer token from Airtable is required to enable Airtable access.