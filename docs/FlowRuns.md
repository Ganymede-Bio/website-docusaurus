---
id: FlowRuns
title: Flow Runs
sidebar_label: Flow Runs
displayed_sidebar: apiServerSidebar
---

### Summary

The Flow Runs tab contains the current status of different flow runs that have been executed.  

![Ganymede App Flow Runs](https://ganymede-bio.mo.cloudinary.net/apiServer/FlowRuns.png)


### Run Status

The table displayed consists of the following columns:

- **Flow Name**: Name of the Flow that was executed
- **Run ID**: Contains a timestamp of when the Flow was initiated
- **Status**: Current status of the Flow.  There are 4 possible statuses:
  - **Queued**: Flow is waiting on the execution of scheduled jobs to run.
  - **Running**: Flow is currently being run.
  - **Success**: Flow has been completed execution without program error.
  - **Failure**: Flow execution exited prematurely due to program error.