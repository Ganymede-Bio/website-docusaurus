---
sidebar_label: Agilent_HPLC_Read
title: Agilent_HPLC_Read
displayed_sidebar: nodeSidebar
---

### Node Description
An Airflow operator class that reads data from an Agilent HPLC file and writes the data to the provided output tables in the Ganymede data lake.


### Node Attributes
- **output_table_data**
  - The name of the output table in the Ganymede data lake where the data from the Agilent file will be written.
- **output_table_metadata**
  - The name of the output table in the Ganymede data lake where the metadata from the Agilent file will be written.
- **input_file_agilent**
  - The extension of the Agilent file to be read. This can be .uv, .ms, .ch, or .bin.
## User-Defined Python
Function to convert a datafile object into a dictionary of pandas DataFrame, one for the data
and another for the metadata.


### Parameters
- **datafile** : `object`
    - An object that contains the data, metadata, detector, xlabels and ylabels attributes.
    - - datafile.data: A list of lists, where each sublist represents a row of data values.
    - - datafile.metadata: A dictionary of metadata.
    - - datafile.detector: A string representing the detector used.
    - - datafile.xlabels: A list of labels for the x-axis.
    - - datafile.ylabels: A list of labels for the y-axis.
- **ganymede_context** : `object, optional`


### Returns
`dict`
  - A dictionary with two entries:
  - - "data": A pandas DataFrame, where each row represents a data point.
  - - "metadata": A pandas DataFrame with a single row that represents the metadata.
