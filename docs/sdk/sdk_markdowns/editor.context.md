---
sidebar_label: editor.context
title: editor.context
displayed_sidebar: SDKSidebar
--- 


# editor.context



##  `class` AttrDict
Dictionary that sets all attributes to be key value pairs in dictionary


##  `class` GanymedeContext
Grants access to ganymede context dict for use without Flow

###  Parameters
- **input_file_name** : `str`
    - name of input file
- **input_file_name_suffix** : `str`
    - file extension of input file
- **run_id** : `str`
    - timestamp of Airflow run, used to identify run
- **task_id** : `str`
    - id of Airflow task
- **inputs** : `Dict[str, str]`
    - contents of input files, keyed by parameter type (e.g. - csv)
- **params** : `Dict[str, str]`
    - config object


##  `class` MockGanymedeContext
Mock Ganymede Context for testing within editor notebooks;
pulls flow inputs and run ID from last flow run if available by default


##  `class` BenchlingContext
conn is a Benchling Connection


##  `class` MockBenchlingContext
Generates a mock Benchling context given a Benchling API Key creds


##  `function` MockBenchlingContext.__init__
Generates BenchlingContext object; will use client ID + client secret if configured in
environment and URL+API key not explicitly specified; otherwise, uses API Key to connect

###  Parameters
- **url** : `str, optional`
    - URL for Benchling tenant to use for auth if provided, by default None
- **api_key** : `str, optional`
    - API Key for Benchling tenant to use for auth if provided, by default None
- **mock_ganymede_context** : `MockGanymedeContext, optional`
    - Ganymede context to use for getting Benchling run tag if provided, by default None


##  `function` ganymede_context_from_env
Creates GanymedeContext from environment variable containing Airflow context passed to container

###  Parameters
- **context_env_var** : `str`
    - name of environment variable containing Airflow context

###  Returns
- `GanymedeContext`
    - GanymedeContext object