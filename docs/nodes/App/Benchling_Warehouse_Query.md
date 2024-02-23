---
sidebar_label: Benchling_Warehouse_Query
title: Benchling_Warehouse_Query
displayed_sidebar: nodeSidebar
---

### Node Description

Query Benchling Warehouse Postgres database, process data in Python, and upload results to Ganymede data lake

### Notes

Prior to usage, the following secrets must be configured in your Ganymede environment:
- **benchling_postgres_host**: Host for Benchling warehouse database.  Of the form: postgres-warehouse.\<tenant\>.benchling.com
- **benchling_postgres_username**: Username for Benchling warehouse database.  Note that this is not the same as your Benchling username.
- **benchling_postgres_password**: Password for Benchling warehouse database.  Note that this is not the same as your Benchling password.

To generate Benchling warehouse credentials, click on your icon in the lower-right hand corner of
Benchling, then select "Settings".  On the right-hand side of the page, click on the "Create Credentials"
button in the Warehouse Credentials section of the page.  For more information, check out the detailed instructions in
[Benchling documentation](https://help.benchling.com/hc/en-us/articles/9714802961421-Access-your-data-warehouse).

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.

## User-Defined Python

Process tabular data from user-defined SQL query, writing results back to data lake

### Parameters

- **df_sql_result** : `Union[pd.DataFrame, List[pd.DataFrame]]`
    - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage