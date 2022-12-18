---
id: ReleaseNotes
title: Release Notes
displayed_sidebar: releaseSideBar
---

## Release History

Releases at Ganymede occur on weekly on Thursdays.

### Dec 15 2022

**Notebooks improved**
- Loading times should be significantly quicker
- Multiple notebooks can be loaded at once
- Notebooks can be saved consecutively

**File watcher settings**
- Cumulative mode introduced
- Conserve data by no longer overwriting input files. Two modes if detected file matches remote: use existing remote file or generate unique filename then upload

**Function updates**
- Powerpoint write and CSV write now available
- Matplotlib plotting library added to image write Function

### Dec 8 2022

**Data Explorer available**
- Initial addition of SQL Editor in Data Explorer

**Improved input file filtering**
- File input nodes now filter filenames by glob patterns

**Function updates**
- S3 Write now available
- Functions that append to tables now add new columns by default rather than erroring upon schema mismatch


