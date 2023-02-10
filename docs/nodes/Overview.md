---
id: NodeOverview
title: Node Overview
displayed_sidebar: nodeSidebar
sidebar_label: Overview
---

_Nodes_ provide template structure for performing data extraction, processing, and API communication. The diagram below shows how a node performs a base function, but exposes an interface for user-defined code to enable tailoring.

<img width="400" alt="Example node layout" src="https://ganymede-bio.mo.cloudinary.net/apiServer/Operator_Conceptual_Layout_20230108.png" />

## Key Node Characteristics

A useful way to interact with _nodes_ is to consider how _nodes_ interact with other systems, their input and output types, and whether or not they contain a user-editable component.  The table below showsthe full list of available _nodes_, along with whether there is a user-editable component associated with the node.

### Available Nodes with Key Characteristics

| Category   | Name                       | Input Types                                                           | Output Types         | Is Editable   |
|------------|----------------------------|-----------------------------------------------------------------------|----------------------|---------------|
| Analysis   | Great_Expectations         | Table                                                                 | Table                | True          |
| Analysis   | Process_Blob_to_Blob       | FileAny and Optional[Table or List[Table]]                            | Dict[FileAny]        | True          |
| Analysis   | Process_Blob_to_Table      | FileAny and Optional[Table or List[Table]]                            | Table or Dict[Table] | True          |
| Analysis   | Table_to_Blob              | Table or List[Table]                                                  | Dict[FileAny]        | True          |
| Analysis   | Transform_SQL              | Table                                                                 | Table                | True          |
| Analysis   | Transform_py               | Table or List[Table]                                                  | Table or Dict[Table] | True          |
| App        | AirtableExport             | Table                                                                 | API                  | False         |
| App        | AirtableImport             | API                                                                   | Table                | False         |
| App        | Azure_Read                 | API                                                                   | FileAny              | False         |
| App        | Azure_Write                | FileAny                                                               | API                  | False         |
| App        | Benchling_Event            | App                                                                   | FileAny              | True          |
| App        | Benchling_Read             | API                                                                   | Table                | True          |
| App        | Benchling_Read_Object      | API                                                                   | Table                | True          |
| App        | Benchling_Write            | Table                                                                 | API                  | True          |
| App        | Benchling_Write_Object     | Optional[FileAny or List[FileAny]] and Optional[Table or List[Table]] | API                  | True          |
| App        | Coda_Write                 | Table                                                                 | API                  | True          |
| App        | S3_Read                    | API                                                                   | FileAny              | False         |
| App        | S3_Write                   | FileAny                                                               | API                  | False         |
| App        | Snowflake_Write            | Table                                                                 | API                  | False         |
| File       | Blob_Read                  | FileAny                                                               | FileAny              | True          |
| File       | CSV_Read                   | FileCSV                                                               | Table or Dict[Table] | True          |
| File       | CSV_Write                  | Table or List[Table]                                                  | FileCSV              | True          |
| File       | Excel_Read                 | FileExcel                                                             | Table or Dict[Table] | True          |
| File       | Excel_Write                | Table or List[Table]                                                  | FileExcel            | True          |
| File       | FCS_Extract_Load           | FileFCS                                                               | Dict[Table]          | True          |
| File       | HDF5_Read                  | FileHDF5                                                              | FileAny              | True          |
| File       | Image_Read                 | FileImage                                                             | Dict[FileAny]        | True          |
| File       | Image_Write                | Table or List[Table]                                                  | Dict[FileAny]        | True          |
| File       | Powerpoint_Write           | Table or List[Table]                                                  | Dict[FileAny]        | True          |
| File       | XML_Read                   | FileXML                                                               | Table                | True          |
| File       | Zip_Read                   | FileZip                                                               | Dict[Table]          | True          |
| Instrument | BMG_Clariostar_CSV         | FileCSV                                                               | Dict[Table]          | True          |
| Instrument | Instron_Tensile_Read       | FileIsTens                                                            | Dict[Table]          | True          |
| Instrument | Profilometer_Read          | FileHDF5                                                              | FileHDF5             | True          |
| Instrument | Read_Trios_Rheometer_Excel | FileExcel                                                             | Table                | True          |
| Instrument | SpectraMax_XML             | FileXML                                                               | Table                | True          |
| Tag        | Benchling_Tag              | TagBenchling                                                          | string               | False         |
| Tag        | Input_Param                | string                                                                | string               | False         |
| Test       | GanymedeEcho               |                                                                       |                      | False         |
| Test       | Placeholder                |                                                                       |                      | False         |

