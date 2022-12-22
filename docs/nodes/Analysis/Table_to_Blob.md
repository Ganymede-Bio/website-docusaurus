---
sidebar_label: Table_to_Blob
title: Table_to_Blob
displayed_sidebar: nodeSidebar
---

Processes data table(s) into blobs

Retrieves table(s) from Ganymede data lake, processes via user-defined function,
and writes result to storage bucket.  The user-defined function returns key-value
pairs in which keys specify file path in cloud storage and values are objects to store.