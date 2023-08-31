---
sidebar_label: S3_Event
title: S3_Event
displayed_sidebar: nodeSidebar
---

### Node Description

### Node Attributes
- **input_filter_path**
  - Input JSONPath used for applying filtering logic
- **input_trigger_flow_name**
  - Input Ganymede flow to trigger from captured event


### Notes
Prior to usage, the following secrets must be configured in the environment:
- **aws_s3_role_arn**: AWS Service Account Name

Secrets can be configured by clicking on the gear icon in the upper-right hand of the Ganymede
application, then selecting Settings and navigating to the Settings tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.
## User-Defined Python
Calls AWS to get data for flow to trigger


### Parameters
- **object_name** : `str`
    - File name in S3 bucket
- **bucket_name** : `str`
    - Name of S3 bucket
  - s3_hook
    - AWS S3 hook


### Returns
`FlowInputs`
  Object containing data for kicking off subsequent Flow