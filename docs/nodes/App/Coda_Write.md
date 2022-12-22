---
sidebar_label: Coda_Write
title: Coda_Write
displayed_sidebar: nodeSidebar
---

Writes a table or set of tables to a Coda.io page.
Retrieves one or more tables from Ganymede data lake, which are processed by user-defined
function.  The tables returned by the user-defined function are uploaded to
the specified Coda.io page.

### Parameters
- **output_page_url** : `str`
  - URL of the page where table results will be stored.