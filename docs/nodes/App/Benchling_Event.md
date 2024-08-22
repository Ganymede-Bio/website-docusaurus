---
sidebar_label: Benchling_Event
title: Benchling_Event
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Copies data from Benchling to Ganymede

Listens for Benchling events, which are shared for processing by the user-defined _execute_
function.  The user-defined function returns a table which is uploaded to the Ganymede data lake.

A subscription in the corresponding Benchling account is required for sending events to
Ganymede's AWS account.
See [Benchling docs](https://docs.benchling.com/docs/events-getting-started#setting-up-a-subscription)
and [Benchling events reference](https://docs.benchling.com/docs/events-reference)

### Node Attributes

- **input_filter_path**
  - Input [JSONPath](https://jsonpath.com) used for applying filtering logic
- **input_trigger_flow_name**
  - Input Ganymede flow to trigger from captured event

### Notes

Usage requires configuration of a
[Benchling application](https://docs.benchling.com/docs/getting-started-benchling-apps#getting-started)
in the relevant Benchling tenant.

Prior to usage, the secrets below must be configured in your Ganymede environment.  More information
on acquiring these credentials can be found [here](https://docs.benchling.com/docs/authentication).
- **benchling_url**: URL for Benchling tenant; has form https://\<tenant\>.benchling.com
- **benchling_app_client_id**: Client_ID; has form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
- **benchling_client_secret**: Client_Secret; has form cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.

### Example

The Event Node configuration below would be executed each time the entity ts_abc1234 was seen, perform processing as defined in the _execute_ function, and trigger the HT_Screening Flow with parameters specified in the _execute_ function.

- **input_filter_path**: detail.entity.schema.id=='ts_abc1234'
- **input_trigger_flow_name**: HT_Screening

## User-Defined Python

Calls Benchling to get data for flow to trigger

### Parameters

- **object_id** : `str`
    - ID used in Benchling API (e.g. - entity schema ID or notebook entry ID)
- **event_type** : `str`
    - Type of Benchling event (e.g. - v2.entity.registered)
- **benchling_context** : `BenchlingContext`
    - Benchling context variable, which stores Benchling connection information
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata

### Returns

`FlowInputs | NodeReturn`
  if FlowInputs object is returned; flow inputs for kicking off subsequent Flow
  if NodeReturn object is returned; NodeReturn object for storing data

### Notes

Documentation for the Benchling API can be found here: https://benchling.com/api/reference
Reference for Benchling events can be found here: https://docs.benchling.com/docs/events-reference

benchling_context is an object of class BenchlingContext, consisting of
- **conn**: Benchling connection
- **run_tag**: Benchling ID associated with run tag
- **display_tag**: Displayed value of Benchling run tag