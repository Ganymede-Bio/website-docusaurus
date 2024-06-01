---
sidebar_label: S3_Read
title: S3_Read
displayed_sidebar: nodeSidebar
---

### Node Description

Sync S3 bucket -\> Ganymede data lake bucket.

### Node Attributes

- **src_s3_bucket**
  - Name of S3 bucket to read files from
- **src_s3_prefix**
  - Prefix pattern to match for files to copy from S3 bucket
- **duplicate_behavior**
  - "ignore" or "save" files that already exist in the Ganymede output bucket
- **required_aging_in_seconds**
  - Minimum age in seconds for files to be considered for copying

### Notes

Prior to usage, the following secrets must be configured in the environment:
- **aws_s3_role_arn**: AWS Service Account Name

This ARN will be used to enable the Airflow connection to the S3 bucket. Configuring this ARN
will require the service account ID associated with the workflow orchestrator.  Please reach
out to the Ganymede team for instructions on configuring access within AWS to enable Ganymede
connectivity.

Once configuration of AWS is complete, add the AWS role ARN secret to your environment by clicking
on your username in the upper-right hand of the Ganymede application, then selecting Environment
Settings and navigating to the Secrets tab.