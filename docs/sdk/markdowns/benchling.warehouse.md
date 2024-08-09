---
sidebar_label: benchling.warehouse
title: benchling.warehouse
displayed_sidebar: SDKSidebar
--- 


# benchling.warehouse


## `function` connect_benchling_warehouse
  
Construct a conneciton object to the Benchling warehouse database  
  
### Parameters  
  
**Ganymede**  
&nbsp; &nbsp; &nbsp; &nbsp; Ganymede object  
  
### Returns  
  
**conn** : `pyscopg2.extensions.connection`  
&nbsp; &nbsp; &nbsp; &nbsp; Connection object to the benchling warehouse  
  
### Raises  
  
**PermissionDenied**  
&nbsp; &nbsp; &nbsp; &nbsp; The secrets do not exist  
