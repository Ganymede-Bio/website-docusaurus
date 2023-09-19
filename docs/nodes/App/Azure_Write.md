---
sidebar_label: Azure_Write
title: Azure_Write
displayed_sidebar: nodeSidebar
---

### Node Description
Write files from data lake to Azure Blob Storage.


### Node Attributes
- **azure_storage_uri**
  - Windows Azure Storage Blob (WASB) URI to set URL for blob service endpoint
- **src_object_name**
  - Data lake object to write
- **dest_azure_container_name**
  - Destination Azure container to write to
- **dest_azure_blob_name**
  - Destination Azure blob name to write to


### Notes
Prior to usage, the following secrets must be configured in your Ganymede environment:
- **azure_client_id**: App client ID
- **azure_tenant_id**: App tenant ID
- **azure_subscription_id**: Azure subscription ID
- **azure_aad_authority**: App Azure Active Directory (AAD) Authority

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.