---
sidebar_label: Benchling_Write_Object
title: Benchling_Write_Object
displayed_sidebar: nodeSidebar
---

### Node Operator
Writes data stored in Ganymede cloud storage to Benchling custom entity, as specified by input
object names and SQL query

Passes Benchling ID to user-defined function for retrieving Benchling API data.


### Node Attributes
- **src_input_or_output_bucket**
  - Specify "input" or "output" for the Ganymede cloud storage bucket to read from.
  - "input" contains files ingested into a flow; "output" contains processed data.
- **input_object_names**
  - Objects to upload


### Notes
Prior to usage, Benchling must be configured to permit Ganymede access. In addition to
the client's Benchling URL, this requires creating and utilizing secrets with the following
IDs generated in the App setup process via Benchling:
Client_ID
Client_Secret

Please reach out to Ganymede for configuration assistance.
## User-Defined Python
Uploads data to Benchling

If new custom entities are created, returns DataFrame associated with custom entity


### Parameters
- **data** : `Dict[str, bytes]`
    - Data to retrieve from Ganymede cloud storage
- **df_sql_results** : `Optional[Union[pd.DataFrame, List[pd.DataFrame]]]`
    - Tabular results of user-defined SQL query
- **benchling_context** : `BenchlingContext`
    - Benchling context variable, which stores Benchling connection information
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`CustomEntity objects (if created within flow)`