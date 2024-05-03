---
sidebar_label: benchling.utils.mini_utils
title: benchling.utils.mini_utils
displayed_sidebar: SDKSidebar
--- 


# benchling.utils.mini_utils


## `function` flatten_nested_lists
  
This method will flatten nested lists while preserving the original order.  
  
### Parameters  
  
**lists** : `Iterator[Union[List, List[list]]]`  
&nbsp; &nbsp; &nbsp; &nbsp; Nested lists  
**benchling_filter** : `Optional[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Optional filter to apply to the flattened list  
**as_dict** : `Optional[bool]`  
&nbsp; &nbsp; &nbsp; &nbsp; Optional flag to return each item as a dictionary. Default is True  
  
### Returns  
  
`list`  
&nbsp; &nbsp; &nbsp; &nbsp; Flattened version of the nested lists  


## `function` remove_empties_from_result_dict
  
Removes empty values from a dictionary.  
  
### Parameters  
  
**result_dict** : `dict`  
&nbsp; &nbsp; &nbsp; &nbsp; The dictionary from which to remove empty values.  
  
### Returns  
  
`dict`  
&nbsp; &nbsp; &nbsp; &nbsp; The updated dictionary with empty values removed.  
  
### Example  
  
```python  
>>> data = \{'name': 'John', 'age': 30, 'city': ''\}  
>>> remove_empties_from_result_dict(data)  
\{'name': 'John', 'age': 30\}  
```

## `function` clean_df_for_benchling
  
Fill null values to to pass Benchling validations  
  
### Parameters  
  
**df_in** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Input DataFrame  
**string_fill_na** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Value to replace NA values with, default is ""  
**numeric_fill_na** : `Optional[int]`  
&nbsp; &nbsp; &nbsp; &nbsp; Optional value to replace numeric na with. Default is None. Will raise a ValueError if  
&nbsp; &nbsp; &nbsp; &nbsp; numeric NA's are detected  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; Sanitized DataFrame  


## `function` serialize_benchling
  
Serialize dictionary for transmission to Benchling  
  
### Parameters  
  
**recs_to_serialize** : `Dict`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary containing records to serialize  
  
### Returns  
  
`Union[benchling_sdk.helpers.serialization_helpers.D, Unset]`  
&nbsp; &nbsp; &nbsp; &nbsp; Serialized dictionary  


## `function` check_if_exists
  
Check if an entity exists in Benchling  
  
### Parameters  
  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object  
**name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of the entity to check  
**type** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Type of entity to check, default is "custom_entity"  
  
### Returns  
  
`Optional`  
`benchling_sdk.models`  
&nbsp; &nbsp; &nbsp; &nbsp; The entity if it exists, otherwise None  
  
  


## `function` check_task_status
  
Check the status of a task in Benchling  
  
### Parameters  
  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object  
**task_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the task to check  
  
### Returns  
  
`str`  
&nbsp; &nbsp; &nbsp; &nbsp; Status of the task  


## `function` divide_list_into_chunks
  
Divide a list into chunks of size n  
  
### Parameters  
  
**list_to_chunk** : `list`  
&nbsp; &nbsp; &nbsp; &nbsp; List to divide  
**int**  
&nbsp; &nbsp; &nbsp; &nbsp; Size of the chunks  
  
### Returns  
  
`Iterator[List]`  
&nbsp; &nbsp; &nbsp; &nbsp; Iterator of lists of size n  


## `class` ChemicalStructure
  
Custom ChemicalStructure class to allow Benchling to call to_dict on a dictionary  
