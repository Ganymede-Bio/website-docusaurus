---
sidebar_label: msd
title: msd
displayed_sidebar: SDKSidebar
--- 


# msd


## `class` MSD
  
A class to represent a Mesoscale Discovery (MSD) file.  
  
### Attributes  
  
**header_data** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; The metadata from the header of the MSD file.  
**msd_data** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; The MSD data from the MSD file, multiindexed by row and column.  
  
### Methods  
  
**parse_msd_data(msd_data_bytes: bytes)**  
&nbsp; &nbsp; &nbsp; &nbsp; Parses MSD byte data into header data and MSD data and returns as pandas DataFrames.  


## `function` MSD.parse_msd_data
  
Parse MSD data from bytes and return as pandas DataFrame  
  
### Parameters  
  
**msd_data_bytes** : `bytes`  
&nbsp; &nbsp; &nbsp; &nbsp; Bytes from MSD data file.  
  
&nbsp; &nbsp; &nbsp; &nbsp; Format of data section is:  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Column 1&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Column 2&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Column 3...  
&nbsp; &nbsp; &nbsp; &nbsp; Row 1&nbsp; &nbsp;  Microwell 1&nbsp; &nbsp; &nbsp; &nbsp;  Microwell 1&nbsp; &nbsp; &nbsp; &nbsp;  Microwell 1  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Microwell 2&nbsp; &nbsp; &nbsp; &nbsp;  Microwell 2&nbsp; &nbsp; &nbsp; &nbsp;  Microwell 2  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Microwell 3&nbsp; &nbsp; &nbsp; &nbsp;  Microwell 3&nbsp; &nbsp; &nbsp; &nbsp;  Microwell 3  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Header data - dataframe of keys and values from metadata in file header  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; MSD data - dataframe with multiindex of Rows (A, B, C, etc.) and Columns  
&nbsp; &nbsp; &nbsp; &nbsp; (1, 2, 3, etc.), with separate columns for each microwell  
