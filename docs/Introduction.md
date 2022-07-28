---
title: Introduction
sidebar_label: Introduction
displayed_sidebar: apiServerSidebar
---

## Summary

API Server enables you to process and associate data and metadata from your lab instruments.  The [platform](https://www.ganymede.bio/#product) provides a web-based Python and SQL environments to coordinate data shape between your instruments, pipelines, and ELN/LIMS/analytical tooling.



## Home

The Home page is the starting point for creating new _flows_, which are series of steps by which data processing occurs on Ganymede.  Logical manipulations are conducted by creating and assembling _operators_, which contain modular SQL or Python code snippets that enable you to expressively relate your data.

To create a new workflow, click the **New** button in the upper right hand corner of the screen.

 ![Ganymede App Home Page](https://ganymede-bio.mo.cloudinary.net/apiServer/HomeScreen.png)

This exposes a pop-up for you to name your flow and a cloud infra environment to associate it to.  Each environment has its own dedicated workflow orchestration service, which can be configured to your data processing needs.  

![Ganymede App New Flow Creation](https://ganymede-bio.mo.cloudinary.net/apiServer/HomeNewPipeline.png)
