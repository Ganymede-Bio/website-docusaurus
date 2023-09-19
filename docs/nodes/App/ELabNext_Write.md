---
sidebar_label: ELabNext_Write
title: ELabNext_Write
displayed_sidebar: nodeSidebar
---

### Node Description
Writes a table or set of tables to an eLabNext entry.

Retrieves one or more tables from Ganymede data lake, which are processed by user-defined
function.  The tables returned by the user-defined function are uploaded to
the specified eLabNext page.

[Documentation for the eLabNext API](https://www.elabjournal.com/docs/api/index#!/Experiment_Sections/ExperimentSection_CreateSection)


### Node Attributes
- **src_input_or_output_bucket**
  - Specify "input" or "output" for the Ganymede cloud storage bucket to read from.
  - "input" contains files ingested into a flow; "output" contains processed data.
- **input_object_names**
  - Objects to read from Ganymede cloud storage


### Notes
Prior to usage, the following secrets must be configured in your Ganymede environment:
- **elabnext_base_url**: eLabNext Base URL
- **elabnext_user**: eLabNext Username
- **elabnext_pass**: eLabNext Password

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.
## User-Defined Python
Example demonstrating submission of user-defined SQL query into eLabNext


### Parameters
- **df_sql_result** : `Union[pd.DataFrame, List[pd.DataFrame]]`
    - Table(s) to retrieve from data lake
- **data_input** : `Dict[str, bytes]`
    - Objects to retrieve from cloud storage
- **base_url** : `str`
    - Base URL for eLabNext to retrieve data from / post data to
- **token** : `str`
    - token used for API access
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`NodeReturn`
  Object containing data to store in data lake and/or file storage.


### Notes
See [eLabNext API](https://www.elabjournal.com/docs/api/index) for more details on API usage.