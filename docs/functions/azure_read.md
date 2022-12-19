---
sidebar_label: AzureReadBlob
title: AzureReadBlob
displayed_sidebar: functionSidebar
---

## AzureReadBlob

Read files from Azure Blob Storage into data lake

Prior to usage, Azure Blob Storage must be configured to permit Ganymede access.

**Arguments**:

- `src_azure_container_name`: Azure container name to pull from
- `src_azure_blob_name`: Azure blob name to pull
- `dest_blob_name`: GCP blob name to stores

