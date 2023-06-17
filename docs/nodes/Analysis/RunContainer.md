---
sidebar_label: RunContainer
title: RunContainer
displayed_sidebar: nodeSidebar
---

### Node Description
Run a container workload.  To use this operator,

1. Specify files to retrieve in SECTION 1 of the associated entrypoint.sh script.
Files are retrieved from the output bucket associated with the flow,
and are stored in /app/input/ in the container.

2. Run desired shell scripts in SECTION 2 of the associated entrypoint.sh script.
Store outputs to save in /app/output/ in the container.

Any files stored in /app/output/ are saved to Ganymede cloud storage.


### Node Attributes
- **container_name**
  - Name of the container to execute


### Notes
Prior to usage, the following secrets must be configured in your Ganymede environment:
- **artifact_registry**: Container registry associated with the container

Prior to usage, the specified container needs to be built.