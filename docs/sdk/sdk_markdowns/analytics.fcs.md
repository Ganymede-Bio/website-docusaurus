---
sidebar_label: analytics.fcs
title: analytics.fcs
displayed_sidebar: SDKSidebar
--- 


# analytics.fcs



##  `function` FCS.parse_metadata
Parses FCS file metadata

###  Parameters
- **metadata** : `dict`
    - Metadata contained within FCS file, as parsed by the fcsparser python package

###  Returns
- `dict`
    - FCS metadata

###  Notes
- FCS metadata is returned as a dictionary with the following components
- **header** : `dict`
    - describes FCS version and byte offsets of TEXT, DATA, and ANALYSIS segments in FCS file
- **system_metadata** : `dict`
    - contains system metadata as specified by the FCS file format
- **channels** : `pd.DataFrame`
    - describes characteristics for each channel
- **channel_names** : `Tuple`
    - contains flow cytometer channel names


##  `function` parse_fcs
Parse an FCS file and return a dict of metadata and numpy arrays of the data.

###  Parameters
- **fcs_bytes** : `bytes`
    - Contents of an FCS file

###  Returns
- `dict`
    - A dict containing the metadata and numpy arrays of the data.