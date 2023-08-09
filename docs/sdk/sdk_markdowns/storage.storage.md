---
sidebar_label: storage.storage
title: storage.storage
displayed_sidebar: SDKSidebar
--- 


# storage.storage



##  `function` get_bucket_name
Gets bucket name

###  Parameters
- **bucket_source** : `str`
    - Either 'input' or 'output' bucket
- **project** : `str`
    - Ganymede project name

###  Returns
- `str`
    - Bucket name to access
- `Raises`
- `ValueError`
    - Invalid bucket source; has to be either 'input' or 'output'


##  `function` get_data
Retrieves data from cloud storage

###  Parameters
- **filename** : `str`
    - File to retrieve
- **bucket** : `str`
    - Bucket to retrieve file from; either 'input' or 'output'

###  Returns
- `bytes`
    - file contents


##  `function` upload_data
Uploads data to cloud storage

###  Parameters
- **src_filename** : `str`
    - Source filename
- **dest_filename** : `str`
    - Destination filename