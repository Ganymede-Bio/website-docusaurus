---
id: FlowView
title: Flow View
displayed_sidebar: webUiSidebar
---

The Flow View provides access to running `flows` and viewing run history. 

<img alt="Flow view page" src="https://ganymede-bio.mo.cloudinary.net/apiServer/FlowView_20221216.png" />

To run a `flow`, drop a file into the upload box and click the run button on the left side of the run box.

### Flow-level status

The Run History table provides status information on historical runs.

- **File**: Input files and input parameters associated with `flow` run
- **Run Tag**: Run tags associated with `flow` run. An example run tag would be a Benchling custom entity ID used to reference a table within Benchling.
- **Status**: Run status for a `flow` run instance.  Possible status values are: 
  - Running: Job is in the process of running
  - Success: All `nodes` have run successfully
  - Failed: At least one `node` has failed to run successfully

### Node-level status

Expanding the status box shows a list of nodes with corresponding run statuses indicated by color.  Some common values for colors that you will see are:
  - Red: failure after retries exhausted
  - Light green: currently running
  - Dark green: successful run
  - Gray: queued; awaiting system resource to commence
  - Yellow: failure to run on at least 1 try; awaiting retry
  - Pink: skipped prior to completion; this color may indicate a system resource limitation
  - Orange: dependency for node has failed, preventing this node from being run

:::info

Clicking on the status box associated with a node shows logs associated with execution of the node.

:::
