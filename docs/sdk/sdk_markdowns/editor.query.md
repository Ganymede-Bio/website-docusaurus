---
sidebar_label: editor.query
title: editor.query
displayed_sidebar: SDKSidebar
--- 


# editor.query



##  `function` compare_df_to_table
Validates a Pandas DataFrame against a Ganymede data lake table.

###  Parameters
- **context** : `GanymedeContext`
    - Ganymede Context associated with environment
- **df** : `pd.DataFrame`
    - Pandas DataFrame to validate
- **table** : `str`
    - Ganymede data lake table
- **diffs_only** : `bool, optional`
    - Whether to return only the differences between the DataFrame and the data lake table,
    - by default True

###  Returns
- pd.DataFrame, optional
    - Validation table indicating column and schema differences