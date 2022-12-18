---
id: ReleaseNotes
title: Release Notes
displayed_sidebar: releaseSideBar
---

## Release History

Ganymede releases generally occur on Thursdays each week.

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

### Dec 1 2022

**Flow editor improvements**
- File watcher now available for flows that ingest multiple files
- Notifications table now contains email addresses to indicate user execution operation

**Function updates**
- Function for specifying flow-level input parameter now available

### Nov 28 2022

**Bug fixes**
- Patch applied to fix flows taking multiple files
- Patch applied to suppress authorization error notifications on page load

### Nov 23 2022

**Platform updates**
- Admin page now allows configurable user management
- Flows can now take multiple file inputs

**Notification improvements**
- Additional error notifications sent to user when Ganymede service experiences an unexpected error
- Number of unread notifications for flow runs and saves displayed in sidebar

**Function updates**
- Benchling tag and Coda write Functions now available

### Nov 17 2022

**Platform updates**
- Admin page now allows administrators to configure access
- Function list added to Flow Editor sidebar

**Function updates**
- Benchling authentication transitioned from API key to OAuth
- Benchling read Function can now output multiple tables
- Flow run id captured as timestamp in ISO format

### Nov 10 2022

**Platform updates**
- Notifications page now available, displaying all flow run and environment deploy events
- UI for header bar updated

**Function updates**
- Azure read/write Functions now available

### Nov 3 2022

**Platform updates**
- Information, warning, and error logs are now available for each flow run at the Function level on the Flow View and Flow Run pages

**UI changes to Flow Editor**
- Layout button now located in the sidebar on the Flow Editor page, available from the View button in the header
- New Functions can now be found in the sidebar rather than from a dropdown list
- Node handles are now larger and easier to grab

**Function updates**
- Excel write and image write Functions now available
- Template code for Excel read cleaned up to handle single and multi-tab files

### Oct 27 2022

**Platform updates**
- Flow nodes and edges are larger and easier to select
- Function run statuses are now displayed on Flow View page

**Function updates**
- PyAnalysis and TransformSQL functions can now take multiple SQL queries as input, specified as a semicolon-delimited string
- CSVRead, TransformSQL, and PyAnalysis nodes can now output multiple tables
- Ganymede context variable now passed into Functions, which allow Functions to access run_id timestamp and name of file ingested in Flow
- Table with numeric column names are now prefixed with '__var' when uploading to data lake

### Oct 20 2022

**Function updates**
- CSV read Function now takes in a dictionary of {filename: file_contents} rather than file_contents, to enable association between input file name and file content

### Oct 13 2022

**Platform updates**
- Environment selection is no longer required; selected Flows are persisted across page navigations
- Platform can now listen for Benchling events, and users can specify Benchling association using the Benchling run tag dropdown
- Flows can now be set to production mode, which defaults all Flows to write to the data lake in append-only mode

**Function updates**
- FCS load Function refactored to allow user-modifiable code

### Oct 6 2022

**Platform updates**
- List of Flows added to Home page, with search functionality and ability to delete flows from page
- Flow Runs page now contains the input file used to kick off runs

**File watcher updates**
- Input files on the Flow Editor page are now listed in a run queue, with icons that indicate if files were manually uploaded or added via the file watcher
- Files uploaded via the file watcher now queue rather than run automatically

### Sep 29 2022

**Platform updates**
- Users have ability to watch local directory for file changes

### Sep 22 2022

**Platform updates**
- Notebook launch errors now displayed as a notification
- Nodes can no longer be deleted with the backspace key to prevent accidental removal

**Function updates**
- Benchling read Function now available

