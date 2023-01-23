---
sidebar_label: Benchling_Event
title: Benchling_Event
displayed_sidebar: nodeSidebar
---

### Node Operator
Copies data from Benchling to Ganymede

Listens for Benchling events, which are shared for processing by the user-defined _execute_
function.  The user-defined function returns a table which is uploaded to the Ganymede data lake.

A subscription in the corresponding Benchling account is required for sending events to
Ganymede's AWS account.
See [Benchling docs](https://docs.benchling.com/docs/events-getting-started#setting-up-a-subscription)
[Benchling events reference](https://docs.benchling.com/docs/events-reference)


### Node Attributes
- **input_filter_path**
  - Input JSONPath used for applying filtering logic
- **input_trigger_flow_name**
  - Input Ganymede flow to trigger from captured event


### Notes
Prior to usage, Benchling must be configured to permit Ganymede access. In addition to
the client's Benchling URL, this requires creating and utilizing secrets with the following
IDs generated in the App setup process via Benchling:
Client_ID
Client_Secret

Please reach out to Ganymede for configuration assistance.
## User-Defined Python
Calls Benchling to get data for flow to trigger


### Parameters
- **object_id** : `str`
    - ID used in Benchling API (e.g. - entity schema ID or notebook entry ID)
- **event_type** : `str`
    - Type of Benchling event
- **benchling_context** : `str`
    - Benchling context variable, which stores Benchling connection information
- **ganymede_context** : `str`
    - Ganymede context variable, which stores flow run metadata


### Returns
`FlowInputs`
  - FlowInputs class for kicking off subsequent Flow


### Notes
This template shows how a target plate could be pulled via the Benchling API
Documentation for the Benchling API can be found here: https://benchling.com/api/reference
Reference for Benchling events can be found here: https://docs.benchling.com/docs/events-reference

benchling_context is an object of class BenchlingContext, consisting of
conn: Benchling connection
run_tag: Benchling ID associated with run tag
display_tag: Displayed value of Benchling run tag
