---
sidebar_label: Snowflake_Write
title: Snowflake_Write
displayed_sidebar: nodeSidebar
---

### Node Operator
Sync Ganymede data lake tables to Snowflake

Specify semicolon-delimited tables to sync to Snowflake


### Node Attributes
- **data_lake_tables**
  - Ganymede data lake tables to sync
- **snowflake_database**
  - Snowflake database to write to
- **snowflake_schema**
  - Schema within snowflake database to write to


### Notes
Prior to usage, Snowflake must be configured to permit Ganymede access with the following:
Snowflake login credentials
Snowflake account
Snowflake role
Snowflake warehouse

Please reach out to Ganymede for configuration assistance.