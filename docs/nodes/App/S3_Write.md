---
sidebar_label: S3_Write
title: S3_Write
displayed_sidebar: nodeSidebar
---

### Node Operator
Sync GCS bucket -> S3 bucket


### Node Attributes
- **src_input_or_output_bucket**
  - Specify "input" or "output" for the Ganymede cloud storage bucket to sync from.
  - "input" contains files ingested into a flow; "output" contains processed data.
- **src_object_prefix**
  - Prefix of data lake object to write
- **dest_s3_key**
  - destination S3 key to write to


### Notes
Prior to usage, AWS S3 buckets must be configured to permit Ganymede access with the following:
AWS Service Account Name

Please reach out to Ganymede for configuration assistance.