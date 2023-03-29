---
sidebar_label: Azure_Query
title: Azure_Query
displayed_sidebar: nodeSidebar
---

### Node Operator
Query Azure SQL database, process data in Python, and upload results to Ganymede data lake


### Node Attributes
- **location**
  - GCP region for k8s cluster
- **cluster_name**
  - Name of k8s cluster to launch
- **src_azure_host_name**
  - Host name for Azure database to pull from
- **src_azure_database**
  - Azure database to pull from
- **output_table_analysis**
  - Table in Ganymede data lake to write to


### Notes
Prior to usage, the following secrets must be configured in your Ganymede environment:
- **azure_client_id**: App client ID
- **azure_tenant_id**: App tenant ID
- **azure_subscription_id**: Azure subscription ID
- **azure_aad_authority**: App Azure Active Directory (AAD) Authority

Windows Azure Storage Blob (WASB) URI, which consists of
- **azure_storage_uri**: Storage URL

Secrets can be configured by clicking on the gear icon in the upper-right hand of the Ganymede
application, then selecting Settings and navigating to the Settings tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.
## User-Defined Python
Process tabular data from user-defined SQL query, writing results back to data lake


### Parameters
- **df_sql_result** : `Union[pd.DataFrame, List[pd.DataFrame]]`
    - Table(s) or list of tables retrieved from user-defined SQL query
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Union[pd.DataFrame, Dict[str, pd.DataFrame]]`
  - Table(s) to store in data lake


### Notes
If a DataFrame is returned, the table name corresponds to the **results** parameter of the node.

If a dict is returned, the keys of the dict are used as table names for the corresponding
DataFrames to store.  The table with **results** as its key is displayed on the Flow Editor.