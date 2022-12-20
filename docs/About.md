---
title: About
sidebar_label: Introduction
displayed_sidebar: webUiSidebar
---

## Why Ganymede?

Ganymede provides cloud-based managed infrastructure that enables users to process instrument data and associate analysis with sample management software.  The [platform](https://www.ganymede.bio/#product) provides web-based Python and SQL environments to coordinate data connections and transforms between your instruments, data pipelines, and ELN/LIMS/analytical applications.  

Code written in Ganymede is version-controlled and deployed to a workflow orchestration platform to provide an execution environment common among platform users within an organization-specific tenant.  Data inputs and outputs are captured, versioned, and made available to users via a SQL-queryable interface.

For computational scientists and software engineers, Ganymede allows you to spend more time developing sharable code and analyses without setting up cloud infrastructure to host and execute your code.  

For wet lab scientists and process engineers, Ganymede enables you to spend more time focusing on experimental context and less time coordinating data and analyses between different software applications.

For lab managers and principals, Ganymede offers an environment to observe data and synthesize insights from source materials.

**In short, Ganymede reduces barriers to technical communication in modern, data-driven enterprises.**

### How Does Ganymede Work?

![Ganymede example flow](https://ganymede-bio.mo.cloudinary.net/apiServer/FlowImage_Annotated_20221216.png)

Developers author _flows_, which are programs represented as directed graphs comprised of user-editable _nodes_.  By assembling and editing SQL/Python within _nodes_, users can ingest data, communicate with third-party APIs, and send data to spreadsheets and documents in an environment shared with their colleagues, without needing to customize cloud infrastructure to do so.  

### Inside a node

<img width="300" alt="Example node layout" src="https://ganymede-bio.mo.cloudinary.net/apiServer/Operator_Conceptual_Layout_20221216.png" />

The core unit of code that performs processing in Ganymede is the _node_.  The _node_ type specifies the _operator_ code, template SQL code, and template Python code.

- **operator**: performs I/O with different systems and provides ergonomic handoffs for user-defined components of the _node_.  Depending on the _node), data may be retrieved from either a Ganymede data lake, Ganymede cloud storage, third-party API, or input data files.  In the example above, the _operator_ retrieves input data in the `userSQL()` call based on the user-defined SQL query and uploads processed data to the Ganymede data lake in the `storeDataFrame(res)` call.  

:::note

Parameters specified on _nodes_ on the Flow Editor page are interpreted by the _operator_ logic within a _node_.

:::

- **Function SQL code**: User-modifiable SQL query that specifies the data to deliver as input to the user-defined function.  This component exists for _nodes_ that take tabular data as input.
- **Function Python code**: User-modifiable Python code for the processing performed on data.  Nodes inherently start with template code to provide a starting point for users; for example, the template code for the CSV read _node) reads in a CSV file into a Pandas DataFrame.

### Behind the scenes

As _flows_ and _nodes_ are saved, both the graph structure and modified code are saved to a Git repository backing _flows_ within an environment.  The updated code is also copied to a cloud-based workflow orchestration platform, which provides the environment to execute _flows_.  Data inputs and outputs are timestamped upon each run, and accessible via the Data Explorer within Ganymede.

The cloud infrastructure supporting data storage and workflow orchestration are unique per tenant instance of Ganymede.

:::info

By separating code into distinct _nodes_, different _nodes_ can be run in parallel.  Edges between _nodes_ specify dependencies in the execution of different _nodes_.

:::

