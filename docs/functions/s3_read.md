---
sidebar_label: S3ReadOperator
title: S3ReadOperator
displayed_sidebar: functionSidebar
---

## S3ReadOperator

Copy files from S3 in to Ganymede

This Function reads files from an S3 storage bucket for processing in Ganymede.

Usage Requirements: AWS S3 buckets must be configured to permit Ganymede access.

Parameters:

**Arguments**:

- `input_s3_bucket`: Name of S3 bucket to read files from
- `input_prefix`: Prefix pattern to match for files to copy from S3 bucket

