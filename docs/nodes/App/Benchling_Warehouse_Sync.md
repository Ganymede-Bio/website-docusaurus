---
sidebar_label: Benchling_Warehouse_Sync
title: Benchling_Warehouse_Sync
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Sync Benchling Warehouse Postgres database to Ganymede data lake, creating table if it does not
exist or appending new records

- **if_exists_replace_or_append** : `str`
If the table already exists, whether to replace the table or append new records.  Options
are ["replace", "append"].  Default is "replace".

### Notes

Prior to usage, the following secrets must be configured in your Ganymede environment:
- **benchling_postgres_host**: Host for Benchling warehouse database.  Of the form:
postgres-warehouse.\<tenant\>.benchling.com
- **benchling_postgres_username**: Username for Benchling warehouse database.  Note that this is
not the same as your Benchling username.
- **benchling_postgres_password**: Password for Benchling warehouse database.  Note that this is
not the same as your Benchling password.

To generate Benchling warehouse credentials, click on your icon in the lower-right hand corner
of Benchling, then select "Settings".  On the right-hand side of the page, click on the "Create
Credentials" button in the Warehouse Credentials section of the page.  For more information,
check out the detailed instructions in [Benchling documentation](https://help.benchling.com/hc/en-us/articles/9714802961421-Access-your-data-warehouse).

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.

## User-Defined Python

This node helps to sync tables from Benchling warehouse to Ganymede datalake. A dataframe is
constructed with the following columns

- schema: str
The schema in benchling warehouse such as schema.table_name
- from_benchling_table: list
The list of tables in benchling warehouse to sync to Ganymede
- to_ganymede_table: list
The list of tables in Ganymede to sync the benchling warehouse tables to

Which specifies which tables should be queried from Benchling and where they will be uploaded to in
Ganymede.

### Parameters

- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`pd.DataFrame`
  DataFrame containing schema, from_benchling_table, and to_ganymede_table