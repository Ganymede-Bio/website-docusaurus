---
sidebar_label: Azure_Write
title: Azure_Write
displayed_sidebar: nodeSidebar
---

Write files from data lake to Azure Blob Storage.


### Parameters
- **src_object_name** : `str`
  - Data lake object to write
- **dest_azure_container_name** : `str`
  - Destination Azure container to write to
- **dest_azure_blob_name** : `str`
  - Destination Azure blob name to write to


### Notes
Prior to usage, Azure Blob Storage must be configured to permit Ganymede access.  This requires
configuring Ganymede with the following IDs from Azure:
- App client ID
- App object ID
- App tenant ID
- Azure subscription ID
- App Azure Active Directory (AAD) Authority
- Windows Azure Storage Blob (WASB) URI, which consists of
  - Storage URL
  - Storage Container