---
id: Notifications
title: Notifications
displayed_sidebar: webUiSidebar
---

The Notifications page provides real time updates on the status of flow saves and runs. 

<img width="800" alt="image" src="https://ganymede-bio.mo.cloudinary.net/apiServer/Notifications_20221218.png" />
<br />
<br />

The notifications table provides the following information per event.

- **Type**: Events of type _SAVE_ are created when `flows` are saved and events of type _RUN_ are created when flows are run.
- **Flow Name**: Name of the `flow` that was saved or run. Search bar is provided for filtering on specific flows.
- **Date / Time**: The date and time the event was created.
- **Status**: The following are the status types:
    - **Processing**: Event was kicked off and is processing. Processing _SAVE_ events will disable users from running flows as the entire environment is saved and deployed when a user saves a flow. Once all _SAVE_ events are out of the _Processing_ state, flow runs will be available again.
    - **Completed**: Event completed successfully. 
    - **Flow Error**: Only possible for events of type _RUN_. This means a flow run failed and the detailed logs can be viewed on the [Flow Runs page](FlowRuns.md).
    - **Error**: An unexpected error occurred on our end. Users should retry the operation or contact Ganymede Support for assistance.
    - **Timeout**: We were unable to get the status of the event. Users should check the _Flow_ that triggered the event for the latest status or try again.
- **User**: User login triggering the associated event


