---
sidebar_label: benchling.io.generic_read
title: benchling.io.generic_read
displayed_sidebar: SDKSidebar
--- 


# benchling.io.generic_read


## `function` get_id_from_dropdown_name
  
Get dropdown id from dropdown summary info identified by name. Can pass a dropdown id look up  
within the corresponding dropdown summary.  
  
### Parameters  
  
**dropdown_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Dropdown name to identify id for  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object  
**\*args**  
&nbsp; &nbsp; &nbsp; &nbsp; Optional positional arguments to pass to list method of benchling_sdk dropdown service  
**\*\*kwargs**  
&nbsp; &nbsp; &nbsp; &nbsp; Optional keyword arguments to pass to get_dropdown_summary_list such as dropdown_id (int)  
&nbsp; &nbsp; &nbsp; &nbsp; and arguments to pass to benchling_sdk dropdown service  
  
### Returns  
  
`str`  
&nbsp; &nbsp; &nbsp; &nbsp; dropdown id associated with dropdown name. Raises an error if dropdown id is not found  


## `function` get_dropdown_summary_list
  
Get dropdown summary info for each page in benchling_context.conn.dropdowns.list().  
A page is of the form: benchling_sdk.helpers.pagination_helpers.PageIterator  
  
### Parameters  
  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object  
**\*args**  
&nbsp; &nbsp; &nbsp; &nbsp; Optional positional arguments to pass to list method of benchling_sdk dropdown service  
**dropdown_id** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Optional benchling dropdown id. If none, list all dropdowns. If given, list all dropdowns of  
&nbsp; &nbsp; &nbsp; &nbsp; that id.  
**\*\*kwargs**  
&nbsp; &nbsp; &nbsp; &nbsp; Optional keyword arguments to pass to list method of benchling_sdk dropdown service  
  
### Returns  
  
`List[dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Flattened list of dropdown summaries converted to dicts from  
&nbsp; &nbsp; &nbsp; &nbsp; benchling_sdk.models.DropdownSummary  
