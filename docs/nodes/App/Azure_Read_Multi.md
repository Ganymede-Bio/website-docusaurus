---
sidebar_label: Azure_Read_Multi
title: Azure_Read_Multi
displayed_sidebar: nodeSidebar
---

### Node Description
Read files from Azure Blob Storage into data lake.


### Node Attributes
- **azure_storage_uri**
  - Windows Azure Storage Blob (WASB) URI to set URL for blob service endpoint
- **src_azure_container_name**
  - Azure container name to pull from


### Notes
Prior to usage, the following secrets must be configured in your Ganymede environment:
- **azure_client_id**: App client ID
- **azure_tenant_id**: App tenant ID
- **azure_subscription_id**: Azure subscription ID
- **azure_aad_authority**: App Azure Active Directory (AAD) Authority

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab. If you need
assistance, please don't hesitate to reach out to Ganymede.