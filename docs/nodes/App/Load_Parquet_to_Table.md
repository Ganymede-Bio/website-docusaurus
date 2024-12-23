---
sidebar_label: Load_Parquet_to_Table
title: Load_Parquet_to_Table
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Loads parquet files saved in Ganymede storage into data lake tables. Data will be appended to the
data lake table if it already exists, otherwise create a new one.

### Node Attributes

- **table_name**
  - The new or existing table name in the data lake
- **storage_regex**
  - Regex to identify parquet files
