---
sidebar_label: BenchlingEventOperator
title: BenchlingEventOperator
displayed_sidebar: functionSidebar
---

## BenchlingEventOperator

Benchling Event - copy data from Benchling to Ganymede

This function allows you to read files from Benchling for processing via Ganymede based on Events.

A subscription in the corresponding Benchling account is required for sending events to Ganymede's AWS account 
(see Benchling docs here: https://docs.benchling.com/docs/events-getting-started#setting-up-a-subscription).

**Arguments**:

- `output_table_result`: Result table to write to
- `input_event_benchling`: Type of event sent to benchling in this flow

