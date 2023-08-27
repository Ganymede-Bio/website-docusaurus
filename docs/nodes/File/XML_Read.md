---
sidebar_label: XML_Read
title: XML_Read
displayed_sidebar: nodeSidebar
---

### Node Description
Reads an XML file and stores processed results in data lake

Reads an XML file, processes via user-defined function, and stores result
table in Ganymede data lake


### Node Attributes
- **input_file_xml**
  - File extension for valid XML files submitted.  For example, filling in this attribute with "*.xml" will only allow files with the extension .xml to be uploaded.
- **output_table_results**
  - Table name where parsed XML data will be stored.
## User-Defined Python
Parse XML file into table for storage in data lake


### Parameters
- **xml_file** : `BytesIO`
    - Contents of input XML file
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`NodeReturn`
  Object containing data to store in data lake and/or file storage.