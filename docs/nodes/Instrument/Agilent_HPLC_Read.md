---
sidebar_label: Agilent_HPLC_Read
title: Agilent_HPLC_Read
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

An Airflow operator class that reads data from an Agilent HPLC file and writes the data to the provided output tables in the Ganymede data lake.

### Node Attributes

- **output_table_data**
  - The name of the output table in the Ganymede data lake where the data from the Agilent file will be written.
- **output_table_metadata**
  - The name of the output table in the Ganymede data lake where the metadata from the Agilent file will be written.
- **agilent**
  - The extension of the Agilent file to be read. This can be .uv, .ms, .ch, or .bin.  For example, filling in this attribute with "*.uv" will only allow files with the extension .uv to be uploaded; this field can be left blank if no filtering is desired.

## User-Defined Python

Function to convert a datafile object into a dictionary of pandas DataFrame, one for the data
and another for the metadata.

### Parameters

- **datafile** : `object`
  - An object that contains the data, metadata, detector, xlabels and ylabels attributes.
    - datafile.data: A list of lists, where each sublist represents a row of data values.
    - datafile.metadata: A dictionary of metadata.
    - datafile.detector: A string representing the detector used.
    - datafile.xlabels: A list of labels for the x-axis.
    - datafile.ylabels: A list of labels for the y-axis.
- **ganymede_context** : `GanymedeContext`
  - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage