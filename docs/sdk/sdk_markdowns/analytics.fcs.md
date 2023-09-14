---
sidebar_label: analytics.fcs
title: analytics.fcs
displayed_sidebar: SDKSidebar
--- 


# analytics.fcs



##  `class` FCS
A class to represent an FCS (Flow Cytometry Standard) file.


###  Attributes

- **data** : `pd.DataFrame`
    - The data contained in the FCS file.  
- **metadata_file** : `pd.DataFrame`
    - The metadata contained in the FCS file header.  
- **metadata_fcs** : `pd.DataFrame`
    - The system metadata contained in the FCS file.  
- **metadata_channels** : `pd.DataFrame`
    - The characteristics for each channel in the FCS file.  
- **metadata_channel_names** : `Tuple`
    - The names of the flow cytometer channels.  


###  Methods

- **parse_metadata(metadata** : `dict) - dict`
    - Parses FCS file metadata.  


##  `function` FCS.parse_metadata
Parses FCS file metadata


###  Parameters

- **metadata** : `dict`
    - Metadata contained within FCS file, as parsed by the fcsparser python package  


###  Returns

- `dict`
    - FCS metadata  


###  Notes

FCS metadata is returned as a dictionary with the following components

header: dict
    describes FCS version and byte offsets of TEXT, DATA, and ANALYSIS segments in FCS file
system_metadata: dict
    contains system metadata as specified by the FCS file format
channels: pd.DataFrame
    describes characteristics for each channel
channel_names: Tuple
    contains flow cytometer channel names


##  `function` FCS.gate_population_polygon
Gate FCS file using a polygon


###  Parameters

- **data** : `pd.DataFrame`
    - DataFrame containing FCS event data  
- **polygon** : `np.ndarray`
    - 2D Numpy array containing polygon vertices  
- **x_dimension** : `str`
    - Name of x dimension  
- **y_dimension** : `str`
    - Name of y dimension  


###  Returns

- `pd.DataFrame`
    - DataFrame containing gated population events  


##  `function` FCS.gate_population_limit
Gate FCS file using a limit


###  Parameters

- **data** : `pd.DataFrame`
    - DataFrame containing FCS event data  
- **dim** : `str`
    - Name of dimension to gate on  
- **min_val** : `float`
    - Minimum value to gate on  
- **max_val** : `float`
    - Maximum value to gate on  


###  Returns

- `pd.DataFrame`
    - DataFrame containing gated population events  


##  `class` WSP
A class to parse a FlowJo WSP file following the Gating-ML 2.0 standard.


##  `function` WSP.get_gating_order
Convenience method to get the order in which gating was conducted from the list of gates
observed in file


###  Parameters

- **population_name** : `List[str]`
    - List of populations, delimited by '/'  


###  Returns

- `List[str]`
    - List of populations in order  


###   Examples
```python

>>> get_gating_order(["All Events",
                      "All Events/Single Cells/Live Cells",
                      "All Events/Single Cells"])

["All Events", "All Events/Single Cells", "All Events/Single Cells/Live Cells"]
```


##  `function` WSP.get_gate_structure
Retrieve gate structure as a nested dict from a WSP file


###  Parameters

- **node** : `etree.Element`
    - XML node to start traversal in  


##  `function` WSP.get_populations
Retrieve populations for a given well from a WSP file


###  Parameters

- **node** : `node`
    - Node to start looking in  


###  Returns

- `pd.DataFrame`
    - DataFrame containing population information  


##  `function` WSP._get_population_helper
Recursively retrieve populations for a given well from a WSP file


###  Parameters

- **node** : `etree.Element`
    - Node to start traversal in  
- **gate_parent_name** : `str, optional`
    - Name of parent node(s), by default ""  


###  Returns

- `Dict`
    - Nested dictionary of populations  


##  `function` WSP.get_population_gates
Get population gates; currently only supports PolygonGate and RectangleGate


###  Parameters

- **events** : `etree.Element`
    - XML node to start traversal in  
- **population_name** : `str`
    - Name of population to get gates for  


###  Returns

- `pd.DataFrame`
    - DataFrame containing gate information  


##  `function` WSP.get_compensation_matrix
Retrieve compensation matrix from WSP file as a DataFrame


###  Parameters

- **root** : `etree.Element`
    - Root element of WSP file to search for compensation matrix  


##  `function` WSP.apply_compensation
Adjust flow cytometry data for compensation


###  Parameters

- **data** : `pd.DataFrame`
    - DataFrame containing FCS event data  
- **compensation_matrix** : `pd.DataFrame`
    - DataFrame containing compensation matrix; rows are from, columns are to  
- **compensation_channels** : `List[str]`
    - Fluoresent channels to adjust for compensation  


###  Returns

- `pd.DataFrame`
    - DataFrame containing compensated events  


##  `function` WSP.get_population_counts
Get population counts from gates DataFrame, using compensation matrix


###  Parameters

- **wsp_gates** : `pd.DataFrame`
    - Pandas DataFrame with the following fields  
    population_name (full nesting of population)
    gate_sort_order (order of points for polygon)
    rect_min (min cutoff for rectangle gate)
    rect_max (max cutoff for rectangle gate)
    x (x coordinate for polygon gate)
    y (y coordinate for polygon gate),
    x_dimension (X dimension for laser)
    y_dimension (Y dimension for laser)
    gate_type
    filename corresponding to well

- **compensation_matrix** : `pd.DataFrame`
    - Compensation matrix as a DataFrame; rows are from labels, columns are to labels  

- **fcs_files_dict** : `Dict[str, bytes]`
    - Dictionary of FCS files as bytes, keyed by filename  


###  Returns

- `pd.DataFrame`
    - DataFrame containing filename, population name, and counts  


##  `function` parse_fcs
Parse an FCS file and return a dict of metadata and numpy arrays of the data.


###  Parameters

- **fcs_bytes** : `bytes`
    - Contents of an FCS file  


###  Returns

- `FCS`
    - An FCS object containing the data and metadata from the FCS file  