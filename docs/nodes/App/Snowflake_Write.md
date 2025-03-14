---
sidebar_label: Snowflake_Write
title: Snowflake_Write
displayed_sidebar: webUiSidebar
---

## Node

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
- **snowflake_account**: Snowflake account identifier
- **snowflake_role**: Snowflake role
- **snowflake_warehouse**: Snowflake warehouse

And either:

- **snowflake_private_key**: Snowflake private key

Or:

- **snowflake_password**: Snowflake password

If using a private key, the private key must be saved in Ganymede secrets by pasting in the bytes
of the private key. So if the private key file is `private_key.pem`, paste in the output of
`with open('private_key.pem', 'rb') as f: print(f.read())` without the b'' around the output.
This is necessary because Ganymede does not support multiline secrets.


Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.
