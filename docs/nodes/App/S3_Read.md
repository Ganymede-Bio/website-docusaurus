---
sidebar_label: S3_Read
title: S3_Read
displayed_sidebar: nodeSidebar
---

### Node Description

Sync S3 bucket -> Ganymede data lake bucket

### Node Attributes

- **src_s3_bucket**
  - Name of S3 bucket to read files from
- **src_s3_prefix**
  - Prefix pattern to match for files to copy from S3 bucket

### Notes

Prior to usage, the following secrets must be configured in the environment:
- **aws_s3_role_arn**: AWS Service Account Name

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.