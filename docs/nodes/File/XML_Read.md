---
sidebar_label: XML_Read
title: XML_Read
displayed_sidebar: nodeSidebar
---

## Operator
Reads an XML file and stores processed results in data lake

Reads an XML file, processes via user-defined function, and stores result
table in Ganymede data lake


### Parameters
- **output_table_results** : `str`
    - Table name where parsed XML data will be stored.
## User-Defined Python
Parse XML file into table for storage in data lake


### Parameters
- **xml_file** : `BytesIO`
    - Contents of input XML file
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`pd.DataFrame`
  - Table for storage in Ganymede data lake