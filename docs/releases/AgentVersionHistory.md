---
id: AgentVersionHistory
title: Agent Change Log
displayed_sidebar: releaseSideBar
---

This page contains a summary of key version updates for the Ganymede [Agent](../app/agents/Agent.mdx).  Since the individual instances of Agents (connections) are not updated when the Agent is updated, this page can be helpful for determining the capabilities of specific connections previously installed.

## 5.4.0

- Stability improvements in file capture
- Bug fixes for robustness in [applying tags in Agents](../sdk/markdowns/AgentSDK#function-add_file_tag_to_fileparam)
- Improved robustness in capturing Connection configuration in UI
- Bug fix for robustness in Agent full update

## 5.3.0

- Add capability to store Windows service identity for Connections

## 5.2.0

- Add capability for using AWS as base storage provider for Agent

## 5.1.31

- Emails can be sent from Agents using the [notify function in the Agent SDK](../sdk/markdowns/AgentSDK.mdx)

## 5.1.28

- Reserved keywords [check_interval and stable_time](../app/agents/Agent#reserved-variables) added to the file watcher agent added to facilitate specifying tradeoff between file acquisition stability and responsiveness

## 5.1.7

- [Notify log level](../app/agents/AgentMonitoring#connection-notifications) added to Agent SDK

## 5.1.6

- Connection name and agent version used as default path for installation
- Improved Agent logging upon file changes, and when local PC is unable to connect to Ganymede Cloud

## 5.1.0

- Full update support added for Linux Agents
- get_secret added to Agent SDK
- Added OS check to elucidate compatibility

## 5.0.8

- Agent build time and executable size have been reduced by 50%
- Configuration updates should be more responsive
- In order to perform the version update follow the steps below:
    - Do not remote update an agent from version 4 to 5 without first reviewing the code
    - Full uninstall and reinstallation should work without issue
    - If the agent is less than 4.7.16: You will need to run a full update or reach out to your Ganymede SSE for help
    - If the agent is at version 4.7.16 or greater: Any references to `ganymede_sdk` will need to be replaced with `agent_sdk`.
    - Once the update has been made to the processor, trigger an agent version update to 5.0.8

## 4.10.0

- Fixed deadlock bug associated with recursive calls for logging
- Fixed bug that prevented Flow execution for multi-input Nodes
- Improved type checking of objects returned from user-defined code

## 4.9.0

- Ganymede database tables can be accessed using Ganymede SDK
- File watching is now event-driven rather than polling-based
- Improved responsiveness of file existence check on Ganymede

## 4.8.0

- Connection logs are now systematically recorded on method calls to ease debugging
- Connection versions can now be remotely updated for non-major updates
- Windows Agent Connection names can now have spaces
- Performance improvements made to checking for file existence in Ganymede

## 4.7.0

- Agent error messages are now more concise

## 4.6.0

- Windows Agent installer file sizes reduced by ~30%

## 4.5.0

- Connection configuration can be updated remotely from the Ganymede Cloud.  For example, the input path being watched by the Agent can be updated remotely.
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
