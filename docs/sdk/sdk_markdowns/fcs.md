---
sidebar_label: fcs
title: fcs
displayed_sidebar: SDKSidebar
--- 


# fcs


## `class` FCS
  
A class to represent an FCS (Flow Cytometry Standard) file.  
  
### Attributes  
  
**data** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; The data contained in the FCS file.  
**metadata_file** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; The metadata contained in the FCS file header.  
**metadata_fcs** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; The system metadata contained in the FCS file.  
**metadata_channels** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; The characteristics for each channel in the FCS file.  
**metadata_channel_names** : `Tuple`  
&nbsp; &nbsp; &nbsp; &nbsp; The names of the flow cytometer channels.  
  
### Methods  
  
**parse_metadata(metadata: dict)**  
&nbsp; &nbsp; &nbsp; &nbsp; Parses FCS file metadata.  


## `function` FCS.parse_metadata
  
Parses FCS file metadata  
  
### Parameters  
  
**metadata** : `dict`  
&nbsp; &nbsp; &nbsp; &nbsp; Metadata contained within FCS file, as parsed by the fcsparser python package  
  
### Returns  
  
`dict`  
&nbsp; &nbsp; &nbsp; &nbsp; FCS metadata  
  
### Notes  
  
FCS metadata is returned as a dictionary with the following components  
  
header: dict  
&nbsp; &nbsp; &nbsp; &nbsp; describes FCS version and byte offsets of TEXT, DATA, and ANALYSIS segments in FCS file  
system_metadata: dict  
&nbsp; &nbsp; &nbsp; &nbsp; contains system metadata as specified by the FCS file format  
channels: pd.DataFrame  
&nbsp; &nbsp; &nbsp; &nbsp; describes characteristics for each channel  
channel_names: Tuple  
&nbsp; &nbsp; &nbsp; &nbsp; contains flow cytometer channel names  


## `function` FCS.gate_population_polygon
  
Gate FCS file using a polygon  
  
### Parameters  
  
**data** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing FCS event data  
**polygon** : `np.ndarray`  
&nbsp; &nbsp; &nbsp; &nbsp; 2D Numpy array containing polygon vertices  
**x_dimension** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of x dimension  
**y_dimension** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of y dimension  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing gated population events  


## `function` FCS.gate_population_limit
  
Gate FCS file using a limit  
  
### Parameters  
  
**data** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing FCS event data  
**dim** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of dimension to gate on  
**min_val** : `float`  
&nbsp; &nbsp; &nbsp; &nbsp; Minimum value to gate on  
**max_val** : `float`  
&nbsp; &nbsp; &nbsp; &nbsp; Maximum value to gate on  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing gated population events  


## `class` WSP
  
A class to parse a FlowJo WSP file following the Gating-ML 2.0 standard.  


## `function` WSP._get_population_flowjo_helper
  
Get counts directly from FlowJo  
  
### Parameters  
  
**node** : `etree.Element`  
&nbsp; &nbsp; &nbsp; &nbsp; Node containing counts  
**parent_name** : `str, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of parent class, by default ""  
  
### Returns  
  
`Dict[str, int]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary containing counts  


## `function` WSP.get_table_output_structure
  
Retrieve table structure as specified in Table Editor of FlowJo  
  
### Parameters  
  
**node** : `etree.Element`  
&nbsp; &nbsp; &nbsp; &nbsp; Node to search for table editor, typically root node  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame consisting of gate and tables  


## `function` WSP.apply_table_output_structure
  
Apply table structure as specified in Table Editor of FlowJo to get population proportions  
  
### Parameters  
  
**df_population_counts** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing gating counts; Should contain the following fields  
&nbsp; &nbsp; &nbsp; &nbsp; gate (series of gates applied to determine population)  
&nbsp; &nbsp; &nbsp; &nbsp; count (number of events for population)  
&nbsp; &nbsp; &nbsp; &nbsp; unique_id (name of identifier for well)  
**unique_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Unique identifier for well  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing population proportions with the following fields  
&nbsp; &nbsp; &nbsp; &nbsp; table_name (name of table)  
&nbsp; &nbsp; &nbsp; &nbsp; unique_id (unique identifier for well; name will vary depending on chosen identifier)  
&nbsp; &nbsp; &nbsp; &nbsp; statistic_name (name of statistic (e.g. CD3, CD4, CD8))  
&nbsp; &nbsp; &nbsp; &nbsp; statistic_type (type of statistic (e.g. freqof, freqofparent, freqofgrandparent))  
&nbsp; &nbsp; &nbsp; &nbsp; statistic_value (value of statistic)  
  


