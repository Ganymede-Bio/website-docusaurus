---
sidebar_label: Airtable_Import
title: Airtable_Import
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Ingest data from Airtable to Ganymede.

### Notes

Prior to usage, create an [Airtable Personal Access Token](https://airtable.com/developers/web/guides/personal-access-tokens) and configure the following secrets in your Ganymede environment:
- **airtable_pat**: PAT token from Airtable

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.

## User-Defined Python

Ingest data from Airtable to Ganymede.

### Parameters

- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage
