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
Prior to usage, the following secrets must be configured in the environment:
- **aws_s3_role_arn**: AWS Service Account Name

Secrets can be configured by clicking on the gear icon in the upper-right hand of the Ganymede
application, then selecting Settings and navigating to the Settings tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.