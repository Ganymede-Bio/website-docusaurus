---
sidebar_label: S3_Read
title: S3_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Sync S3 bucket -\> Ganymede data lake bucket

### Node Attributes

- **src_s3_bucket**
  - Name of S3 bucket to read files from
- **src_s3_prefix**
  - Prefix pattern to match for files to copy from S3 bucket.  If you are syncing a folder, make sure to end the prefix with a '/'
- **duplicate_behavior**
  - "ignore" or "save" files that already exist in the Ganymede output bucket
- **required_aging_in_seconds**
  - Minimum age in seconds for files to be considered for copying.  This is useful for ensuring that files are not copied before they are fully written.
- **max_aging_in_seconds**
  - Maximum age in seconds for files to be considered for copying.  This is useful for only syncing recently modified files.

### Notes

Prior to usage, the following secrets must be configured in the environment:
- **aws_s3_role_arn**: AWS Service Account Name

This ARN will be used to enable the Airflow connection to the S3 bucket. Configuring this ARN
will require the service account ID associated with the workflow orchestrator.  Please reach
out to the Ganymede team for instructions on configuring access within AWS to enable Ganymede
connectivity.

Once configuration of AWS is complete, add the AWS role ARN secret to your environment by clicking
on your username in the upper-right hand of the Ganymede application, then selecting Environment
Settings and navigating to the Secrets tab.

### Example

An example configuration for an S3 Read Node in the Flow Editor so that only files with a last modified date within the past 24 hours are synced:

- **src_s3_bucket**: environment-sandbox-s3-bucket
- **src_s3_prefix**: test_
- **duplicate_behavior**: save
- **required_aging_in_seconds**: 1
- **max_aging_in_seconds**: 86400

## User-Defined Python

Specify list of S3 keys to upload to GCS

### Parameters

- **df_s3_objects**: `pd.DataFrame`
  - Dataframe containing s3_object key metadata like Key, ETag, LastModified, Size, StorageClass,
  - and Bucket
- **client**: `botocore.client.S3`
  - Boto3 client to interact with S3.  This can be used to retrieve the body of objects from S3.
- **ganymede_context**: `GanymedeContext`
  - Ganymede context object

### Returns

`dict[str, str] | NodeReturn`

If dict, files to upload to GCS.  The keys are the keys in S3 and the values
are the file names to use in Ganymede.

If NodeReturn, object containing data to store in data lake and/or file storage.
NodeReturn object takes 2 parameters:

- tables_to_upload: dict[str, pd.DataFrame]
    keys are table names, values are pandas DataFrames to upload
- files_to_upload: dict[str, bytes]
    keys are file names, values are file data to upload

### Examples

Retrieve body of S3 object of first record in df_s3_objects (assuming boto3 client is passed in as client)

```bash
>>> obj = df_s3_objects.iloc[0].to_dict()
>>> file_contents = client.get_object(Key=obj["Key"], Bucket=obj["Bucket"])['Body'].read()
```