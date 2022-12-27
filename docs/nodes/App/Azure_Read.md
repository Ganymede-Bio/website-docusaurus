---
sidebar_label: Azure_Read
title: Azure_Read
displayed_sidebar: nodeSidebar
---

### Node Operator
Read files from Azure Blob Storage into data lake.


### Node Attributes
- **src_azure_container_name**
  - Azure container name to pull from
- **src_azure_blob_name**
  - Azure blob name to pull
- **dest_blob_name**
  - GCP blob name to store


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