---
id: NodeOverview
title: Node Overview
displayed_sidebar: nodeSidebar
sidebar_label: Overview
---

_Nodes_ provide template structure for performing data extraction, processing, and API communication.  The tables below summarize how different _nodes_ work.

Nodes are classified into the following categories: 
- **App**: Accesses third-party APIs for processing; in many cases, key exchange between third-party and Ganymede are necessary for functionality
- **Analysis**: Performs Python / SQL manipulations
- **Instrument**: Lab instrument-specific functions
- **File**: For ETL operations on data of specified type into Ganymede cloud
- **Tag**: For specifying parameters at _flow_ runtime
- **Test**: For validating platform functionality or for mocking Flows prior to implementation


### Node Characteristics

A useful way to interact with nodes is to consider input and output types of nodes.  This information is displayed
in the table below, along with whether there is a user-editable component associated with the node.

Input/output types are split into the following categories:
- **Table**: tabular data retrieved from or passed to tenant-specific Ganymede data lake
- **API**: access via third-party API
- **File-related inputs/outputs**: File of specified type
  - **FileCSV**: CSV file
  - **FileExcel**: Excel file (xls, xlsx, ..)
  - **FileImage**: Image file (png, bmp, ..)
  - **FileHDF5**: HDF5 file
  - **FileXML**: XML file
  - **FileAny**: generic data file, which may be unstructured
- **TagBenchling**: Benchling run tag
- **string**: String parameter

| Category   | Name                       | Input Types                                | Output Types         | Is Editable   |
|------------|----------------------------|--------------------------------------------|----------------------|---------------|
| Analysis   | Process_Blob_to_Blob       | FileAny and Optional[Table or List[Table]] | Dict[FileAny]        | True          |
| Analysis   | Process_Blob_to_Table      | FileAny and Optional[Table or List[Table]] | Table or Dict[Table] | True          |
| Analysis   | Table_to_Blob              | Table or List[Table]                       | Dict[FileAny]        | True          |
| Analysis   | Transform_SQL              | Table                                      | Table                | True          |
| Analysis   | Transform_py               | Table or List[Table]                       | Table or Dict[Table] | True          |
| App        | AirtableExport             | Table                                      | API                  | False         |
| App        | AirtableImport             | API                                        | Table                | False         |
| App        | Azure_Read                 | API                                        | FileAny              | False         |
| App        | Azure_Write                | FileAny                                    | API                  | False         |
| App        | Benchling_Read             | API                                        | Table                | True          |
| App        | Benchling_Read_Object      | API                                        | Table                | True          |
| App        | Benchling_Write            | Table                                      | API                  | True          |
| App        | Coda_Write                 | Table                                      | API                  | True          |
| App        | S3_Read                    | API                                        | FileAny              | False         |
| App        | S3_Write                   | FileAny                                    | API                  | False         |
| File       | Blob_Read                  | FileAny                                    | FileAny              | True          |
| File       | CSV_Read                   | FileCSV                                    | Table or Dict[Table] | True          |
| File       | CSV_Write                  | Table or List[Table]                       | FileCSV              | True          |
| File       | Excel_Read                 | FileExcel                                  | Table or Dict[Table] | True          |
| File       | Excel_Write                | Table or List[Table]                       | FileExcel            | True          |
| File       | FCS_Extract_Load           | FileFCS                                    | Dict[Table]          | True          |
| File       | HDF5_Read                  | FileHDF5                                   | FileAny              | True          |
| File       | Image_Read                 | FileImage                                  | Dict[FileAny]        | True          |
| File       | Image_Write                | Table or List[Table]                       | Dict[FileAny]        | True          |
| File       | Powerpoint_Write           | Table or List[Table]                       | Dict[FileAny]        | True          |
| File       | XML_Read                   | FileXML                                    | Table                | True          |
| Instrument | BMG_Clariostar_CSV         | FileCSV                                    | Dict[Table]          | True          |
| Instrument | Profilometer_Read          | FileHDF5                                   | FileHDF5             | True          |
| Instrument | Read_Trios_Rheometer_Excel | FileExcel                                  | Table                | True          |
| Instrument | SpectraMax_XML             | FileXML                                    | Table                | True          |
| Tag        | Benchling_Tag              | TagBenchling                               | string               | False         |
| Tag        | Input_Param                | string                                     | string               | False         |
| Test       | GanymedeEcho               |                                            |                      | False         |
| Test       | Placeholder                |                                            |                      | False         |


### Node Description

The table below contains a full listing of available nodes.

| Category   | Name                       | Brief Description                                                  |
|------------|----------------------------|--------------------------------------------------------------------|
| Analysis   | Process_Blob_to_Blob       | Process blob data; write results to data store                     |
| Analysis   | Process_Blob_to_Table      | Process data; write tabular data results to data lake              |
| Analysis   | Table_to_Blob              | Process tabular data; write data results to data lake              |
| Analysis   | Transform_SQL              | SQL analysis Function                                              |
| Analysis   | Transform_py               | Manipulate data with python                                        |
| App        | AirtableExport             | Export data from Ganymede data lake to Airtable                    |
| App        | AirtableImport             | Import data from Airtable into Ganymede data lake                  |
| App        | Azure_Read                 | Read data from Azure Blob Storage                                  |
| App        | Azure_Write                | Write data to Azure Blob storage                                   |
| App        | Benchling_Read             | Read Benchling data into data lake using run tag                   |
| App        | Benchling_Read_Object      | Read Benchling data into data lake using object ID                 |
| App        | Benchling_Write            | Write to Benchling                                                 |
| App        | Coda_Write                 | Write Coda tables                                                  |
| App        | S3_Read                    | Ingest data into Ganymede data storage from AWS S3 storage         |
| App        | S3_Write                   | Write data to an S3 bucket                                         |
| File       | Blob_Read                  | Read blob data into Ganymede data storage                          |
| File       | CSV_Read                   | Read in contents of a CSV file                                     |
| File       | CSV_Write                  | Write table to CSV file                                            |
| File       | Excel_Read                 | Read Excel spreadsheet                                             |
| File       | Excel_Write                | Write Excel spreadsheet                                            |
| File       | FCS_Extract_Load           | Load FCS file to data lake                                         |
| File       | HDF5_Read                  | Read HDF5 data                                                     |
| File       | Image_Read                 | Process image data; store processed images to data store           |
| File       | Image_Write                | Process tabular data; write an image to data lake                  |
| File       | Powerpoint_Write           | Process tabular data; write a powerpoint presentation to data lake |
| File       | XML_Read                   | Read XML file into data lake                                       |
| Instrument | BMG_Clariostar_CSV         | BMG Clariostar Function                                            |
| Instrument | Profilometer_Read          | Read Mx Profiler data file                                         |
| Instrument | Read_Trios_Rheometer_Excel | Read Trios runs from Excel                                         |
| Instrument | SpectraMax_XML             | Read in XML output from Molecular Devices SpectraMax               |
| Tag        | Benchling_Tag              | Read benchling tag                                                 |
| Tag        | Input_Param                | Input parameter into Flow                                          |
| Test       | GanymedeEcho               | Echo command for Ganymede                                          |
| Test       | Placeholder                | Function for planning Flow                                         |