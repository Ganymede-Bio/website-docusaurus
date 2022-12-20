---
sidebar_label: Transform_py
title: Transform_py
displayed_sidebar: nodeSidebar
---

Runs python-based analysis on the results of a SQL query

This Function takes as input the results of the SQL query, which is specified at the top of the Function notebook.
The SQL query results are passed to the execute function as a [`pandas.DataFrame`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html).

The results of this Function are saved as a table with the table name specified *output_table_analysis*.

```python
def execute(df_sql_result: pd.DataFrame) -> pd.DataFrame:
    ... Your code goes here ...
```

**Arguments**:

- `output_table_analysis`: table name where the function results will be stored.

