---
sidebar_label: S3_Read
title: S3_Read
displayed_sidebar: nodeSidebar
---

### Node Operator
Sync S3 bucket -> Ganymede data lake bucket


### Node Attributes
- **src_s3_bucket**
  - Name of S3 bucket to read files from
- **src_s3_prefix**
  - Prefix pattern to match for files to copy from S3 bucket
- **dest_input_or_output_bucket**
  - Specify "input" or "output" for the Ganymede cloud storage bucket to sync to.
  - "input" contains files ingested into a flow; "output" contains processed data.


### Notes
Prior to usage, AWS S3 buckets must be configured to permit Ganymede access with the following:
AWS Service Account Name

Please reach out to Ganymede for configuration assistance.