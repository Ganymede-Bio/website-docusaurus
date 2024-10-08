---
sidebar_label: fcs
title: fcs
displayed_sidebar: SDKSidebar
--- 

# fcs

## `class` WSP
  
A class to parse a FlowJo WSP file following the Gating-ML 2.0 standard.&nbsp; &nbsp; Contains methods  
for extracting gates, table output structure, population statistics, and compensation  
matrices from WSP file.  
  
```bash
>>> wsp = WSP(wsp_bytes)  
```
  
### View gates  

```bash
>>> wsp.gates  
```
  
### View population statistics computed in FlowJo  

```bash
>>> wsp.stats_flowjo  
```
  
### View table output structure, as configured in Table Editor in FlowJo  

```bash
>>> wsp.table_output_structure  
```
  
### Generate output table based on table output structure and FlowJo population statistics  

```bash
>>> WSP.apply_table_output_structure(
      wsp.table_output_structure["Table"][["gate", "value_type", "statistic", "rename"]], 
      wsp.stats_flowjo)  
```
  
With corresponding FCS files, you can calculate population counts from FCS events data using  
the _apply_compensation_ and _calculate_population_counts_ methods.  


## `function` WSP.\_\_init\_\_
  
Setup parsed WSP object, which contains gates, population statistics, and  
table output structure as configured in Table Editor in FlowJo  
  
### Parameters  
  
**wsp_bytes** : `bytes or file_like object`  
&nbsp; &nbsp; &nbsp; &nbsp; FlowJo Workspace file in bytes  


## `function` WSP.get_population_stats
  
Retrieve population statistics from WSP file  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Population statistics as a DataFrame  


## `function` WSP.get_gates
  
Retrieve gates from WSP file  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Gates as a DataFrame  


## `function` WSP.get_single_well_stats
  
Retrieve populations for a given well from a WSP file.&nbsp; &nbsp; To use this method, loop through the  
wells in the WSP file and pass the node corresponding to the well to this method, making  
sure to capture the unique identifier for each well in the loop.  
  
### Parameters  
  
**node** : `node`  
&nbsp; &nbsp; &nbsp; &nbsp; Node to start looking in, typically node corresponding to well  
**method** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Method to use to retrieve population counts.  
&nbsp; &nbsp; &nbsp; &nbsp; 'gates' will retrieve gates from WSP file  
&nbsp; &nbsp; &nbsp; &nbsp; 'flowjo_stats' will parse stats from WSP file  
  
### Returns  
  
`dict`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary containing single well stats requested  


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
  
**df_table_structure** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing table structure; Should contain the following fields:  
&nbsp; &nbsp; &nbsp; &nbsp; gate (series of gates applied to determine population)  
&nbsp; &nbsp; &nbsp; &nbsp; value_type (type of value (e.g. statistic, keyword, etc.))  
&nbsp; &nbsp; &nbsp; &nbsp; rename (name of column in output table)  
&nbsp; &nbsp; &nbsp; &nbsp; table_name (name of table)  
**df_population_stats** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing gating stats; Should contain the following fields  
&nbsp; &nbsp; &nbsp; &nbsp; population (series of gates applied to determine population)  
&nbsp; &nbsp; &nbsp; &nbsp; statistic_name (name of statistic (e.g. count, MFI, etc.))  
&nbsp; &nbsp; &nbsp; &nbsp; statistic_value (value of statistic)  
**unique_id** : `list[str] | str`  
&nbsp; &nbsp; &nbsp; &nbsp; Unique identifying column names(s) for single flow run. Commonly, this would be well position,  
&nbsp; &nbsp; &nbsp; &nbsp; well position + timestamp, or filename.  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing population proportions with the following fields  
&nbsp; &nbsp; &nbsp; &nbsp; table_name (name of table)  
&nbsp; &nbsp; &nbsp; &nbsp; unique_id (unique identifier for well; name will vary depending on chosen identifier)  
&nbsp; &nbsp; &nbsp; &nbsp; population (population name (e.g. - CD3, Cells, etc.))  
&nbsp; &nbsp; &nbsp; &nbsp; statistic_name (type of statistic (e.g. freqof, freqofparent, freqofgrandparent, etc.))  
&nbsp; &nbsp; &nbsp; &nbsp; statistic_value (value of statistic)  
  
### Examples  
  
```python  
>>> wsp = WSP(wsp_bytes)  
>>> WSP.apply_table_output_structure(wsp.table_output_structure,  
                                     wsp.stats_flowjo,  
                                     unique_id="filename")  
```

## `function` WSP.get_gating_order
  
Convenience method to get the order in which gating was conducted from the list of gates  
observed in file  
  
### Parameters  
  
**population_name** : `list[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; List of populations, delimited by '/'  
  
### Returns  
  
`list[str]`  
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


## `function` WSP.get_compensation_matrices
  
Retrieve compensation matrices from WSP file as a DataFrame  
  
### Returns  
  
`dict[str, pd.DataFrame]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of compensation matrices, keyed by matrix name  


## `function` WSP.apply_compensation
  
Adjust flow cytometry data for compensation  
  
### Parameters  
  
**data** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing FCS event data  
**compensation_matrix** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing compensation matrix; rows are from, columns are to  
**compensation_channels** : `list[str] | None`  
&nbsp; &nbsp; &nbsp; &nbsp; Fluorescent channels to adjust for compensation  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing compensated events  


## `function` WSP.calculate_population_counts
  
Calculate population counts from FCS events data, using compensation matrix  
  
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
  
**fcs_files_dict** : `dict[str, bytes]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of FCS files as bytes, keyed by filename  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing filename, population name, and counts  


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


## `function` FCS.create_comp_matrix_xml
  
Creates XML representation of compensation matrix  
  
### Parameters  
  
**df** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Pandas DataFrame containing compensation matrix.&nbsp; &nbsp; Rows are from, columns are to  
**comp_matrix_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of compensation matrix  
**spillover_mat_attr** : `dict[str, str], optional`  
&nbsp; &nbsp; &nbsp; &nbsp; spillover matrix definition, by default None  
  
### Raises  
  
**GanymedeException**  
&nbsp; &nbsp; &nbsp; &nbsp; If rows and columns are not in the same order  
  
### Example  
  
```python  
For a WSP object, insert a compensation matrix into the XML tree by executing the steps shown below:  
  
>>>> xml_comp_mat = WSP.create_comp_matrix_xml(df_comp_matrix)  
>>>> matrix = xml_comp_mat.xpath("./transforms:spilloverMatrix", namespaces=WSP.ns_transforms).pop()  
>>>> wsp_obj.wsp_root.xpath("./Matrices")[0].append(xml_comp_mat)  
  
In this example, df_comp_matrix is a Pandas DataFrame with a format mirroring an element  
from an item in the 'compensation_matrices' dictionary returned by the 'get_compensation_matrices' method.  
  
Writing wsp_obj to a file will now include the added compensation matrix in the WSP file, which  
can be opened in FlowJo.  
```

## `function` parse_fcs
  
Parse an FCS file and return a dict of metadata and numpy arrays of the data.  
  
### Parameters  
  
**fcs_bytes** : `bytes`  
&nbsp; &nbsp; &nbsp; &nbsp; Contents of an FCS file  
  
### Returns  
  
`FCS`  
&nbsp; &nbsp; &nbsp; &nbsp; An FCS object containing the data and metadata from the FCS file  
