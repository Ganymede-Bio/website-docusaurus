---
sidebar_label: api.benchling.utils.mini_utils
title: api.benchling.utils.mini_utils
displayed_sidebar: SDKSidebar
--- 


# api.benchling.utils.mini_utils



##  `function` flatten_nested_lists
This method will flatten nested lists while preserving the original order.


###  Parameters

- **lists** : `Iterator[Union[List, List[list]]]`
    - Nested lists  
- **benchling_filter** : `Optional[Dict]`
    - Optional filter to apply to the flattened list  
- **as_dict** : `Optional[bool]`
    - Optional flag to return each item as a dictionary. Default is True  


###  Returns

- `list`
    - Flattened version of the nested lists  


##  `function` remove_empties_from_result_dict
Removes empty values from a dictionary.


###  Parameters

- **result_dict** : `dict`
    - The dictionary from which to remove empty values.  


###  Returns

- `dict`
    - The updated dictionary with empty values removed.  


###   Examples
```python

>>> data = {'name': 'John', 'age': 30, 'city': ''}
>>> remove_empties_from_result_dict(data)
{'name': 'John', 'age': 30}
```


##  `function` clean_df_for_benchling
Fill null values to to pass Benchling validations


###  Parameters

- **df_in** : `pd.DataFrame`
    - Input DataFrame  
- **string_fill_na** : `str`
    - Value to replace NA values with, default is ""  
- **numeric_fill_na** : `Optional[int]`
    - Optional value to replace numeric na with. Default is None. Will raise a ValueError if  
    numeric NA's are detected


###  Returns

- `pd.DataFrame`
    - Sanitized DataFrame  


##  `function` serialize_benchling
Serialize dictionary for transmission to Benchling


###  Parameters

- **recs_to_serialize** : `Dict`
    - Dictionary containing records to serialize  


###  Returns

- Union[benchling_sdk.helpers.serialization_helpers.D, Unset]
    - Serialized dictionary  