## `function` WSP.get_gating_order
  
Convenience method to get the order in which gating was conducted from the list of gates  
observed in file  
  
### Parameters  
  
**population_name** : `List[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; List of populations, delimited by '/'  
  
### Returns  
  
`List[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; List of populations in order  
  
### Example  
  
```python  
>>> get_gating_order(["All Events",  
                      "All Events/Single Cells/Live Cells",  
                      "All Events/Single Cells"])  
  
["All Events", "All Events/Single Cells", "All Events/Single Cells/Live Cells"]  
```

## `function` WSP.get_gate_structure
  
Retrieve gate structure as a nested dict from a WSP file  
  
### Parameters  
  
**node** : `etree.Element`  
&nbsp; &nbsp; &nbsp; &nbsp; XML node to start traversal in, typically node corresponding to well  


## `function` WSP.get_populations
  
Retrieve populations for a given well from a WSP file.&nbsp; &nbsp; To use this method, loop through the  
wells in the WSP file and pass the node corresponding to the well to this method, making  
sure to capture the unique identifier for each well in the loop.  
  
### Parameters  
  
**node** : `node`  
&nbsp; &nbsp; &nbsp; &nbsp; Node to start looking in, typically node corresponding to well  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing population information for specified well  


## `function` WSP._get_population_actual_helper
  
Recursively retrieve populations for a given well from a WSP file  
  
### Parameters  
  
**node** : `etree.Element`  
&nbsp; &nbsp; &nbsp; &nbsp; Node to start traversal in  
**gate_parent_name** : `str, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of parent node(s), by default ""  
  
### Returns  
  
`Dict`  
&nbsp; &nbsp; &nbsp; &nbsp; Nested dictionary of populations  


## `function` WSP.get_population_gates
  
Get population gates; currently only supports PolygonGate and RectangleGate  
  
### Parameters  
  
**events** : `etree.Element`  
&nbsp; &nbsp; &nbsp; &nbsp; XML node to start traversal in  
**population_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of population to get gates for  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing gate information  


## `function` WSP.get_compensation_matrix
  
Retrieve compensation matrix from WSP file as a DataFrame  
  
### Parameters  
  
**root** : `etree.Element`  
&nbsp; &nbsp; &nbsp; &nbsp; Root element of WSP file to search for compensation matrix  


## `function` WSP.apply_compensation
  
Adjust flow cytometry data for compensation  
  
### Parameters  
  
**data** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing FCS event data  
**compensation_matrix** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing compensation matrix; rows are from, columns are to  
**compensation_channels** : `List[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Fluoresent channels to adjust for compensation  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing compensated events  


## `function` WSP.get_population_counts
  
Get population counts from events DataFrame, using compensation matrix  
  
### Parameters  
  
**wsp_gates** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Pandas DataFrame with the following fields  
&nbsp; &nbsp; &nbsp; &nbsp; population_name (full nesting of population)  
&nbsp; &nbsp; &nbsp; &nbsp; gate_sort_order (order of points for polygon)  
&nbsp; &nbsp; &nbsp; &nbsp; rect_min (min cutoff for rectangle gate)  
&nbsp; &nbsp; &nbsp; &nbsp; rect_max (max cutoff for rectangle gate)  
&nbsp; &nbsp; &nbsp; &nbsp; x (x coordinate for polygon gate)  
&nbsp; &nbsp; &nbsp; &nbsp; y (y coordinate for polygon gate),  
&nbsp; &nbsp; &nbsp; &nbsp; x_dimension (X dimension for laser)  
&nbsp; &nbsp; &nbsp; &nbsp; y_dimension (Y dimension for laser)  
&nbsp; &nbsp; &nbsp; &nbsp; gate_type  
&nbsp; &nbsp; &nbsp; &nbsp; filename corresponding to well  
  
**compensation_matrix** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Compensation matrix as a DataFrame; rows are from labels, columns are to labels  
  
**fcs_files_dict** : `Dict[str, bytes]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of FCS files as bytes, keyed by filename  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing filename, population name, and counts  


## `function` parse_fcs
  
Parse an FCS file and return a dict of metadata and numpy arrays of the data.  
  
### Parameters  
  
**fcs_bytes** : `bytes`  
&nbsp; &nbsp; &nbsp; &nbsp; Contents of an FCS file  
  
### Returns  
  
`FCS`  
&nbsp; &nbsp; &nbsp; &nbsp; An FCS object containing the data and metadata from the FCS file  
