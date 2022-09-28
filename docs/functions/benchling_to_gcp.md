---
sidebar_label: BenchlingRead
title: BenchlingRead
displayed_sidebar: functionSidebar
---

## BenchlingRead

Execute Benchling API call and upload results to data lake

Parameters:

**Arguments**:

- `input_benchling_object_id`: Benchling object ID to reference.  This ID can be flexibly used to refer to any Benchling object - Entity, Entry, etc. depending on the exact API call made within the `execute` function.
- `output_table_result`: Name of data lake table to write results to

