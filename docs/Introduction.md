---
title: Introduction
sidebar_label: Introduction
displayed_sidebar: apiServerSidebar
---

## Summary

Ganymede enables you to process and associate data and metadata from your lab instruments.  The [platform](https://www.ganymede.bio/#product) provides web-based Python and SQL environments to coordinate data connections and transforms between your instruments, pipelines, and ELN/LIMS/analytical applications.



## Home

The Home page is the starting point for creating new _Flows_, which are series of steps by which data processing occurs on Ganymede.  Logical manipulations are conducted by creating and assembling _Functions_, which contain modular SQL or Python code snippets that enable you to expressively relate your data.

To create a new workflow, click the **New** button in the upper right hand corner of the screen.

 ![Ganymede App Home Page](https://ganymede-bio.mo.cloudinary.net/apiServer/HomeScreen.png)

This exposes a pop-up for you to name your Flow and a cloud infra environment to associate it to.  Each environment has its own dedicated Flow orchestration service, which can be configured to your data processing needs.  

![Ganymede App New Flow Creation](https://ganymede-bio.mo.cloudinary.net/apiServer/HomeNewPipeline.png)

In the sidebar, you'll find the following links:

- **Home**: your homepage, from which you will be able to navigate to previously built Flows and build off of templates within our set of integrated instruments (in progress)
- **Flow Editor**: primary screen for developing and running _Functions_ and _Flows_.
- **Flow Runs**: table for tracking status of current and prior flow runs
