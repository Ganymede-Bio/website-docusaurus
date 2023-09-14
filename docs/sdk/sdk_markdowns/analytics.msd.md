---
sidebar_label: analytics.msd
title: analytics.msd
displayed_sidebar: SDKSidebar
--- 


# analytics.msd



##  `class` MSD
A class to represent a MSD file.


###  Attributes

- **header_data** : `pd.DataFrame`
    - The metadata from the header of the MSD file.  
- **msd_data** : `pd.DataFrame`
    - The MSD data from the MSD file, multiindexed by row and column.  


###  Methods

- **parse_msd_data(msd_data_bytes** : `bytes) - pd.DataFrame`
    - Parses MSD byte data into header data and MSD data and returns as pandas DataFrames.  


##  `function` MSD.parse_msd_data
Parse MSD data from bytes and return as pandas DataFrame


###  Parameters

- **msd_data_bytes** : `bytes`
    - Bytes from MSD data file.  

- **Format of data section is**
            - Column 1        Column 2        Column 3...  
    Row 1   Microwell 1     Microwell 1     Microwell 1
            Microwell 2     Microwell 2     Microwell 2
            Microwell 3     Microwell 3     Microwell 3
            ...


###  Returns

- `pd.DataFrame`
    - Header data - dataframe of keys and values from metadata in file header  
- `pd.DataFrame`
    - MSD data - dataframe with multiindex of Rows (A, B, C, etc.) and Columns  
    (1, 2, 3, etc.), with separate columns for each microwell