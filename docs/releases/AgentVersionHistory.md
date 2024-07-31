---
id: AgentVersionHistory
title: Agent Version History
displayed_sidebar: releaseSideBar
---

This page contains a summary of key version updates for the Ganymede [Agent](../connectivity/Agent.mdx).  Since the individual instances of Agents (connections) are not updated when the Agent is updated, this page can be helpful for determining the capabilities of specific connections previously installed.

## 4.7.0

- Connection versions can be updated remotely from the Ganymede Cloud

## 4.6.0

- Recoverable errors will result in Agent restart rather than shutdown
- Address null type exception thrown for Cloud Watcher Agents if no glob pattern is specified

## 4.5.0

- Connection configuration can be updated remotely from the Ganymede Cloud.  For example, the input path being watched by the Agent can be updated remotely.

## 4.4.12

- Added status redundancy check added to ensure accuracy of connection status

## 4.4.0

- Version metadata added to logs and status pings

## 4.2.0

- New virtualization agent type added for running flow action

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

## 0

- Initial Agent release
- Agents are able to trigger processing based on file existence on a local machine, file presence in Ganymede cloud, or a cron schedule
- Upon trigger, Agents upload files to Ganymede or execute flows on Ganymede
