---
sidebar_label: S3ReadOperator
title: S3ReadOperator
displayed_sidebar: nodeSidebar
---

Sync S3 Bucket -> data lake bucket

Prior to usage, AWS S3 buckets must be configured to permit Ganymede access.

**Arguments**:

- `input_s3_bucket`: Name of S3 bucket to read files from
- `input_prefix`: Prefix pattern to match for files to copy from S3 bucket

