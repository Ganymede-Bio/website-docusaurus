---
sidebar_label: S3_Write
title: S3_Write
displayed_sidebar: nodeSidebar
---

## Operator
Sync GCS bucket -> S3 bucket


### Parameters
- **src_object_name** : `str`
    - Data lake object to write
- **dest_s3_key** : `str`
    - destination S3 key to write to


### Notes
Prior to usage, AWS S3 buckets must be configured to permit Ganymede access with the following:
AWS Service Account Name