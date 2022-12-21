---
id: FlowView
title: Flow View
displayed_sidebar: webUiSidebar
---

## Running Flows

The Flow View page provides access to running `flows` and viewing run history. To run a `flow`, drop a file into the upload box and click the run button on the left side of the run box.

<img alt="Flow view page" src="https://ganymede-bio.mo.cloudinary.net/apiServer/FlowView_20221220.png" />


### Watching a Directory

Ganymede allows users to define a directory that will be watched for new file additions or modifications. These files will be queued to allow running at a later time. This functionality is great for hand-free usage of Ganymede throughout the day in the lab. To setup a directory watcher, navigate to a flow's "Flow View" or "Flow Editor" page. The input node contains all input types that have been defined for that flow. Any inputs that are file types  have a folder icon that is used to select which directory needs to be watched.

<img width="1050" alt="image" src="https://user-images.githubusercontent.com/111307862/207990602-8e25e317-6b96-4d2a-a630-0d87dc5ed237.png" />
&nbsp;

 Prior to setting a watcher, the watcher can be configured by clicking on the gear icon. This produces a modal with two settings. The first is the observation mode.
 - Differential mode will only detect files that are created or modified in a directory after the watcher is started
 - Cumulative mode will select any files in the directory when the watcher is started, the proceed to detect any new creations or modifications

 The second setting is the write mode. When a file is detected by the watcher, regardless of mode, it will upload to our system. If a detected file has the same file name as one that already exists in our system for a given flow and input, there are two ways the watcher can move forward. The first is to queue the file already in our system to run. The second is to upload the file into our system with a unique name.
<img width="516" alt="image" src="https://user-images.githubusercontent.com/111307862/208987244-9fddd32f-5584-4979-9694-e9c8d8383777.png" />


 Once the watcher is configured, close out of the modal and click the file icon to select directory. The watcher will now continue to observe that directory until a user refreshes or closes the site.
 
## Flow status indicators

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
