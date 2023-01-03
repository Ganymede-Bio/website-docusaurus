---
id: FlowView
title: Flow View
displayed_sidebar: webUiSidebar
---

## Running Flows

The Flow View page provides access to running _flows_ and viewing run history. To run a _flow_, drop a file into the upload box and click the **Run** button on the left side of the run box.

<img alt="Flow view page" src="https://ganymede-bio.mo.cloudinary.net/apiServer/FlowView_20221220.png" />


### Watching a Directory

Ganymede allows users to define a directory that will be watched for new file additions or modifications. These files will be queued to allow running at a later time. This functionality is great for hand-free usage of Ganymede throughout the day in the lab. To setup a directory watcher, navigate to the Flow View or Flow Editor page using the left sidebar. The input node contains all input types that have been defined for that _flow_. Any inputs that are file types have a folder icon that is used to select which directory needs to be watched.

<img width="1152" alt="image" src="https://user-images.githubusercontent.com/111307862/209197862-f5da2518-710c-4cc6-bd8f-fa6353c49154.png" />
&nbsp;

The watcher can be configured by clicking on the gear icon. 

This produces a modal with two settings, the observation mode and the write mode.

The observation mode specifies which files are captured:
 - Differential mode will only detect files that are created or modified in a directory after the watcher is started
 - Cumulative mode will select any files in the directory when the watcher is started, the proceed to detect any new creations or modifications

The write mode describes how Ganymede Cloud handles observed files.  When the watcher detects a file, it will upload to our system independent of its mode. If a detected file has the same file name as one that already exists in our system for a given flow and input, there are two ways the watcher can move forward. The first is to queue the file already in our system to run. The second is to upload the file into our system with a unique name.
<img width="516" alt="image" src="https://user-images.githubusercontent.com/111307862/208987244-9fddd32f-5584-4979-9694-e9c8d8383777.png" />

Once the watcher is configured, close out of the modal and click the file icon to select directory. The watcher will now continue to observe that directory until a user refreshes or closes the site or select the 'X' icon that appears when watching a file.
 
## Flow status indicators

### Flow-level status

The Run History table provides status information on historical runs.

- **File**: Input files and input parameters associated with _flow_ run
- **Run Tag**: Run tags associated with _flow_ run. An example run tag would be a Benchling custom entity ID used to reference a table within Benchling.
- **Status**: Run status for a _flow_ run instance.  Possible status values are: 
  - Running: Job is in the process of running
  - Success: All _nodes_ have run successfully
  - Failed: At least one _node_ has failed to run successfully

### Node-level status

Expanding the status box shows a list of _nodes_ with corresponding run statuses indicated by color.  Some common values for colors that you will see are:
  - Red: failure after retries exhausted
  - Light green: currently running
  - Dark green: successful run
  - Gray: queued; awaiting system resource to commence
  - Yellow: failure to run on at least 1 try; awaiting retry
  - Pink: skipped prior to completion; this color may indicate a system resource limitation
  - Orange: dependency for node has failed, preventing this node from being run

:::info

Run logs can be accessed by clicking on the colored status box associated with the _node_

:::
