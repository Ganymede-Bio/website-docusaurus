---
sidebar_label: FCS_Extract_Load
title: FCS_Extract_Load
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Function for reading Flow Cytometry Standard (FCS) files into Ganymede data lake

The fcsparser python package is used to parse FCS files into metadata and data

### Node Attributes

- **input_file_fcs**
  - file extension of FCS file
- **output_table_data**
  - table to write core FCS data to
- **output_table_metadata_file**
  - table to write FCS file metadata to (position of different file elements)
- **output_table_metadata_fcs**
  - table to write flow cytometer system metadata to
  - (e.g. - # of events detected, flow cytometer type)
- **output_table_metadata_channels**
  - table containing flow cytometer channel metadata
  - (e.g. - fluoresence marker, amplifier gain, FSC vs. SSC)

### Notes

*data* contains a record for each flow cytometer detection event
(generally passage of single cell past detector); for each event, a value is recorded for
each channel

*metadata* comprises of the following components:

- **header**: contains FCS version number and bytes corresponding to where binary positions of text, data, and analysis in FCS file.
FCS format: FCS version number
text start: byte offset to the beginning of the TEXT segment
text end: byte offset to the last byte of the TEXT segment
data start: byte offset to the beginning of DATA segment
data end: byte offset to the last byte of the DATA segment
analysis start: byte offset to the beginning of the ANALYSIS segment
analysis end: byte offset to the last byte of the ANALYSIS segment

- **sys_metadata**: contains system metadata
- **BEGINANALYSIS**: byte offset to the beginning of the TEXT segment
- **BEGINDATA**: byte offset to the beginning of the DATA segment
- **BEGINSTEXT**: byte offset to the beginning of the supplemental TEXT segment
- **BTIM**: time at beginning of data acquisition
- **BYTEORD**: byte order for the data acquisition computer
- **CELLS**: description of objects measured
- **CYT**: type of flow cytometer
- **CYTSN**: flow cytometer serial number
- **DATATYPE**: type of data in DATA segment (ASCII, integer, floating point)
- **DATE**: date of data acquisition
- **ETIM**: time at end of data acquisition
- **FIL**: name of the datafile containing the dataset
- **MODE**: data mode (list mode or histogram mode)
- **NEXTDATA**: byte offset to the next dataset in the file
- **OP**: name of the flow cytometry operator
- **PAR**: number of parameters in an event
- **SRC**: source of specimen (e.g. - patient name, cell types)
- **SYS**: type of computer and its operating system
- **TOT**: Number of events in the dataset

- **channels**: contains TEXT segment metadata - information for each flow cytometer channel, which are referred to as "parameter" in FCS parlance
- **PnN**: name for parameter n
- **PnR**: range of values for parameter n
- **PnS**: short name for parameter n
- **PnE**: amplification type for parameter n
- **PnG**: amplifier gain used for acquisition of parameter n
- **PnB**: number of bits reserved for parameter n

- **channel_names**: names for each channel

### Example

The Node configuration below would capture FCS files. In the execute function, returning NodeReturn(tables_to_upload=\{'data': df_data, 'metadata_file': df_metadata_file, 'metadata_fcs': df_metadata_fcs, 'metadata_channels': df_metadata_channels\}) would render the 4 DataFrames returned in the Flow Editor if Table Head visualization is enabled.

- **fcs**: *.fcs
- **data**: fcs_data
- **metadata_file**: fcs_file_metadata
- **metadata_fcs**: fcs_metadata
- **metadata_channels**: fcs_channel_metadata

## User-Defined Python

Process FCS data/metadata file

### Parameters

- **metadata** : `dict[str, pd.DataFrame] | dict[dict[str, pd.DataFrame]]`
    - Metadata from FCS file
- **data** : `pd.DataFrame`

- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage
