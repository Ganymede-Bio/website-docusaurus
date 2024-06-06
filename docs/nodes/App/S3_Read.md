---
sidebar_label: S3_Read
title: S3_Read
displayed_sidebar: nodeSidebar
---

### Node Description


image_name = "s3_read"

## User-Defined Python

Specify list of S3 keys to upload to GCS

### Parameters

  - df_s3_objects: pd.DataFrame
    - Dataframe containing s3_object key metadata like Key, ETag, LastModified, Size, StorageClass,
    - and Bucket
  - client: botocore.client.S3
    - Boto3 client to interact with S3.  This can be used to retrieve the body of objects from S3.
  - ganymede_context: GanymedeContext
    - Ganymede context object

### Returns

`dict[str, str]`
  Dictionary specifying files to upload to GCS.  The keys are the keys in S3 and the values
  are the file names to use in Ganymede

### Examples

Retrieve body of S3 object of first record in df_s3_objects (assuming boto3 client is passed in as client)

>>> obj = df_s3_objects.iloc[0].to_dict()
>>> file_contents = client.get_object(Key=obj["Key"], Bucket=obj["Bucket"])['Body'].read()