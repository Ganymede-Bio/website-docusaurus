---
sidebar_label: SciNote_API
title: SciNote_API
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

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
  - Semicolon-delimited list of objects to read from Ganymede cloud storage.

### Notes

Prior to usage, the following secrets must be configured in your Ganymede environment:
- **scinote_server_url**: SciNote Server Name
- **scinote_api_uid**: SciNote Client ID
- **scinote_api_secret**: SciNote Client Secret
- **scinote_redirect_uri**: Scinote Redirect URI
- **scinote_auth_code**: SciNote Auth Code

- **scinote_access_token**: SciNote Access Token
- **scinote_refresh_token**: SciNote Refresh Token
- **scinote_access_token_created_at**: SciNote Access Token Created At
- **scinote_access_token_expires_in**: SciNote Access Token Expires In

All secrets listed above other than the SciNote Auth should be provided by SciNote.
To get the SciNote Auth Code:
1. Clone the [SciNote Python API Client repo](https://github.com/scinote-eln/scinote-python-api-client-example)
2. Update settings.json in the repo with your configuration, which should contain server_url,
api_uid, api_secret, and redirect_uri.
3. Run get_auth_code.py and paste URL into your browser to get scinote_auth_code
4. Run example_list_projects.py to get scinote_access_token, scinote_refresh_token,
scinote_access_token_created_at, and scinote_access_token_expires_in

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.

## User-Defined Python

Example demonstrating access to SciNote API

### Parameters

- **df_sql_result** : `pd.DataFrame | pd.DataFrame`
    - Table(s) to retrieve from data lake
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`NodeReturn`
Object containing data to store in data lake and/or file storage.

### Notes

See [SciNote API](https://scinote-eln.github.io/scinote-api-v1-docs/) for more details on API usage.