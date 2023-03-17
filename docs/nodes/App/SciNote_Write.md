---
sidebar_label: SciNote_Write
title: SciNote_Write
displayed_sidebar: nodeSidebar
---

### Node Operator
Writes a table or set of tables to an SciNote entry.

Retrieves one or more tables from Ganymede data lake, which are processed by user-defined
function.  The tables returned by the user-defined function are uploaded to
the specified SciNote page.

[Documentation for the SciNote API](https://scinote-eln.github.io/scinote-api-v1-docs/)


### Node Attributes
- **src_input_or_output_bucket**
  - Specify "input" or "output" for the Ganymede cloud storage bucket to read from.
  - "input" contains files ingested into a flow; "output" contains processed data.
- **input_object_names**
  - Objects to read from Ganymede cloud storage


### Notes
Prior to usage, the following secrets must be configured in your Ganymede environment:
- **scinote_server_url**: SciNote Server Name
- **scinote_api_uid**: SciNote Client ID
- **scinote_api_secret**: SciNote Client Secret
- **scinote_redirect_uri**: Scinote Redirect URI
- **scinote_auth_code**: SciNote Auth Code

All secrets listed above other than the SciNote Auth should be provided by SciNote.
To get the SciNote Auth Code:
1. Clone the [SciNote Python API Client repo](https://github.com/scinote-eln/scinote-python-api-client-example)
2. Update settings.json in the repo with your configuration.
3. Run get_auth_code.py and paste URL into your browser

Secrets can be configured by clicking on the gear icon in the upper-right hand of the Ganymede
application, then selecting Settings and navigating to the Settings tab.  If you need
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


### Notes
See [SciNote API](https://scinote-eln.github.io/scinote-api-v1-docs/) for more details on API usage.