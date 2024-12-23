---
sidebar_label: Webhook_Event
title: Webhook_Event
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

### Node Attributes

- **input_filter_path**
  - Input [JSONPath](https://jsonpath.com) used for applying filtering logic

## User-Defined Python

Get raw event from webhook and store in table or file for further processing

### Parameters

- **event_data_json** : `dict`
    - raw event payload from webhook

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage.
