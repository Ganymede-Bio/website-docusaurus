---
sidebar_label: Azure_Write
title: Azure_Write
displayed_sidebar: nodeSidebar
---

### Node Operator
Write files from data lake to Azure Blob Storage.


### Node Attributes
- **src_object_name**
  - Data lake object to write
- **dest_azure_container_name**
  - Destination Azure container to write to
- **dest_azure_blob_name**
  - Destination Azure blob name to write to


### Notes
Prior to usage, Azure Blob Storage must be configured to permit Ganymede access.  This requires
configuring Ganymede with the following IDs from Azure:
App client ID
App object ID
App tenant ID
Azure subscription ID
App Azure Active Directory (AAD) Authority
Windows Azure Storage Blob (WASB) URI, which consists of
Storage URL
Storage Container

Please reach out to Ganymede for configuration assistance.