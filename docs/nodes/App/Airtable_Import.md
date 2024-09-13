---
sidebar_label: Airtable_Import
title: Airtable_Import
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Retrieves Airtable table and uploads data to Ganymede data lake.

### Node Attributes

- **airtable_base_id**
  - Base ID used in Airtable API
- **airtable_id**
  - ID used in Airtable API
- **output_table_ganymede_table**
  - Table to display on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) referencing tabular data output from the Node in the Flow Editor.

### Notes

Prior to usage, the following secrets must be configured in your Ganymede environment:

- **airtable_api_key**: API key from Airtable

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.

In the execute function, returning NodeReturn(tables_to_upload=\{'ganymede_table': df\}) would render the DataFrame df in the Flow Editor if Table Head visualization is enabled.
