---
sidebar_label: AirtableExport
title: AirtableExport
displayed_sidebar: nodeSidebar
---

Reads 1 entire table from Ganymede data lake and uploads to Airtable
A bearer token from Airtable is required to enable Airtable access.
:param input_table_bq: table from data lake to read in
:param airtable_base_id: Base ID used in Airtable API
:param airtable_id: ID used in Airtable API