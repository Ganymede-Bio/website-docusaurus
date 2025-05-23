---
sidebar_label: Webhook_Event
title: Webhook_Event
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Captures webhook event data and writes to Ganymede data lake.

### Node Attributes

- **input_filter_path**
  - Input [JSONPath](https://jsonpath.com) used for applying filtering logic

### Notes

Webhook secrets will need to be configured prior to usage; please reach out to [Ganymede support](../../app/Support) to configure secrets.

## User-Defined Python

Get raw event from webhook and store in table or file for further processing

### Parameters

- **event_data_json** : `dict`
  - raw event payload from webhook

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.
