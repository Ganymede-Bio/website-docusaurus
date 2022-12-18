---
id: FlowView
title: Flow View
displayed_sidebar: webUiSidebar
---

The Flow View page provides access to running `flows` and viewing run history. 

<img alt="Flow view page" src="https://ganymede-bio.mo.cloudinary.net/apiServer/FlowView_20221216.png" />

### Running a Flow

To run a `flow`, drop a file into the upload box and click the run button on the left side of the run box.

### Watching a Directory

Ganymede allows users to define a directory that can be watched for changes to files that will kick off new flow runs automatically. This functionality is great for automating flows by allowing devices to directly kick them off simply by saving files to a specific location.

To setup a watched directory, navigate to the 'Flow Editor' page and select the flow that should have a directory watcher attached. By clicking the blue folder right of the "Select agent directory" field, a form will appear that will allow a user to specify which directory to watch.

<img width="246" alt="image" src="https://user-images.githubusercontent.com/111307862/194402465-cdec9cc2-5d2c-4618-b78e-2e3db50cc650.png" />

Clicking this option prompts the user to select a directory to be watched. Any new files that are added to this directory or existing files that are updated will now be uploaded to our servers so that a new flow can be kicked off. Users will receive a notification in the top right each time this occurs. This directory will now be watched until the page is refreshed or closed.

### Flow-level status

The Run History table provides status information on historical runs.

- **File**: Input files and input parameters associated with `flow` run
- **Run Tag**: Run tags associated with `flow` run. An example run tag would be a Benchling custom entity ID used to reference a table within Benchling.
- **Status**: Run status for a `flow` run instance.  Possible status values are: 
  - Running: Job is in the process of running
  - Success: All `nodes` have run successfully
  - Failed: At least one `node` has failed to run successfully

### Node-level status

Expanding the status box shows a list of `nodes` with corresponding run statuses indicated by color.  Some common values for colors that you will see are:
  - Red: failure after retries exhausted
  - Light green: currently running
  - Dark green: successful run
  - Gray: queued; awaiting system resource to commence
  - Yellow: failure to run on at least 1 try; awaiting retry
  - Pink: skipped prior to completion; this color may indicate a system resource limitation
  - Orange: dependency for node has failed, preventing this node from being run

:::info

Run logs are accessible by clicking on the colored status box associated with the `node`

:::
