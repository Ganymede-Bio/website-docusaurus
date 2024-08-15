---
sidebar_label: Transform_SQL
title: Transform_SQL
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Runs SQL query on data lake

### Node Attributes

- **output_table_sql_result**
  - Table name where the query results will be stored.  This table is also displayed on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) in Ganymede UI.

### Notes

In the execute function, returning NodeReturn(tables_to_upload=\{'sql_result': df\}) would render the DataFrame df in the Flow Editor if Table Head visualization is enabled.