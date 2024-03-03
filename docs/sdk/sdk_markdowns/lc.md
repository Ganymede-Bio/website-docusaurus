---
sidebar_label: lc
title: lc
displayed_sidebar: SDKSidebar
--- 


# lc


## `class` LC
  
Reads liquid chromatography runs in CDF format  
  
### Methods  
  
**from_cdf(cdf_data: bytes)**  
&nbsp; &nbsp; &nbsp; &nbsp; Reads in CDF data from Agilent LC and stores it in the class  
**get_elution_peaks(chromatogram: pd.Series, peak_prominence_threshold=10, num_peaks_to_find=None)**  
&nbsp; &nbsp; &nbsp; &nbsp; Get elution peaks from raw chromatogram data  


## `function` LC.__init__
  
Initialize LC class  


## `function` LC.from_cdf
  
Reads in CDF data from Agilent LC and stores it in the class  
  
### Parameters  
  
**cdf_data** : `bytes`  
&nbsp; &nbsp; &nbsp; &nbsp; CDF data in bytes  


## `function` LC.get_elution_peaks
  
Get elution peaks from raw chromatogram data  
  
### Parameters  
  
**chromatogram** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Pandas Series with time as index  
**peak_prominence_threshold** : `int, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Minimum prominence of peaks to be considered, by default 10  
**num_peaks_to_find** : `int, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Number of peaks to find  


## `function` LC.decode_peaks_name
  
Decodes the peak names from bytes to strings; move peak name to front of DataFrame  
  
### Parameters  
  
**df_peaks** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Dataframe containing peak names  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Dataframe with peak names decoded  


## `function` LC.get_cdf_dataframes
  
Loads in the cdf data and proceeses it into dataframes, extracting the chromotography data,  
peak info table, and metadata.  
  
### Parameters  
  
**cdf_data** : `bytes`  
&nbsp; &nbsp; &nbsp; &nbsp; CDF data in bytes containing HPLC run data  
  
### Returns  
  
`Dict[str, pd.DataFrame]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary containing dataframes for metadata, peak info, and chromatography data  


## `function` LC.compare_aia_files
  
Compare 2 AIA files, printing out differences  
  
### Parameters  
  
**ds_base** : `nc.Dataset`  
&nbsp; &nbsp; &nbsp; &nbsp; Base AIA file  
**ds_cmp** : `nc.Dataset`  
&nbsp; &nbsp; &nbsp; &nbsp; Comparison AIA file  


## `function` LC.verify_aia_file
  
Verifies AIA fields against spec.&nbsp; &nbsp; E1948-98 is the original spec.  
  
### Parameters  
  
**ds** : `nc.Dataset`  
&nbsp; &nbsp; &nbsp; &nbsp; AIA file  
**spec** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Spec to validate against  
