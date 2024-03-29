---
sidebar_label: S3_Write
title: S3_Write
displayed_sidebar: nodeSidebar
---

### Node Description

Sync GCS bucket -\> S3 bucket

### Node Attributes

- **src_input_or_output_bucket** : `str`
  - "input" or "output" for the Ganymede cloud storage bucket to sync from
- **src_object_prefix** : `str`
  - Prefix of data lake object(s) to write
- **src_all_or_current_run** : `str`
  - "all" or "current" - whether to sync all files or the files in the input or output
  - bucket from the current run
- **dest_node_name_in_path** : `bool`
  - "true" or "false" - whether to prepend the flow name and node name for specified file in
  - the S3 bucket path
- **dest_replace_or_append** : `str`
  - "replace" or "append" - whether to replace existing files or only add new files to the
  - destination S3 bucket when a file in the S3 bucket has the same name as the source file
  - being synced
- **dest_s3_key** : `str`
  - Destination S3 key to write to.  If this string ends with a '/', it will be treated as a
  - prefix (i.e. - S3 folder), and the file will be written with the same name as the source
  - file

### Notes

Prior to usage, the following secrets must be configured in the environment:
- **aws_s3_role_arn**: AWS Service Account Name

This ARN will be used to enable the Airflow connection to the S3 bucket. Configuring this ARN
will require the service account ID associated with the workflow orchestrator.  Please reach
out to the Ganymede team for instructions on configuring access within AWS to enable Ganymede
connectivity.

Once configured, add the AWS role ARN secret to your environment by clicking on your username in
the upper-right hand of the Ganymede application, then selecting Environment Settings and
navigating to the Secrets tab.