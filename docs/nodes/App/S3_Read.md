---
sidebar_label: S3_Read
title: S3_Read
displayed_sidebar: nodeSidebar
---

### Node Operator
Sync S3 Bucket -> Ganymede data lake bucket


### Node Attributes
- **input_s3_bucket**
  - Name of S3 bucket to read files from
- **input_prefix**
  - Prefix pattern to match for files to copy from S3 bucket


### Notes
Prior to usage, AWS S3 buckets must be configured to permit Ganymede access with the following:
AWS Service Account Name