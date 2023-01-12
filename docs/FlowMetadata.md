---
id: FlowMetadata
title: Context / Flow Metadata
displayed_sidebar: webUiSidebar
---

Template variables and context variables are used for accessing _flow_ metadata that is known at runtime.  Some examples of this metadata are:
- timestamp associated with run
- filename of file processed in run
- input parameter specified by end user

In this section, we'll reference the _flow_ below to demonstrate concepts associated with templating and context in Ganymede.  

<img alt="demo flow with input parameter" src="https://ganymede-bio.mo.cloudinary.net/apiServer/Input_Param_20230108.png"/>

The example _flow_ performs the following operations:
- ingests a CSV file in the CSV_Read node
- adds run metadata in the Transform_py node
- writes the resulting file to a CSV file in the CSV_Write node

## Template Variables

Template variables allow access to flow metadata in _node_ attributes and user-defined SQL queries through [Jinja templates](https://jinja.palletsprojects.com/en/3.1.x/).  These variables can be accessed in Node Attributes and user-defined SQL queries by wrapping the template variable name with two braces.

In the example _flow_ shown above, the output of the CSV_Write node uses the **run_id** template variable to add a timestamp to the CSV file output.

### Available template variables

- **run_id**: Timestamp in ms when _flow_ was kicked off; guaranteed to be unique per _flow_ run
- **dag.dag_id**: name of _flow_
- **operator**: name of _node_
- **task_id**: type of _node_ (e.g. - CSV_Read or Transform_Py)

## Context Variables

Context variables are used to access _flow_ metadata in user-defined Python.  The Ganymede context variable is available for all nodes that have user-defined Python functions, while other context variables are specific to 3rd party APIs.

### Ganymede Context

The _ganymede_context_ object enables access to _flow_-specific metadata, input parameters, and input files in user-defined Python functions.  

The code below demonstrates how this object can be used.  This code corresponds to the user-defined function found within the Transform_py _node_.  The flow run timestamp, filename uploaded, and **experiment_id** flow input parameter are incorporated into the input CSV as new columns and written to the data lake.

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
- **get_param(node_name: `str`, parameter_type: `str`) -> `str`**:
  - Method to obtain input parameter or input filename in _flow_.  Node name can be found in the indigo bar at the top of each node.  Parameter type generally references the file extension for nodes that ingest files, and can be found on the Flow Editor as values with green background and white text.

### Benchling Context

The _benchling_context_ object is used to access the Benchling API, and can only be found on nodes that make calls to Benchling.  

As an example, suppose that user had registered a custom entity named `plasmid-GFP-TAG`, which was assigned the Benchling custom entity id `ts_DF578lfK`.  If selected by the user during _flow_ execution, the **run_tag** in this example would be `ts_DF578lfK` and the **display_tag** would be `plasmid-GFP-TAG`

#### Benchling Context class variables
- **conn**: Benchling connection
- **run_tag**: Benchling ID associated with run tag selected by user during run
- **display_tag**: Benchling name of run tag selected by user during run