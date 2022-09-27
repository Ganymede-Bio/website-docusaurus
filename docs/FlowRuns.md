---
id: FlowRuns
title: Flow Runs
sidebar_label: Flow Runs
displayed_sidebar: webUiSidebar
---

### Summary

The Flow Runs tab contains the current status of different Flow runs that have been executed.  

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

### Watching a Directory
Ganymede allows users to define a directory that can be watched for changes to files that will kick off new flow runs automatically. This functionality is great for automating flows by allowing devices to directly kick them off simply by saving files to a specific location.

To setup a watched directory, navigate to the 'Flow Editor' page and select the flow that should have a directory watcher attached. The file uploader will now have two options as shown below. The option on the left enables watching a directory. 

<img width="312" alt="image" src="https://user-images.githubusercontent.com/111307862/192582099-97bb6e39-1726-4fb9-b09d-8c76a6f9796e.png">

Clicking this option prompts the user to select a directory to be watched. Any new files that are added to this directory or existing files that are updated will now be uploaded to our servers so that a new flow can be kicked off. Users will receive a notification in the top right each time this occurs. This directory will not be watched until the page is refreshed or closed.
