---
id: FlowRuns
title: Flow Runs
sidebar_label: Flow Runs
displayed_sidebar: webUiSidebar
---

### Summary

The Flow Runs tab contains the current status of different Flow runs that have been executed.  

<img width="800" alt="image" src="https://user-images.githubusercontent.com/46538575/199794611-fdd3c037-1045-43bf-bf1d-20603acac42d.png" />

### Observing Flow Status

The run status table displayed consists of the following columns:

- **Flow Name**: Name of the `flow` that was executed
- **File**: Input files and input parameters associated with `flow` run
- **Run Tag**: Run tags associated with `flow` run. An example run tag would be a Benchling custom entity ID used to reference a table within Benchling.
- **Start date**: Timestamp of when `flow` was initiated
- **End date**: Timestamp of when `flow` completed execution
- **Status**: Current status for a `flow` run instance.  Possible status values are: 
  - Running: Job is in the process of running
  - Success: All `nodes` have run successfully
  - Failed: At least one `node` has failed to run successfully

### Observing Node Status

Expanding the status box shows a list of nodes with corresponding run statuses indicated by color.  Some common values for colors that you will see are:
  - Red: failure after retries exhausted
  - Light green: currently running
  - Dark green: successful run
  - Gray: queued; awaiting system resource to commence
  - Yellow: failure to run on at least 1 try; awaiting retry
  - Pink: skipped prior to completion; this color may indicate a system resource limitation
  - Orange: dependency for node has failed, preventing this node from being run
