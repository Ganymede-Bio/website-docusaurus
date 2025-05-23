---
sidebar_label: Azure_Read
title: Azure_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Read files from Azure Blob Storage into data lake.

### Node Attributes

- **azure_storage_uri**
  - Windows Azure Storage Blob (WASB) URI to set URL for blob service endpoint
- **src_azure_container_name**
  - Azure container name to pull from
- **src_azure_blob_name**
  - Azure blob name to pull
- **dest_blob_name**
  - GCP blob name to store

### Notes

Prior to usage, the following secrets must be configured in your Ganymede environment:

- **azure_client_id**: App client ID
- **azure_tenant_id**: App tenant ID
- **azure_subscription_id**: Azure subscription ID
- **azure_aad_authority**: App Azure Active Directory (AAD) Authority

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.

### Example

An example configuration is shown below:

- **azure_storage_uri**: https://abc123.blob.core.windows.net
- **src_azure_container_name**: abc123
- **src_azure_blob_name**: `"run_results/filename.parquet"`
- **dest_blob_name**: filename.parquet