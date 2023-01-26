---
id: ReleaseNotes
title: Release Notes
displayed_sidebar: releaseSideBar
---

## Release History

Ganymede releases generally occur on Thursdays each week.

### Jan 26 2023

**UI Updates**
- Clearer navigation between files and flow runs
- Users can filter flows by file run via Files page

### Jan 19 2023

**Node Editor Templates**
- Additional template cleanups performed

**Node Updates**
- Node to trigger _flow_ upon Benchling entity registration created

### Jan 12 2023

**Node Editor Templates**
- Additional template cleanups performed

**Data Explorer**
- SQL editor UI updated

**File upload**
- If a file uploaded from user’s local machine already exists in Ganymede, user has ability to choose to use the existing file in Ganymede, or to store a new version with a unique ID added to file name

### Jan 6 2023

**Node Editor Templates**
- Node editor templates updated; most notebooks for nodes that ingest files now have a cell for ingesting files in the notebook.

**Node updates**
- Node for performing validation using Great Expectations added

### Dec 22 2022

**Platform administration**
- Data environment secrets are now user-manageable by environment Admins

**Data Explorer**
- SQL Editor is now available

### Dec 15 2022

**Notebooks improved**
- Loading times should be significantly quicker
- Multiple notebooks can be loaded at once
- Notebooks can be saved consecutively

**File watcher settings**
- Cumulative mode introduced
- Conserve data by no longer overwriting input files. Two modes if detected file matches remote: use existing remote file or generate unique filename then upload

**Node updates**
- Powerpoint write and CSV write now available
- Matplotlib plotting library added to image write node

### Dec 8 2022

**Data Explorer available**
- Initial addition of SQL Editor in Data Explorer

**Improved input file filtering**
- File input nodes now filter filenames by glob patterns

**Node updates**
- S3 Write now available
- Nodes that append to tables now add new columns by default rather than erroring upon schema mismatch

### Dec 1 2022

**Flow editor improvements**
- File watcher now available for flows that ingest multiple files
- Notifications table now contains email addresses to indicate user execution operation

**Node updates**
- Node for specifying flow-level input parameter now available

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

**Node updates**
- Benchling tag and Coda write nodes now available

### Nov 17 2022

**Platform updates**
- Admin page now allows administrators to configure access
- Node list added to Flow Editor sidebar

**Node updates**
- Benchling authentication transitioned from API key to OAuth
- Benchling read node can now output multiple tables
- Flow run id captured as timestamp in ISO format

### Nov 10 2022

**Platform updates**
- Notifications page now available, displaying all flow run and environment deploy events
- UI for header bar updated

**Node updates**
- Azure read/write _nodes_ now available

### Nov 3 2022

**Platform updates**
- Information, warning, and error logs are now available for each flow run at the _node_ level on the Flow View and Flow Run pages

**UI changes to Flow Editor**
- Layout button now located in the sidebar on the Flow Editor page, available from the View button in the header
- New _nodes_ can now be found in the sidebar rather than from a dropdown list
- Node handles are now larger and easier to grab

**Node updates**
- Excel write and image write _nodes_ now available
- Template code for Excel read cleaned up to handle single and multi-tab files

### Oct 27 2022

**Platform updates**
- Flow nodes and edges are larger and easier to select
- _Node_ run statuses are now displayed on Flow View page

**Node updates**
- PyAnalysis and TransformSQL _nodes_ can now take multiple SQL queries as input, specified as a semicolon-delimited string
- CSVRead, TransformSQL, and PyAnalysis nodes can now output multiple tables
- Ganymede context variable now passed into _nodes_, which allow _nodes_ to access run_id timestamp and name of file ingested in flow
- Table with numeric column names are now prefixed with '__var' when uploading to data lake

### Oct 20 2022

**Node updates**
- CSV read _node_ now takes in a dictionary of {filename: file_contents} rather than file_contents, to enable association between input file name and file content

### Oct 13 2022

**Platform updates**
- Environment selection is no longer required; selected flows are persisted across page navigations
- Platform can now listen for Benchling events, and users can specify Benchling association using the Benchling run tag dropdown
- Flows can now be set to production mode, which defaults all flows to write to the data lake in append-only mode

**Node updates**
- FCS load _node_ refactored to allow user-modifiable code

### Oct 6 2022

**Platform updates**
- List of flows added to Home page, with search functionality and ability to delete flows from page
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

**Node updates**
- Benchling read _node_ now available

