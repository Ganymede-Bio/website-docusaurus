---
id: Welcome
title: Welcome to Ganymede
sidebar_label: Welcome
displayed_sidebar: webUiSidebar
slug: /
---

<img alt="Ganymede hero image" src="https://ganymede-bio.mo.cloudinary.net/apiServer/HeroImage_20230110.png"/>

Ganymede is cloud-based managed infrastructure that lets life science companies execute their data strategy.  

**Scientists** derive insights using Ganymede by having key data in one place, so they can spend more time on analysis and less time on repetitive data entry.  

**Engineers** have a single, easy-to-use repository for all code and code history, without needing to set up bespoke cloud infrastructure for hosting and executing code.

**Executives** have data-driven dashboards, which provide clear visibility for planning and making resource allocation decisions.

**Operations** teams can observe organizational inefficiencies, so teams can prioritize which bottlenecks to resolve.

The [platform](https://www.ganymede.bio/#product) incorporates a [flow-based programming](https://en.wikipedia.org/wiki/Flow-based_programming) paradigm in which _nodes_ that require flexibility have user-editable SQL and Python to tune how the _node_ processes data.  This provides flexibility for data connections and transforms between instruments, data pipelines, and ELN/LIMS/analytical applications.  

Code written in Ganymede is version-controlled and deployed to a workflow orchestration platform to provide an execution environment common among platform users within an organization-specific tenant.  Data inputs and outputs are captured and versioned, with tabular data made available to users via a SQL interface.

**In short, Ganymede reduces barriers to technical communication in modern, data-driven enterprises.**

### How does Ganymede work?

![Ganymede example flow](https://ganymede-bio.mo.cloudinary.net/apiServer/FlowImage_Annotated_20221216.png)

Developers author _flows_, which are programs represented as directed graphs comprised of user-editable _nodes_.  By assembling and editing SQL/Python within _nodes_, users can ingest data, communicate with third-party APIs, and read/write data to spreadsheets and documents.  

### Inside a node

<div class="text--center">
<img width="400" alt="Example node layout" src="https://ganymede-bio.mo.cloudinary.net/apiServer/Operator_Conceptual_Layout_20230108.png" />
</div>

The core unit that performs processing in Ganymede is the [_node_](./nodes/Overview.md).  The _node_ type specifies the _operator_ code, template SQL code, and template Python code.

- **Operator**: performs I/O between different systems and the user-defined components of a _node_.  Depending on the _node_, data may be retrieved from or sent to 
  - a SQL database
  - cloud storage 
  - third-party API 
  - flat data files
  
In the layout shown above, the execute function _operator_ retrieves input data in the `userSQL()` call based on the user-defined SQL query and uploads processed data to the Ganymede data lake in the `storeDataFrame(res)` call.  

:::note

Node attributes specified on _nodes_ on the Flow Editor page are interpreted by the _operator_ logic within a _node_.

:::

- **Node SQL code**: User-modifiable SQL query that specifies the data to deliver as input to the user-defined _function_ within a _node_.  This component exists for _nodes_ that take tabular data as input.
- **Node Python code**: User-modifiable Python code for the processing performed on data.  Nodes inherently start with template code to provide a starting point for users; for example, the template code for the CSV read _node_) reads in a CSV file into a Pandas DataFrame.

### Behind the scenes

As _flows_ and _nodes_ are saved, both the _flow_ structure and modified code are saved to a Git repository.  Updated code is uploaded to a cloud-based workflow orchestration platform, which provides the environment to execute _flows_.  Data inputs and outputs are timestamped upon each run and are accessible via the Data Explorer within Ganymede.

The cloud infrastructure supporting data storage and workflow orchestration are unique per tenant instance of Ganymede.

:::info running in parallel

By separating code into distinct _nodes_, different _nodes_ can be run in parallel.  _Edges_ between _nodes_ specify the order by which different _nodes_ are run.

:::


<br />
Features of Ganymede that interact with users' file system are not compatible with Mozilla Firefox or Internet Explorer.
