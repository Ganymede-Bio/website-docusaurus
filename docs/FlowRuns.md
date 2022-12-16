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
- **Metadata about the run**: Execution date, start date, and end date of the run. 
- **Logs**: Logs associated with the flow and function run statuses to help users gain more insight and debug. Logs are provided in the following categories: INFO, WARNING, and ERROR.

### Watching a Directory
Ganymede allows users to define a directory that will be watched for new file additions or modifications. These files will be queued to allow running at a later time. This functionality is great for hand-free usage of Ganymede throughout the day in the lab. To setup a directory watcher, navigate to a flow's "Flow View" or "Flow Editor" page. The input node contains all input types that have been defined for that flow. Any inputs that are file types  have a folder icon that is used to select which directory needs to be watched.

<img width="1050" alt="image" src="https://user-images.githubusercontent.com/111307862/207990602-8e25e317-6b96-4d2a-a630-0d87dc5ed237.png">

Prior to setting a watcher, the watcher can be configured by clicking on the gear icon. This produces a modal with two settings. The first is the observation mode.
- Differential mode will only detect files that are created or modified in a directory after the watcher is started
- Cumulative mode will select any files in the directory when the watcher is started, the proceed to detect any new creations or modifications

The second setting is the write mode. When a file is detected by the watcher, regardless of mode, it will upload to our system. If a detected file has the same file name as one that already exists in our system for a given flow and input, there are two ways the watcher can move forward. The first is to queue the file already in our system to run. The second is to upload the file into our system with a unique name.

Once the watcher is configured, close out of the modal and click the file icon to select directory. The watcher will now continue to observe that directory until a user refreshes or closes the site.
