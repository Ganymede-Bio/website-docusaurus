---
sidebar_label: Benchling_Tag
title: Benchling_Tag
displayed_sidebar: nodeSidebar
---

Associates a Benchling run tag with a Flow run

### Parameters
- **input_tag_benchling** : `str`
  - Benchling run tag to associate with flow run

### Notes
Prior to usage, Benchling must be configured to permit Ganymede access. In addition to
the client's Benchling URL, this requires creating and utilizing secrets with the following
IDs generated in the App setup process via Benchling:
- Client_ID
- Client_Secret