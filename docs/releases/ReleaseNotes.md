---
id: ReleaseNotes
title: Release Notes
displayed_sidebar: releaseSideBar
---

## Release Notes

### Dec 15 2022

**Notebooks improved**
- Loading times should be significantly quicker
- Multiple notebooks can be loaded at once
- Notebooks can be saved consecutively

**File watcher settings**
- Cumulative mode introduced
- Conserve data by no longer overwriting input files. Two modes if detected file matches remote: use existing remote file or generate unique filename then upload

**Jinja templating in SQL queries**
- SQL queries have access to Airflow variables
