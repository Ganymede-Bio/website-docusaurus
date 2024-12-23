---
sidebar_label: Azure_Query
title: Azure_Query
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Query Azure SQL database, process data in Python, and upload results to Ganymede data lake

### Node Attributes

- **src_azure_host_name**
  - Host name for Azure database to pull from
- **src_azure_database**
  - Azure database to pull from
- **output_table_analysis**
  - Table displayed on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) in Ganymede UI.

### Notes

Prior to usage, the following secrets must be configured in your Ganymede environment:
- **azure_client_id**: App client ID
- **azure_object_id**: App object ID
- **azure_tenant_id**: App tenant ID
- **azure_subscription_id**: Azure subscription ID
- **azure_aad_authority**: App Azure Active Directory (AAD) Authority
- **azure_sql_odbc_driver**: Azure SQL ODBC Driver to reference

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.

On the Ganymede end - make sure that the relevant MSSQL ODBC Driver is made available for the
workflow execution environment.
artifact_registry should be populated in secrets with the web address hosting the container

In the execute function, returning NodeReturn(tables_to_upload=\{'analysis': df\}) would render the DataFrame df in the Flow Editor if Table Head visualization is enabled.

### Example

An example configuration is shown below:

- **src_azure_host_name**: sql-abc123.database.windows.net
- **src_azure_database**: az_db
- **output_table_analysis**: output_tbl

## User-Defined Python

Process tabular data from user-defined SQL query, writing results back to data lake

### Parameters

- **df_sql_result** : `pd.DataFrame | list[pd.DataFrame]`
    - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage
