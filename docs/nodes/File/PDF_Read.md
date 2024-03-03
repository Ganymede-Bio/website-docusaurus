---
sidebar_label: PDF_Read
title: PDF_Read
displayed_sidebar: nodeSidebar
---

### Node Description

Reads contents of a pdf file into data lake

The contents of pdf file are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.

### Node Attributes

- **input_file_pdf**
  - File extension for valid PDF files submitted.  For example, filling in this attribute with "*.pdf" will only allow files with the extension .pdf to be uploaded.
- **output_table_results**
  - Table to display on Table Head referencing table output from node in Flow Editor

## User-Defined Python

Processes pdf file(s) (passed to function as BytesIO file-like objects) into blobs and
data tables stored in the data lake

### Parameters

- **pdf_file** : `dict[str, BytesIO]`
    - pdf files, indexed by file name
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
  Object containing data to store in data lake and/or file storage