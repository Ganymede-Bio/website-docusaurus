---
title: Overview
sidebar_label: Overview
displayed_sidebar: webUiSidebar
---

## What is Ganymede

Ganymede provides cloud-based managed infrastructure that enables users to process instrument data and associate analysis with sample management software.  The [platform](https://www.ganymede.bio/#product) provides web-based Python and SQL environments to coordinate data connections and transforms between your instruments, data pipelines, and ELN/LIMS/analytical applications.  

Code written in Ganymede is version-controlled and deployed to a workflow orchestration platform to provide an execution environment common among platform users within an organization-specific tenant.  Data inputs and outputs are captured, versioned, and made available to users via a SQL-queryable interface.

For computational scientists and software engineers, Ganymede allows you to spend more time developing sharable code and analyses without setting up cloud infrastructure to host and execute your code.  

For wet lab scientists and process engineers, Ganymede enables you to spend more time focusing on experimental context and less time coordinating data and analyses between different software applications.

For lab managers and principals, Ganymede offers an environment to observe data and synthesize insights from source materials.

## How Does Ganymede Work

![Ganymede Flow](https://ganymede-bio.mo.cloudinary.net/apiServer/FlowImage_Annotated_20221216.png)

Developers author _flows_, which are programs represented as directed graphs comprised of user-editable _nodes_.  By assembling and editing SQL/Python within _nodes_, users can ingest data, communicate with third-party APIs, and send data to spreadsheets and documents in an environment shared with their colleagues, without needing to customize cloud infrastructure to do so.  

As _flows_ and _nodes_ are saved, both the graph structure and modified code are saved to a Git repository backing _flows_ within an environment.  The updated code is also copied to a cloud-based workflow orchestration platform, which provides the environment to execute _flows_.

By hosting code on a cloud-based workflow management platform, scientists, process engineers, and other _flow_ end users can execute applications without needing to configure applications.  

## Navigation

In the sidebar, you'll find the following links in the top section:

- **Home**: Home screen used to access _flows_ to run
- **Flow Editor**: Editor for modifying _flows_ and their underlying code
- **Flow Runs**: Table for tracking status of current and prior _flow_ runs
- **Data Explorer**: SQL editor for querying tabular data created within _flows_
- **Files**: File browser for accessing snapshotted input and output data processed through _flows_
- **Notifications**: Activity (e.g. - _flow_ saves, _flow_ runs, etc.) associated with Ganymede tenant environment

And the following links at the bottom part of the sidebar:

- **Docs**: Ganymede's documentation available at [https://docs.ganymede.bio/](https://docs.ganymede.bio/) 
- **Admin**: Panel for configuring levels of access for different individuals
- **Log Out**: Log out from Ganymede cloud