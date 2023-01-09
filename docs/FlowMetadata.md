---
id: FlowMetadata
title: Context / Flow Metadata
displayed_sidebar: webUiSidebar
---

## Template Variables

Template Variables enable access to variables relevant to _flow_ runs using [Jinja templating](https://jinja.palletsprojects.com/en/3.1.x/).  This can be useful, for example, for specifying an output table on a node parameter that contains the timestamp of the _flow_ run.

These variables can be accessed in Node Attributes and user-defined SQL queries by wrapping variable names with two braces.  

In this section, we'll use the _flow_ below to demonstrate concepts associated with templating and context in Ganymede.

<img alt="demo flow with input parameter" src="https://ganymede-bio.mo.cloudinary.net/apiServer/Input_Param_20230108.png"/>

This _flow_ ingests and processes a CSV file using an input parameter named **experiment_id**.  The processed output is written to a CSV file with a filename that contains the timestamp of the run.

### Available template variables

- **run_id**: Timestamp in ms when _flow_ was kicked off; guaranteed to be unique per _flow_ run
- **dag.dag_id**: _Flow_ name

## Context Variables

### Ganymede Context

The _ganymede_context_ object enables access to _flow_-specific metadata, input parameters, and input files in user-defined Python.  The code shows the user-defined python found within `Transform_py` in the _flow_ shown above.  The flow run timestamp, filename uploaded, and **experiment_id** flow input parameter are incorporated into the input CSV as new columns and written to the data lake.

```python
import pandas as pd
from typing import Union, Dict, List

def execute(
    df_sql_result: Union[pd.DataFrame, List[pd.DataFrame]], ganymede_context=None
) -> Union[pd.DataFrame, Dict[str, pd.DataFrame]]:
    """Add run_id and input parameter as columns to Pandas DataFrame
    """

    df_out = df_sql_result.copy()
    df_out['__run_id'] = ganymede_context.run_id
    df_out['__input_file_name'] = ganymede_context.get_param('CSV_Read', 'csv')
    df_out['experiment_id'] = ganymede_context.get_param('Input_Param', 'param')

    return df_out
```

#### Ganymede Context class variables
- **run_id**: `str`
  - Timestamp in ms when _flow_ was kicked off; guaranteed to be unique per _flow_ run.

#### Ganymede Context class methods
- **get_param(step_name: `str`, param_name: `str`) -> `str`**:
  - Method to obtain input parameter or input filename in _flow_