---
sidebar_label: S3WriteOperator
title: S3WriteOperator
displayed_sidebar: functionSidebar
---

## S3WriteOperator

Sync GCS bucket -> S3 bucket

Prior to usage, AWS S3 buckets must be configured to permit Ganymede access.

**Arguments**:

- `src_object_name`: Data lake object to write
- `dest_s3_key`: destination S3 key to write to
