---
sidebar_label: api.benchling.io.generic_read
title: api.benchling.io.generic_read
displayed_sidebar: SDKSidebar
--- 


# api.benchling.io.generic_read



##  `function` get_id_from_dropdown_name
Get dropdown id from dropdown summary info identified by name. Can pass a dropdown id look up
within the corresponding dropdown summary.


###  Parameters

- **dropdown_name** : `str`
    - Dropdown name to identify id for  
- **benchling_context** : `BenchlingContext`
    - Benchling context object  
- **\*args**
    - Optional positional arguments to pass to list method of benchling_sdk dropdown service  
- **\*\*kwargs**
    - Optional keyword arguments to pass to get_dropdown_summary_list such as dropdown_id (int)  
    and arguments to pass to benchling_sdk dropdown service


###  Returns

- `str`
    - dropdown id associated with dropdown name. Raises an error if dropdown id is not found  


##  `function` get_dropdown_summary_list
Get dropdown summary info for each page in benchling_context.conn.dropdowns.list().
A page is of the form: benchling_sdk.helpers.pagination_helpers.PageIterator


###  Parameters

- **benchling_context** : `BenchlingContext`
    - Benchling context object  
- **\*args**
    - Optional positional arguments to pass to list method of benchling_sdk dropdown service  
- **dropdown_id** : `Optional[str]`
    - Optional benchling dropdown id. If none, list all dropdowns. If given, list all dropdowns of  
    that id.
- **\*\*kwargs**
    - Optional keyword arguments to pass to list method of benchling_sdk dropdown service  


###  Returns

- `List[dict]`
    - Flattened list of dropdown summaries converted to dicts from  
    benchling_sdk.models.DropdownSummary