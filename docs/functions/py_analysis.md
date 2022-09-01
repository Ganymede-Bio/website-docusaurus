---
sidebar_label: PyAnalysis
title: PyAnalysis
displayed_sidebar: functionSidebar
---

## PyAnalysis

Python Analysis - Run python-based analysis on the results of a SQL query, storing the results

The content of the SQL query and python function can be edited and saved using the integrated editor functionality.

The python function needs to be named `execute` and will be called with the results of the SQL in a [`pandas.DataFrame`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html).
The results of the function will be saved as a table with the specified name.

```python
def execute(df: pandas.DataFrame) -> pandas.DataFrame:
    ... Your code goes here ...
```

**Arguments**:

- `output_table_analysis_table`: Table name where the function results will be stored.

