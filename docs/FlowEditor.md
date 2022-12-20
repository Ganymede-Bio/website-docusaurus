---
id: FlowEditor
title: Flow Editor
displayed_sidebar: webUiSidebar
---

The Flow Editor is the starting point for creating and modifying _flows_.  _Flows_ can also be run from the Flow Editor by clicking on the **Run** button located on the Flow Inputs _node_.

![Ganymede App Flow Editor Init](https://ganymede-bio.mo.cloudinary.net/apiServer/FlowEditor_20221219.png)

## Header Bar

The inputs/buttons in the header bar perform the following functions.

- **Choose A Flow**: Datalist for specifying the _flow_ to load.
- **New**: Opens up right sidebar for selecting new _node_ to add.  
- **View**: Opens right sidebar, which offers options for specifying whether _flow_ should be laid out horizontally or vertically
- **Analysis**: Enables access to Jupyter notebooks which can be used for ad-hoc observation and data analysis.  These notebooks are hosted on a virtual machine (VM) separate from the workflow management software running the _flow_.
- **Runs** Opens right sidebar showing statuses of historical runs for the selected _flow_.  The [Flow Runs](FlowRuns.md) page contains greater detail about the contents of this tab.
- **Processing** Shows the number of files in the queue for your next run.  Clicking this button brings up the [Flow Runs](FlowRuns.md) page.
- **Save** Button to save _flow_ layout to git repo and deploy code to workflow management system.
- **Manage** Opens right sidebar to add new _flows_ or delete existing ones.

## Flows

### Creating Flows

To create a new _flow_, click the **Manage** button in the upper right hand corner of the screen. Then click the **Add** button on the sidebar.  This action exposes a modal for naming and describing the _flow_.  

![Ganymede App New Flow Creation](https://ganymede-bio.mo.cloudinary.net/apiServer/AddNewFlow.png)

### Loading and Saving Flows

To load a _flow_, specify the _flow_ to load in the **Choose A Flow** datalist input.  Upon doing so, the primary pane displays the graphical structure of the _flow_.

<img width="1511" alt="Ganymede App Flow Editor Displayed" src="https://ganymede-bio.mo.cloudinary.net/apiServer/ChooseFlow.png" />
&nbsp;

After saving a _flow_, the entire environment (which contains all _flows_) is saved and deployed. When this save and deploy is taking place, users are temporarily restricted from running _flows_. A tooltip will be displayed to the user if they try to run a _flow_ during this time. Users can observe the status of environment updates on the [Notifications](Notifications.md) page.

<img width="306" alt="image" src="https://user-images.githubusercontent.com/46538575/202579236-2c4c9aa5-9afa-48ec-b8bb-eb93fe524eea.png" />

### Running Flows

To run a `flow` that accepts data from file input, upload the input file by either clicking the **Upload** button or dragging and dropping a file into the upload box. To run the same `flow` with different sets of input files, add additional rows to the input box by clicking on the **Add** button. 

<img width="384" alt="input_node" src="https://ganymede-bio.mo.cloudinary.net/apiServer/flowInputFile.png"/>

Clicking the **Run** button on the Flow Inputs _node_ kicks off the Flow run.  Run progress can be tracked by clicking on the **Runs** button in the header to display flow runs history in the right sidebar, or by navigating to the [Flow Runs](FlowRuns.md) page.

### Deleting Flows

In order to delete flows, click the **Manage** button on the Flow Editor page and which opens up the right sidebar offering a button to **Delete Flow**. 

:::caution

Deleting flows is not reversible from within the Ganymede UI, so undoing a flow deletion will require restoring code from a prior commit in the git repo corresponding to the Ganymede cloud tenant.

:::

## Nodes

:::info

Understanding this section is critical for developing on the Ganymede platform; the customizability of underlying nodes sets Ganymede apart from many other low-code and no-code solutions that represent logic in graphs.

:::

Nodes are customizable blocks of code with default functionality specified by its type.

<img width="384" alt="image" src="https://ganymede-bio.mo.cloudinary.net/apiServer/EditNodeBefore.png"/>

The image above shows how a node is represented on the Flow Editor page; the node consists of:
- node name, located in the header of the node
- pencil icon for editing the user-editable code backing the function
- input and output parameter(s); in this example, the node has 1 input parameter named _sql_result_ which has _example_ as its value
- edit button, which unlocks the node for modifying node name, changing node parameter values, or deletion

<img width="300" alt="Example node layout" src="https://ganymede-bio.mo.cloudinary.net/apiServer/Operator_Conceptual_Layout_20221216.png" />

Stylistically, the functionality of a node is represented by the diagram above.  Input/output parameters are passed to the operator associated to the node, which is responsible for I/O with respect to the node.  User-defined SQL (if relevant) determines the data associated with processing, and user-defined python (if relevant) performs the processing.

![Editor notebook backing node](https://ganymede-bio.mo.cloudinary.net/apiServer/Editor_Notebook_20221216.png)

Clicking on the edit button of the node opens up a notebook similar to what is shown above.  For nodes that reference the Ganymede data lake on input, the _query_sql_ string is used to specify the data table to process on the input parameter in the _execute_ function.  The _query_sql_ string corresponds to the blue box labeled "User-defined SQL" and the _execute_ function corresponds to the green box labeled "User-defined python" in the schematic of the node above.

:::tip

More than 1 query can be specified as input; to do so, specify multiple queries as semicolon-delimited query strings.

:::

In this example, the first 3 cells offer a template for validating the SQL query to specify data inputs to the node, while the 4th cell performs processing on the node.  The _execute_ function takes the results of 1 or more tables as input, presented as either a Pandas DataFrame or list of Pandas DataFrames.  The execute function returns either a Pandas DataFrame or a dictionary of Pandas DataFrames with table names as keys.

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

The value of these inputs are referenced by the corresponding _function_ during flow execution.

:::note

Tag inputs, in its current state, refer to Benchling tags.  Tenants can be configured to listen to events emitted by Benchling, which enable _flows_ to reference specific Benchling tables to incorporate in _flow_ processing.

:::

#### Watching for input files

An alternative method for adding inputs is to listen for file additions and modifications to a specific directory on a local machine. 

To setup a watched directory, click the blue folder icon in the _flow_ input box, which will open up a form for selecting a directory to watch.

<img width="246" alt="image" src="https://ganymede-bio.mo.cloudinary.net/apiServer/File_Watcher_20221216.png" />

Any new file adds or modifications of existing files will now prep Ganymede Cloud to queue new flow runs. Upon the detection of one of these events, users receive a notification in the top right hand corner of the app. Ganymede continues to watch the directory until the page is either refreshed or closed.

### Node categories

A list of available nodes and their associated categories can be found by clicking the **New** Button in the header of the Flow Editor page.  

Nodes are classified into the following categories: 
- **Test**: Useful for either validating platform functionality or for mocking Flows prior to implementation
- **App**: Processing that involves accessing corresponding third-party APIs; in many cases, key exchange is necessary for availing these Functions to Ganymede
- **Analysis**: Perform Python / SQL manipulations
- **Instrument**: Instrument-specific functions
- **File**: Functions to ETL data of specified type into Ganymede cloud
- **Other**: Unclassified nodes; currently contains nodes for specifying parameters in Flows

#### Node characteristics

<img width="500" alt="image" src="https://ganymede-bio.mo.cloudinary.net/apiServer/Function_Chip_20221216.png"/>

Each node in the listing is represented by a chip containing the
- name of node
- description of node functionality
- inputs, if any
- outputs, if any

For the example chip above, the CSV_Read node takes a CSV file as input and outputs either a Pandas DataFrame or a dictionary of Pandas DataFrames indexed by table name, which are uploaded to the Ganymede data lake.

### Node-specific Table Heads

<img width="384" alt="image" src="https://ganymede-bio.mo.cloudinary.net/apiServer/TableHead.png"/>

The _table head_ exists for nodes that produce an output table.  For this subset of _nodes_, the _table head_ shows the first 5 records of the primary table produced by its associated _node_, which is the table specified by the gray chip of the associated _node_.  This table facilitates the development of downstream _flow_ components.

:::note

_Nodes_ can be connected either directly to each other, or by connecting the downstream node to the _table head_ corresponding to its immediately upstream neighbor.

:::

### Modifying contents of a node

Once a _node_ is saved on a _flow_, it can be modified by clicking the **Edit** button in the bottom-right of the node. This will allow any properties to be changed, as shown in the image below. 

<img width="300" alt="image" src="https://ganymede-bio.mo.cloudinary.net/apiServer/SampleNode_20221218.png"/>
<br />
<br />

:::info

Node modifications are not permanent until the environment is saved; if the Flow Editor page is refreshed prior to saving, any edits are discarded.

:::

