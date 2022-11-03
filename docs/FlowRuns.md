---
id: FlowRuns
title: Flow Runs
sidebar_label: Flow Runs
displayed_sidebar: webUiSidebar
---

### Summary

The Flow Runs tab contains the current status of different Flow runs that have been executed.  

<img width="800" alt="image" src="https://user-images.githubusercontent.com/46538575/199794611-fdd3c037-1045-43bf-bf1d-20603acac42d.png" />

### Run Status

The table displayed consists of the following columns:

- **Flow Name**: Name of the Flow that was executed
- **Run ID**: Contains a timestamp of when the Flow was initiated
- **Status**: Current status of the Flow.  There are 4 possible statuses:
  - **Queued**: Flow is waiting on the execution of scheduled jobs to run.
  - **Running**: Flow is currently being run.
  - **Success**: Flow has been completed execution without program error.
  - **Failure**: Flow execution exited prematurely due to program error.

Each row can be expanded for detailed status updates and logs with the following information available:

- **Function run statuses**: The status of each function within a Flow. 
- **Metadata about the run**: Execution date, start date, and end data of the run. 
- **Logs**: Logs associated with the flow and function run statuses to help users gain more insight and debug. Logs are provided in the following categories: INFO, WARNING, and ERROR.

### Watching a Directory
Ganymede allows users to define a directory that can be watched for changes to files that will kick off new flow runs automatically. This functionality is great for automating flows by allowing devices to directly kick them off simply by saving files to a specific location.

To setup a watched directory, navigate to the 'Flow Editor' page and select the flow that should have a directory watcher attached. By clicking the blue folder right of the "Select agent directory" field, a form will appear that will allow a user to specify which directory to watch.

<img width="246" alt="image" src="https://user-images.githubusercontent.com/111307862/194402465-cdec9cc2-5d2c-4618-b78e-2e3db50cc650.png" />

Clicking this option prompts the user to select a directory to be watched. Any new files that are added to this directory or existing files that are updated will now be uploaded to our servers so that a new flow can be kicked off. Users will receive a notification in the top right each time this occurs. This directory will now be watched until the page is refreshed or closed.
