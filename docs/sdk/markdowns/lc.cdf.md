---
sidebar_label: lc.cdf
title: lc.cdf
displayed_sidebar: SDKSidebar
--- 


# lc.cdf


## `function` CDF.compare_aia_files
  
Compare 2 AIA files, printing out differences  
  
### Parameters  
  
**ds_base** : `nc.Dataset`  
&nbsp; &nbsp; &nbsp; &nbsp; Base AIA file  
**ds_cmp** : `nc.Dataset`  
&nbsp; &nbsp; &nbsp; &nbsp; Comparison AIA file  


## `function` CDF.verify_aia_file
  
Verifies AIA fields against spec.&nbsp; &nbsp; E1948-98 is the original spec.  
  
### Parameters  
  
**ds** : `nc.Dataset`  
&nbsp; &nbsp; &nbsp; &nbsp; AIA file  
**spec** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Spec to validate against  


## `function` CDF.write_new_cdf_file
  
Create a new CDF file with data from a dictionary  
  
### Parameters  
  
**cdf_filename** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Filename for new CDF file  
**cdf_dataframe**  
&nbsp; &nbsp; &nbsp; &nbsp; Data to be written to CDF file  
&nbsp; &nbsp; &nbsp; &nbsp; Variable names should be the column names of the dataframe  
**additional_vars** : `dict`  
&nbsp; &nbsp; &nbsp; &nbsp; Additional variables to be written to CDF file. Values can be a list or a single value  
&nbsp; &nbsp; &nbsp; &nbsp; Format should be \{"variable_name": value, ...\}  
**dimensions** : `dict`  
&nbsp; &nbsp; &nbsp; &nbsp; Dimensions for CDF file  
&nbsp; &nbsp; &nbsp; &nbsp; Format should be \{"dimension_name": dimension_length, ...\}  
**attributes** : `dict`  
&nbsp; &nbsp; &nbsp; &nbsp; Attributes for CDF file  
&nbsp; &nbsp; &nbsp; &nbsp; Format should be \{"attribute_name": attribute_value, ...\}  
**to_bytes** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; If True, return CDF file as bytes object  
&nbsp; &nbsp; &nbsp; &nbsp; If False, write CDF file to disk  


## `function` CDF.write_variable_to_cdf
  
Write a variable to a new netCDF file  
  
### Parameters  
  
**cdf_file** : `netCDF4.Dataset`  
&nbsp; &nbsp; &nbsp; &nbsp; netCDF file to write to  
**variable_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of the variable to write  
**data** : `np.array`  
&nbsp; &nbsp; &nbsp; &nbsp; Data to write to the variable  
**if_exists** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Flag to determine what to do if the variable already exists in the file. Options are "append", "replace", or "skip"  
**save_flag** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Flag to save the file after writing the variable  
  
### Returns  
  
`None`  


## `function` CDF.copy_cdf_data_to_new_file
  
Copy data from one netCDF file to another  
  
### Parameters  
  
**original_cdf_file** : `netCDF4.Dataset`  
&nbsp; &nbsp; &nbsp; &nbsp; Original netCDF file  
**new_cdf_filename** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of new netCDF file  
**to_bytes** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; If True, return new netCDF file as bytes  
&nbsp; &nbsp; &nbsp; &nbsp; If False, writes to disk at file location and returns file name  
**variables_to_copy** : `list`  
&nbsp; &nbsp; &nbsp; &nbsp; List of variables to copy  
&nbsp; &nbsp; &nbsp; &nbsp; If None, all variables will be copied  
**close_file** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; If True, close file after copying and return either bytes or file name  
&nbsp; &nbsp; &nbsp; &nbsp; If False, return file object  
**include_peak_data** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; If True, include peak data in new file  
&nbsp; &nbsp; &nbsp; &nbsp; If False, exclude peak data from new file  
  
### Returns  
  
**new_cdf_file** : `netCDF4.Dataset or bytes`  
&nbsp; &nbsp; &nbsp; &nbsp; New netCDF file  
&nbsp; &nbsp; &nbsp; &nbsp; If to_bytes is True, returns new netCDF file as bytes  
&nbsp; &nbsp; &nbsp; &nbsp; If to_bytes is False, writes to disk at file location and returns file name  


## `function` CDF.append_peak_info_to_cdf
  
Append peak information to an existing CDF file  
  
### Parameters  
  
**existing_cdf_filename** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Filename for existing CDF file  
**peak_info** : `CDFPeakInfo`  
&nbsp; &nbsp; &nbsp; &nbsp; DataFrame containing peak information  
&nbsp; &nbsp; &nbsp; &nbsp; Columns should be the same as the peak information columns in the CDF file  
&nbsp; &nbsp; &nbsp; &nbsp; peak_name, peak_retention_time, peak_height, peak_area  
**outdir** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Directory to write new CDF file; same as existing_cdf_filename if not specified  
**to_bytes** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; If True, return CDF file as bytes object  
&nbsp; &nbsp; &nbsp; &nbsp; If False, write CDF file to disk  
**create_copy** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; If True, create a copy of the existing CDF file and append data to the copy  
&nbsp; &nbsp; &nbsp; &nbsp; If False, append data to the existing CDF file  


## `function` CDFOutput.__init__
  
Initialize LCOutput object for outputting data from netCDF file in AIA format  
  
### Parameters  
  
**cdf_filename** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of the netCDF file  
**cdf** : `nc.Dataset`  
&nbsp; &nbsp; &nbsp; &nbsp; netCDF file containing LC run data in AIA format  
**baseline** : `np.ndarray, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Array containing baseline data  


## `function` CDFOutput.to_excel
  
Outputs the data from the netCDF file to an Excel file  
  
### Parameters  
  
**filename** : `str | None`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of the file to write to  
&nbsp; &nbsp; &nbsp; &nbsp; If None, the method will return a tuple of DataFrames (peak_purity, peak_stats)  
**mode** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Mode to use when writing to Excel file  
&nbsp; &nbsp; &nbsp; &nbsp; Options are "w" to overwrite the file or "a" to append to the file  
**assay** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Assay-specific information to include in the Excel file  


## `function` CDFOutput.to_html
  
Plot data from a netCDF file  
  
### Parameters  
  
**filename** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Filename for HTML file to save plot  
&nbsp; &nbsp; &nbsp; &nbsp; If None, plot will be displayed  
**write_mode** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Mode to use when writing to HTML file  
&nbsp; &nbsp; &nbsp; &nbsp; Options are "w" to overwrite the file or "a" to append to the file  
**num_peaks_to_plot** : `int`  
&nbsp; &nbsp; &nbsp; &nbsp; Number of peaks to plot, can be used to excludesummary peak info from plot  
**show_peak_names** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; If True, show peak names on the plot  
