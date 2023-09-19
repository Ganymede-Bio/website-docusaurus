---
sidebar_label: analytics.lc
title: analytics.lc
displayed_sidebar: SDKSidebar
--- 


# analytics.lc



##  `class` LC
Reads LC runs in CDF format from Agilent HPLC systems and stores as dataframes


##  `function` LC.__init__
LC class to read in CDF data and store as dataframes


###  Parameters

- **cdf_data** : `bytes`
    - CDF data in bytes  


##  `function` LC.get_elution_peaks
Get elution peaks from raw chromatogram data


###  Parameters

- **peak_prominence_threshold** : `int, optional`
    - Minimum prominence of peaks to be considered, by default 10  
- **num_peaks_to_find** : `int, optional`
    - Number of peaks to find  


##  `function` LC.decode_peaks_name
Decodes the peak names from bytes to strings; move peak name to front of DataFrame


###  Parameters

- **df_peaks** : `pd.DataFrame`
    - Dataframe containing peak names  


###  Returns

- `pd.DataFrame`
    - Dataframe with peak names decoded  


##  `function` LC.get_cdf_dataframes
Loads in the cdf data and proceeses it into dataframes, extracting the chromotography data,
peak info table, and metadata.


###  Parameters

- **cdf_data** : `bytes`
    - CDF data in bytes containing HPLC run data  


###  Returns

- Dict[str, pd.DataFrame]
    - Dictionary containing dataframes for metadata, peak info, and chromatography data  