---
sidebar_label: Benchling_Write
title: Benchling_Write
displayed_sidebar: nodeSidebar
---

Writes to Benchling via API
Pulls table from data lake based on SQL query provided, applies user-defined logic,
and uploads processed result to Benchling.  This operator is used in conjunction with
the BenchlingTag operator; this operator writes to the location specified by the Benchling
run tag.

### Notes
Prior to usage, Benchling must be configured to permit Ganymede access. In addition to
the client's Benchling URL, this requires creating and utilizing secrets with the following
IDs generated in the App setup process via Benchling:
- Client_ID
- Client_Secret