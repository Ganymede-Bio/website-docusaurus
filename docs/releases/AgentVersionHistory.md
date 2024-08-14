---
id: AgentVersionHistory
title: Agent Change Log
displayed_sidebar: releaseSideBar
---

This page contains a summary of key version updates for the Ganymede [Agent](../app/agents/Agent.mdx).  Since the individual instances of Agents (connections) are not updated when the Agent is updated, this page can be helpful for determining the capabilities of specific connections previously installed.

## 4.8.0

- Connection logs are now systematically recorded on method calls to ease debugging
- Connection versions can now be remotely updated for non-major updates
- Ganymede database tables can be accessed using Ganymede SDK
- Windows Agent Connection names can now have spaces
- Performance improvements made to checking for file existence in Ganymede

## 4.7.0

- Agent error messages are now more concise

## 4.6.0

- Windows Agent installer file sizes reduced by ~30%

## 4.5.0

- Connection configuration can be updated remotely from the Ganymede Cloud.  For example, the input path being watched by the Agent can be updated remotely.

## 4.4.12

- Added status redundancy check on separate thread to ensure accuracy of connection status and improve connection stability
- Status checks performed over 443 rather that via ICMP

## 4.4.0

- Version metadata added to logs and status pings

## 4.2.0

- New virtualization agent type added for running flow action

## 4.1.0

- Added method to permanently stop and disable a service in cases where Agent service requires manual intervention

## 3.3.9

- Python version updated from 3.9 to 3.11

## 3.2.0

- Local log files sent to Ganymede Cloud on start and Windows service events, to enable remote troubleshooting and monitoring
- Closed connections marked as Shutdown rather than Disconnected in the UI

## 3.0.2

- Health check added to Agent to check for network connectivity before attempting normal functionality

## 2.0.0

- File tags can be added to files in the processor code using Ganymede SDK
- Agent configuration can include file tags, which are incorporated on all files uploaded from the configured machine

## 1.0.0

- Changes in Agent processor code and Agent configuration can be remotely updated
- Virtualization Agent types introduced (for delivering data to and from Virtualization environments)

## beta

- Initial Agent release
- Agents are able to trigger processing based on file existence on a local machine, file presence in Ganymede cloud, or a cron schedule
- Upon trigger, Agents upload files to Ganymede or execute flows on Ganymede
