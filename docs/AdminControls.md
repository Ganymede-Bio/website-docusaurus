---
id: AdminControls
title: Admin Page
displayed_sidebar: webUiSidebar
---

## Summary

The admin page is where user's access is managed. An example page is show below:

<img alt="image" src="https://storage.googleapis.com/ganymede-bio-website/public/apiServer/AdminPage.png" />


### Access Levels
There are four levels of access, and are set at the tenant level.  These access levels are shown below in order from least to most restrictive. Roles that are higher in the list contain all the access of roles beneath them.  For example, users with Writer privilege have all the privileges of a Runner in addition to the ability to create _flows_.

**Admin**:
    Manage the environment settings, able to manage access of others. Admins are able to create, modify, and execute _flows_.

**Writer**:
    Can create, modify, and execute _flows_.

**Runner**:
    Can execute _flows_, but cannot modify or create new _flows_.

**Reader**:
    Can execute _flows_ and observe environment settings, but not permitted to execute or alter _flows_.
