---
sidebar_label: S3_Write
title: S3_Write
displayed_sidebar: nodeSidebar
---

### Node Description
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
Prior to usage, the following secrets must be configured in the environment:
- **aws_s3_role_arn**: AWS Service Account Name

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.