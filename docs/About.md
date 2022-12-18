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

**In short, Ganymede reduces the barriers to technical communication in data-driven enterprises.**

## How Does Ganymede Work?

![Ganymede Flow Example](https://ganymede-bio.mo.cloudinary.net/apiServer/FlowImage_Annotated_20221216.png)

Developers author `flows`, which are programs represented as directed graphs comprised of user-editable `nodes`.  By assembling and editing SQL/Python within `nodes`, users can ingest data, communicate with third-party APIs, and send data to spreadsheets and documents in an environment shared with their colleagues, without needing to customize cloud infrastructure to do so.  

As `flows` and `nodes` are saved, both the graph structure and modified code are saved to a Git repository backing `flows` within an environment.  The updated code is also copied to a cloud-based workflow orchestration platform, which provides the environment to execute `flows`.  Data inputs and outputs are timestamped upon each run, and accessible via the Data Explorer within Ganymede.
