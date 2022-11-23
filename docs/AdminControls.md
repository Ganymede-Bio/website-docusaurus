id: AdminControls
title: Admin Page
displayed_sidebar: webUiSidebar
---

## Summary

The admin page is where user's access is managed. An example page is show below:

<img width="384" alt="image" src="https://storage.googleapis.com/ganymede-bio-website/public/apiServer/AdminPage.png" />


### Access Levels
There are four levels of access. They are written in order from least restrictive to most. Roles that are higher 
in the list contain all the access of roles beneath them (admin has all the capabilities of writer but not vise versa)
Admin:
    Manage the environment settings, able to manage access of others. Able to modify, create ,and execute flows. Also have access to modify functions.

Writer:
    Cam create, run, and modify flows. Capable of also editing functions used for flows.

Runner:
    Allowed to execute the items in the environment/flow. Cannot modify or create new flows.

Reader:
    Only allowed to see flows and environment settings. Not allowed to execute or alter any flows.

### Access Granularity
Currently the access is granted to the entire environment. Flow based access is under active development

### Inviting Users
This is still under progress but for now, please contact Ganymede Support if you wish to add new users.