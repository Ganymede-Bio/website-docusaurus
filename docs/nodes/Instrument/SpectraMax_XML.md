---
sidebar_label: SpectraMax_XML
title: SpectraMax_XML
displayed_sidebar: nodeSidebar
---

### Node Description
Parses SpectraMax XML file and uploads contents to data lake


### Node Attributes
- **input_file_xml**
  - File extension of input XML file
- **output_table_metadata**
  - Table name for metadata associated with SpectraMax run
- **output_table_results**
  - Table name for SpectraMax core data
## User-Defined Python
Processes Quantigene data into tables for storage in data lake


### Parameters
- **xml_file** : `TextIO`
    - Quantigene instrument output file
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`Dict[str, pd.DataFrame]`
  - DataFrames for storage in data lake, indexed by table name