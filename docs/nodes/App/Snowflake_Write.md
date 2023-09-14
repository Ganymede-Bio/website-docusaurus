---
sidebar_label: Snowflake_Write
title: Snowflake_Write
displayed_sidebar: nodeSidebar
---

### Node Description
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
Prior to usage, the following secrets must be configured in your Ganymede environment:
- **snowflake_user**: Snowflake user name
- **snowflake_password**: Snowflake password
- **snowflake_account**: Snowflake account identifier
- **snowflake_role**: Snowflake role
- **snowflake_warehouse**: Snowflake warehouse

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab. If you need
assistance, please don't hesitate to reach out to Ganymede.