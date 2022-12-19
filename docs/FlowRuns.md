---
id: FlowRuns
title: Flow Runs
sidebar_label: Flow Runs
displayed_sidebar: webUiSidebar
---

The Flow Runs tab contains the current status of different _flow_ runs that have been executed.  To view historical runs for a given _flow_, select the _flow_ from the datalist in the header.

<img width="800" alt="image" src="https://ganymede-bio.mo.cloudinary.net/apiServer/FlowRuns_Layout_20221218.png" />

### Observing Flow Status

The run status table displayed consists of the following columns:

- **Flow Name**: Name of the _flow_ executed
- **File**: Input files and input parameters associated with _flow_ run
- **Run Tag**: Run tags associated with _flow_ run. An example run tag would be a Benchling custom entity ID used to reference a table within Benchling.
- **Start date**: Timestamp of when _flow_ was initiated
- **End date**: Timestamp of when _flow_ completed execution
- **Status**: Current status for a _flow_ run instance.  Possible status values are: 
  - **Running**: Job is in the process of running
  - **Success**: All _nodes_ have run successfully
  - **Failed**: At least one _node_ has failed to run successfully

### Observing Node Status

Expanding the status box shows a list of nodes with corresponding run statuses indicated by color.  Some common values for colors that you will see are:
  - **Red**: failure after retries exhausted
  - **Light green**: currently running
  - **Dark green**: successful run
  - **Gray**: queued; awaiting system resource to commence
  - **Yellow**: failure to run on at least 1 try; awaiting retry
  - **Pink**: skipped prior to completion; this color may indicate a system resource limitation
  - **Orange**: dependency for node has failed, preventing this node from being run
