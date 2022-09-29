---
sidebar_label: BenchlingOperator
title: BenchlingOperator
displayed_sidebar: functionSidebar
---

## BenchlingOperator

Pulls table from Ganymede data lake and uploads result to Benchling

**Arguments**:

- `input_table_data`: Table in Ganymede data lake that serves as source for what is uploaded to Benchling.  All records from table are ingested and passed to the `execute` function.

