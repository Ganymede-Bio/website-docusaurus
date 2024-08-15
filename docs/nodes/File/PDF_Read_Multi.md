---
sidebar_label: PDF_Read_Multi
title: PDF_Read_Multi
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Reads contents of multiple pdf files into data lake

The contents of the pdf files are passed to the user-defined function, which
return one or more tables for storage in Ganymede data lake.

### Node Attributes

- **input_multi_pdf**
  - File extension for valid PDF files submitted.  For example, filling in this attribute with "*.pdf" will only allow files with the extension .pdf to be uploaded.
- **output_table_results**
  - Table displayed on [Table Head](https://docs.ganymede.bio/app/intro/Concepts#table-head) in Ganymede UI.

### Notes

In the execute function, returning NodeReturn(tables_to_upload=\{'results': df\}) would render the DataFrame df in the Flow Editor if Table Head visualization is enabled.

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