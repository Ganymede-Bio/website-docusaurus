---
sidebar_label: Benchling_Read_Object
title: Benchling_Read_Object
displayed_sidebar: nodeSidebar
---

Reads Benchling data specified by input Benchling ID string.

Executes Benchling API call(s) based on user-defined function and upload results to data lake

Passes Benchling ID to user-defined function for retrieving Benchling API data.
The user-defined function returns one or more DataFrames, which are uploaded as tables into
the Ganymede data lake.


### Parameters
- **input_string_id** : `str`
  - Benchling API ID, specified on node
- **output_table_results** : `str`
  - Name of data lake table to write results to


### Notes
Prior to usage, Benchling must be configured to permit Ganymede access. In addition to
the client's Benchling URL, this requires creating and utilizing secrets with the following
IDs generated in the App setup process via Benchling:
- Client_ID
- Client_Secret