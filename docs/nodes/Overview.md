---
id: NodeOverview
title: Node Overview
displayed_sidebar: nodeSidebar
sidebar_label: Node Overview
---

## Nodes

_Nodes_ provide template structure for performing data extraction, processing, and API communication.  The table below offers a synopsis of functionality associated with nodes.

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

