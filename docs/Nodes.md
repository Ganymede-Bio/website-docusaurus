---
id: Nodes
title: Nodes
displayed_sidebar: webUiSidebar
---

:::info

Understanding this section is critical for developing on the Ganymede platform; the customizability of underlying _nodes_ sets Ganymede apart from many other low-code and no-code solutions that represent logic in graphs.

:::

_Nodes_ are customizable blocks of code with default functionality specified by its type.

<img width="384" alt="image" src="https://ganymede-bio.mo.cloudinary.net/apiServer/EditNodeBefore.png"/>

The image above shows how a _node_ is represented on the Flow Editor page; the _node_ consists of:
- **node name**: located in the header of the _node_
- **pencil icon**: button for editing the user-editable code backing the function
- **input and output parameter(s)**: in this example, the _node_ has 1 input parameter named _sql_result_ which has _example_ as its value
- **edit button**: unlocks the _node_ for modifying node name, changing node parameter values, or deletion

<img width="300" alt="Example node layout" src="https://ganymede-bio.mo.cloudinary.net/apiServer/Operator_Conceptual_Layout_20221216.png" />

The functionality of a _node_ is represented by the diagram above.  Input/output parameters are passed to the operator associated to the _node_, which is responsible for I/O with respect to the _node_.  User-defined SQL (if relevant) determines the data associated with processing, and user-defined python (if relevant) performs the processing.

```python
# Code for retrieving table from Ganymede data lake
# Corresponds to blue box labeled "User-defined SQL" in diagram above

from ganymede.editor import query

query_sql = """
  SELECT * FROM (SELECT 'sample', 'query');
"""

# Dry run query
query.dry_run(query_sql)

# Retrieve SQL query results into pandas DataFrame
result_df = query.results(query_sql)
```

Clicking on the edit button of the _node_ opens up a notebook with contents similar to the code presented above.  For nodes that reference the Ganymede data lake on input, the _query_sql_ string is used to specify the data table to process on the input parameter in the _execute_ function.  

```python
# Code for processing logic on retrieved data
# Corresponds to green box labeled "User-defined Python" in diagram above

import pandas as pd
from typing import Union, Dict, List

def execute(df_sql_result: Union[pd.DataFrame, List[pd.DataFrame]], ganymede_context=None) -> Union[pd.DataFrame, Dict[str, pd.DataFrame]]:
    """
    Process dataframe(s) resulting from SQL query using python

    Parameters
    ----------
    df_sql_result: DataFrame or List[DataFrame]
      Data input from SQL output of query_str string

    ganymede_context: GanymedeContext (optional)
      Context variable for flow runs; contains input file name(s) and flow run timestamp.

    Returns
    -------
    DataFrame or Dict[str, DataFrame]
      If a pandas DataFrame is returned, the table name that the data is stored to within the Ganymede data lake corresponds to the 'analysis' value on the node.

      If a dictionary is returned, keys are table names in the Ganymede data lake.  The DataFrame with the keyword 'analysis' as the key will be saved to the Ganymede data lake as specified by the 'analysis' variable on the node.
    """

    if isinstance(df_sql_result, pd.DataFrame):
        df_out = df_sql_result.copy()
    else:
        df_out = {k: df for k, df in enumerate(df_sql_result)}

    return df_out
```

Below the  the _execute_ function corresponds to the green box labeled "User-defined python" in the schematic of the _node_ above.  This 

:::tip

More than 1 query can be specified as input; to do so, specify multiple queries as semicolon-delimited query strings.

:::

In this example, the first 3 cells offer a template for validating the SQL query to specify data inputs to the _node_, while the 4th cell performs processing on the _node_.  The _execute_ function takes the results of 1 or more tables as input, presented as either a pandas DataFrame or list of pandas DataFrames.  The execute function returns either a pandas DataFrame or a dictionary of pandas DataFrames with table names as keys.

:::tip

By default, if only 1 DataFrame is returned, it would be displayed in the table head associated with the node.  

If multiple DataFrames are returned, the table displayed corresponds to the one labeled with the parameter with the gray chip background.  In the example above, the dataframe correponding to `sql_result` key would be the one displayed if multiple tables were returned from the _execute_ function.

:::

:::caution

The names of the _query_sql_ variable and execute function cannot be modified.  Upon running the save cell in the notebook, the contents of the _query_sql_ string and execute function are saved - and the contents of all other cells are discarded.  

This allows users to verify functionality of nodes in other cells prior to committing and loading code to the workflow orchestrator.

:::

### Modifying Node Dependencies

Edges can be removed by selecting them and pressing "delete" or "backspace" on the keyboard.  A selected edge is slightly darker and wider than unselected edges.

To make two nodes dependent on each other within a run, click and drag between two orbs two different nodes.  _Flow_ dependencies run top-to-bottom (if vertical layout is specified) or left-to-right (if horizontal layout is specified).

### Adding Inputs to Flow Runs

_Flows_ can be configured to accept user inputs at the start of each run. There are three types of inputs:

- File inputs 
- Text (string) inputs
- Tag inputs 

The value of these inputs are used by the _node_ during flow execution, and are made available to the _node_ within editable code (for user-editable _nodes_).

:::note

Tag inputs, in its current state, refer to Benchling tags.  Tenants can be configured to listen to events emitted by Benchling, which enable _flows_ to reference specific Benchling tables to incorporate in _flow_ processing.

:::

### Node categories

A list of available _nodes_ and their associated categories can be found by clicking the **New** Button in the header of the Flow Editor page.  

Nodes are classified into the following categories: 
- **Test**: Useful for either validating platform functionality or for mocking Flows prior to implementation
- **App**: Processing that involves accessing corresponding third-party APIs; in many cases, key exchange is necessary for using these Functions in Ganymede
- **Analysis**: Perform Python / SQL manipulations
- **Instrument**: Instrument-specific functions
- **File**: Functions to ETL data of specified type into Ganymede cloud
- **Other**: Unclassified; currently contains _nodes_ for specifying parameters in Flows

#### Node characteristics

<img width="500" alt="image" src="https://ganymede-bio.mo.cloudinary.net/apiServer/Function_Chip_20221216.png"/>

Each _node_ in the listing is represented by a chip containing the
- name of node
- description of node functionality
- inputs, if any
- outputs, if any

For the example chip above, the CSV_Read node takes a CSV file as input and outputs either a pandas DataFrame or a dictionary of pandas DataFrames indexed by table name, which are uploaded to the Ganymede data lake.

### Node-specific Table Heads

<img width="384" alt="image" src="https://ganymede-bio.mo.cloudinary.net/apiServer/TableHead.png"/>

The _table head_ exists for _nodes_ that produce an output table.  For this subset of _nodes_, the _table head_ shows the first 5 records of the primary table produced by its associated _node_, which is the table specified by the gray chip of the associated _node_.  This table facilitates the development of downstream _flow_ components.

:::note

_Nodes_ can be connected either directly to each other, or by connecting the downstream _node_ to the _table head_ corresponding to its immediately upstream neighbor.

:::

### Modifying contents of a node

Once a _node_ is saved on a _flow_, it can be modified by clicking the **Edit** button in the bottom-right of the node. This will allow any properties to be changed, as shown in the image below. 

<img width="300" alt="image" src="https://ganymede-bio.mo.cloudinary.net/apiServer/SampleNode_20221218.png"/>
<br />
<br />

:::info

_Node_ modifications are not permanent until the environment is saved; if the Flow Editor page is refreshed prior to saving, any edits are discarded.

:::

