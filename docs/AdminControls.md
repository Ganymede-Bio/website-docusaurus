---
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

**Admin**:
    Manage the environment settings, able to manage access of others. Admins are able to modify, create, and execute _flows_, as well as have access to modify functions.

**Writer**:
    Can create, run, and modify _flows_. Capable of also editing functions used for _flows_.

**Runner**:
    Can execute _flows_, but cannot modify or create new _flows_.

**Reader**:
    Are able to see _flows_ and environment settings, but not permitted to execute or alter _flows_.

### Access Granularity
Currently the access is granted to the entire environment. Flow-based access is under active development

