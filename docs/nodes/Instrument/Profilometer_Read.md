---
sidebar_label: Profilometer_Read
title: Profilometer_Read
displayed_sidebar: nodeSidebar
---

### Node Description
Parse profilometer data from Mx Software and upload contents to data lake.


### Node Attributes
- **input_file_datx**
  - file extension of input data file
- **output_table_image**
  - location to write processed data file to
## User-Defined Python
Processes h5data into bytes object for saving in cloud storage


### Parameters
- **h5data** : `Dict`
    - HDF5 file contents structured as a Python dict
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`bytes`
  - Binary object for storing in cloud storage