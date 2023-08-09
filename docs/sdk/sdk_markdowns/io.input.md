---
sidebar_label: io.input
title: io.input
displayed_sidebar: SDKSidebar
--- 


# io.input



##  `function` retrieve_sql
Runs SQL query as specified for input into execute function
Context is used to render the SQL query if available; if it is
not available, the dictionary passed in render_dict is used.

###  Parameters
- **query_str** : `Union[str, Dict[str, str]]`
    - String or dict of queries indexed by query name
- **context** : `Optional[GanymedeContext]`
    - Ganymede Context variable
- **use_bqstorage_api** : `bool`
    - Whether to use BigQuery Storage API for result download

###  Returns
- Union[pd.DataFrame, Dict[str, pd.DataFrame]]
    - Either DataFrame containing the table queried for, or a dictionary of dataframes for the
    - tables queried, indexed by the query name specified by the user


##  `function` retrieve_files
Retrieves most recent version of file(s)

###  Parameters
- **context** : `GanymedeContext`
    - GanymedeContext to use for pulling file(s)
- **file_names** : `Union[str, List[str]]`
    - File or list of files to retrieve
- **input_or_output_bucket** : `str, by default "input"`
    - Either "input" or "output" to indicate bucket to retrieve files from
- **current_flow_flag** : `bool, by default True`
    - Whether current flow is referenced in file retrieval, or all flows in environment
- **run_id** : `Optional[int]`
    - Run ID to filter for.  If set to specific run ID, filter to include records based on
    - specified run ID.

###  Returns
- Dict[str, str]
    - Dictionary of files keyed by file name


##  `function` list_tables
Retrieves a listing of available tables from the Ganymede data lake.  By default, all tables
associated with current flow are returned.

###  Parameters
- **context** : `GanymedeContext`
    - Ganymede context used for listing tables
- **current_flow_flag** : `bool, by default True`
    - Indicator flag for whether to pull tables associated with current flow or across all flows
- **current_run_id** : `Optional[int]`
    - Run ID to filter for.  If set to specific run ID, filter to include records based on
    - specified run ID.

###  Returns
- `pd.DataFrame`
    - DataFrame containing flow name, table name, timestamp, and table columns associated with
    - each table in environment
- `Raises`
- `Exception`
    - If the table list from the data lake could not be retrieved.


##  `function` list_tables_current_flow
Wrapper for list_tables


##  `function` list_tables_all
Retrieves a listing of all tables in environment.

###  Parameters
- **context** : `GanymedeContext`
    - Ganymede context used for listing tables

###  Returns
- `pd.DataFrame`
    - DataFrame containing flow name, table name, timestamp, and table columns associated with
    - each table in environment
- `Raises`
- `Exception`
    - If the table list from the data lake could not be retrieved.


##  `function` list_tables_current_run
Retrieves tables from current run

###  Parameters
- **context** : `GanymedeContext`
    - Ganymede context for listing tables

###  Returns
- `pd.DataFrame`
    - DataFrame containing list of files, associated flows, and updated date


##  `function` list_files
Retrieves a list of available files from Ganymede cloud storage.  By default, lists all files
in input bucket associated with the current flow.

###  Parameters
- **context** : `GanymedeContext`
    - Ganymede context used for listing tables
- **input_or_output_bucket** : `str, optional, by default "input"`
    - The bucket to retrieve files from. Can be either 'input', 'output', or a
    - path to a specific bucket
- **flow_name** : `str, optional, by default None`
    - Flow name to filter for.  If set to specific flow name, filter to include records based on
- **current_flow_flag** : `bool, by default True`
    - Indicator flag for whether to pull tables associated with current flow or across all flows
- **current_run_id** : `Optional[int]`
    - Run ID to filter for.  If set to specific run ID, filter to include records based on
    - specified run ID.

###  Returns
- `pd.DataFrame`
    - DataFrame containing list of files, associated flows, and updated date
- `Raises`
- `ValueError`
    - If the value of input_or_output_bucket is not either "input" or "output"


##  `function` list_files_current_flow
Wrapper for list_files call


##  `function` list_files_current_run
Retrieves a listing of available tables associated with the Run ID specified
in Ganymede context.

###  Parameters
- **context** : `GanymedeContext`
    - Ganymede context used for listing tables
- **input_or_output_bucket** : `str, by default "input"`
    - The bucket to retrieve files from. Can be either 'input', 'output', or a
    - path to a specific bucket

###  Returns
- `pd.DataFrame`
    - DataFrame containing list of files and updated date associated with current run


##  `function` list_files_all
List all files in environment

###  Parameters
- **context** : `GanymedeContext, by default None`
    - Ganymede context used for listing tables
- **flow_name** : `str, optional, by default None`
    - Flow name to filter for, if input
- **input_or_output_bucket** : `str, by default "input"`
    - The bucket to retrieve files from. Can be either 'input', 'output', or a
    - path to a specific bucket

###  Returns
- `pd.DataFrame`
    - DataFrame containing list of files and updated date associated with current run