#### Node Categories

- **App**: Accesses third-party APIs for processing; in many cases, key exchange between third-party and Ganymede are necessary for functionality
- **Analysis**: Performs Python / SQL manipulations
- **Instrument**: Lab instrument-specific functions
- **File**: For ETL operations on data of specified type into Ganymede cloud
- **Tag**: For specifying parameters at _flow_ runtime
- **Test**: For validating platform functionality or for mocking _flows_ prior to implementation

#### Node Input/Output Types

Input/output types are split into the following categories:
- **Table**: Tabular data retrieved from or passed to tenant-specific Ganymede data lake.  Tables are retrieved from Ganymede data lake via ANSI SQL queries, and are passed to Ganymede data lake as pandas DataFrames
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

**List** and **Dict** correspond to Python lists and dictionaries respectively.

**Optional** indicates that the input or output is optional.

### User-editable Nodes

User-editable nodes present an interface for modifying and testing code that is executed by the workflow management system.  These Jupyter notebooks are split into the following sections:
- **Node Description**: A short blurb about the node that the user-editable function corresponds to
- **Node Input Data**: For nodes that retrieve tabular data from the data lake as input, the query string in this cell specifies the query (-ies) that are executed and presented to the user-defined function for processing.  
- **User-Defined Function**: The _execute_ function within this cell processes data.  The workflow management system calls the _execute_ function within this cell during _flow_ execution.

:::info

The _execute_ function may call classes and functions found within the User-Defined Function cell.

:::

- **Save Pipeline Code**: This cell stores any changes to the **Node Input Data** (if present) and **User-Defined Function** cells.

- **Testing Section**: The cells in this section can be used for testing modifications to the SQL query and user-defined python function.  This enables rapid iteration on user-defined code; after necessary edits are made, changes can be saved in by running the **Save Pipeline Code** cell.


## List of Available Nodes

| Category   | Name                       | Brief Description                                                  |
|------------|----------------------------|--------------------------------------------------------------------|
| Analysis   | Great_Expectations         | Grant access to Great Expectations validator                       |
| Analysis   | Process_Blob_to_Blob       | Process blob data; write results to data store                     |
| Analysis   | Process_Blob_to_Table      | Process data; write tabular data results to data lake              |
| Analysis   | Table_to_Blob              | Process tabular data; write data results to data lake              |
| Analysis   | Transform_SQL              | SQL analysis Function                                              |
| Analysis   | Transform_py               | Manipulate data with python                                        |
| App        | AirtableExport             | Export data from Ganymede data lake to Airtable                    |
| App        | AirtableImport             | Import data from Airtable into Ganymede data lake                  |
| App        | Azure_Read                 | Read data from Azure Blob Storage                                  |
| App        | Azure_Write                | Write data to Azure Blob storage                                   |
| App        | Benchling_Event            | Capture events from Benchling for triggering flows                 |
| App        | Benchling_Read             | Read Benchling data into data lake using run tag                   |
| App        | Benchling_Read_Object      | Read Benchling data into data lake using object ID                 |
| App        | Benchling_Write            | Write to Benchling                                                 |
| App        | Benchling_Write_Object     | Write object to Benchling                                          |
| App        | Coda_Write                 | Write Coda tables                                                  |
| App        | S3_Read                    | Ingest data into Ganymede data storage from AWS S3 storage         |
| App        | S3_Write                   | Write data to an S3 bucket                                         |
| App        | Snowflake_Write            | Sync tables in Ganymede data lake to Snowflake                     |
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
| File       | Zip_Read                   | Extract Zip file                                                   |
| Instrument | BMG_Clariostar_CSV         | BMG Clariostar Function                                            |
| Instrument | Instron_Tensile_Read       | Load .is_tens file to data lake                                    |
| Instrument | Profilometer_Read          | Read Mx Profiler data file                                         |
| Instrument | Read_Trios_Rheometer_Excel | Read Trios runs from Excel                                         |
| Instrument | SpectraMax_XML             | Read in XML output from Molecular Devices SpectraMax               |
| Tag        | Benchling_Tag              | Read benchling tag                                                 |
| Tag        | Input_Param                | Input parameter into Flow                                          |
| Test       | GanymedeEcho               | Echo command for Ganymede                                          |
| Test       | Placeholder                | Function for planning Flow                                         |
