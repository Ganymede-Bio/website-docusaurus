---
sidebar_label: S3_Event
title: S3_Event
displayed_sidebar: nodeSidebar
---

### Node Description

### Node Attributes

- **input_filter_path**
  - Input [JSONPath](https://jsonpath.com) used for applying filtering logic
- **input_trigger_flow_name**
  - Input Ganymede flow to trigger from captured event

### Notes

Prior to usage, the following secrets must be configured in the environment:
- **aws_s3_role_arn**: AWS Service Account Name

This ARN will be used to enable the Airflow connection to the S3 bucket. Configuring this ARN
will require the service account ID associated with the workflow orchestrator.  Please reach
out to the Ganymede team for instructions on configuring access within AWS to enable Ganymede
connectivity.

Once configured, add the AWS role ARN secret to your environment by clicking on your username in
the upper-right hand of the Ganymede application, then selecting Environment Settings and
navigating to the Secrets tab.

In addition to configuring role ARN, EventBridge must be configured to send events to Ganymede.
If you need assistance on configuring EventBridge, please reach out to the Ganymede team.

## User-Defined Python

Calls AWS to get data for flow to trigger

### Parameters

- **object_name** : `str`
    - File name in S3 bucket
- **bucket_name** : `str`
    - Name of S3 bucket
  - s3_hook: S3Hook
    - AWS S3 hook

### Returns

`FlowInputs`
  Object containing data for kicking off subsequent Flow