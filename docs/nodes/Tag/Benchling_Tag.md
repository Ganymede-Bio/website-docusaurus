---
sidebar_label: Benchling_Tag
title: Benchling_Tag
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Associates a Benchling run tag with a Flow run

### Node Attributes

- **input_tag_benchling**
  - Benchling run tag to associate with flow run

### Notes

Usage requires configuration of a
[Benchling application](https://docs.benchling.com/docs/getting-started-benchling-apps#getting-started)
in the relevant Benchling tenant.

Prior to usage, the secrets below must be configured in your Ganymede environment.  More information
on acquiring these credentials can be found [here](https://docs.benchling.com/docs/authentication).
- **benchling_url**: URL for Benchling tenant; has form https://\<tenant\>.benchling.com
- **benchling_app_client_id**: Client ID for Benchling Application
- **benchling_client_secret**: Client Secret for Benchling Application

Secrets can be configured by clicking on your username in the upper-right hand of the Ganymede
application, then selecting Environment Settings and navigating to the Secrets tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.
