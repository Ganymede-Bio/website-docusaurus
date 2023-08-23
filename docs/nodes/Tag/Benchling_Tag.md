---
sidebar_label: Benchling_Tag
title: Benchling_Tag
displayed_sidebar: nodeSidebar
---

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
- **benchling_url**: URL for Benchling tenant
- **benchling_app_client_id**: Client_ID; has form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
- **benchling_client_secret**: Client_Secret; has form cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Secrets can be configured by clicking on the gear icon in the upper-right hand of the Ganymede
application, then selecting Settings and navigating to the Settings tab.  If you need
assistance, please don't hesitate to reach out to Ganymede.