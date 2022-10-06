---
id: FlowEditor
title: Flow Editor
displayed_sidebar: webUiSidebar
---

## Summary

The Flow Editor is the starting point for creating new _Flows_, which are a series of _Functions_. 

![Ganymede App Flow Editor Init](https://ganymede-bio.mo.cloudinary.net/apiServer/%20FlowEditor_20220824.png)

The inputs/buttons at the top of the screen perform the following functions:

- **Choose An Environment**: Specify the cloud workflow environment in which the Flow will be loaded and executed.
- **Choose A Flow**: Input for specifying the Flow to run.
- **Save Environment**: Save the loaded Flow to Github repository.
- **Run**: Run the currently loaded Flow on Ganymede Cloud.

- **Functions**: List of available Functions, represented graphically as nodes, which can be added to loaded Flow.
- **Horizontal/Vertical Layout**: Update Flow to either be displayed from left to right (Horizontal Layout) or top to bottom (Vertical Layout)
- **Analysis Notebooks**: Enables access to notebooks which can be used for ad-hoc observation and analysis of data in the flow.  These notebooks are hosted on a virtual machine (VM) separate from the workflow management software running the Flow.

## Flows

### Creating Flows

To create a new _Flow_, click the **New** button in the upper right hand corner of the screen.

![Ganymede App Home Page](https://ganymede-bio.mo.cloudinary.net/apiServer/HomeScreen_202220823.png)

This exposes a pop-up for you to name and describe your Flow in addition to identifying an environment to associate it to.  Each environment has its own dedicated Flow orchestration service, which can be configured to your data processing needs.  

![Ganymede App New Flow Creation](https://ganymede-bio.mo.cloudinary.net/apiServer/HomeNewFlow_20220824.png)

### Loading Flows

To load a Flow, specify the cloud environment in the _Choose An Environment_ input box and the Flow you would like to load in the _Choose A Flow_ input box.  Upon doing so, you will see the graphical structure of your Flow, which will look as follows:

<img width="1511" alt="Ganymede App Flow Editor Displayed" src="https://user-images.githubusercontent.com/111307862/194399585-67d7ff1d-b1c0-4ff7-98ac-4e1e1b1599d3.png">


### Modifying Flows

The second row of buttons provides tools for modifying Flows.  To incorporate new Functions, hover over the Functions button and select a desired Function to incorporate into your flow.  The Function can then be connected to an existing node by clicking and dragging between 2 nodes to specify their connectivity.  

### Running Flows
To run a flow that accepts data from file input, first the data has to be uploaded. Every flow is provided with a File Connection node at the start of the flow to allow file uploads. Click the button that says "Or, click or drag file to upload", a file selector menu will appear. Any number of data files can be selected. Once selected, they will appear in the file queue.

<img width="243" alt="image" src="https://user-images.githubusercontent.com/111307862/194400524-4911cca5-415c-4223-b605-12a20cdde2e5.png">

When ready, click the green Run button to kick off the Flow run.  Run progress can be tracked by refreshing the Flow runs tab.

Watching a directory for file additions and modifications is also possible. Documentation on that can be found on the [flow runs page](https://docs.ganymede.bio/docs/FlowRuns#watching-a-directory).

### Understanding Nodes

If you notice in the image below: 

<img width="384" alt="image" src="https://storage.googleapis.com/ganymede-bio-website/public/apiServer/EditNodeBefore.png"/>

That the parameter label has a different background (grey rounded box). This indicates that the parameter represents a table (the typical input/output of functions. These tables represent the data where the function ingests from or outputs to and they can be seen in the flow editor.

<img width="384" alt="image" src="https://storage.googleapis.com/ganymede-bio-website/public/apiServer/TableHead.png"/>

The table node shows all a truncated query result of the table that is produced by the node before it. You CANNOT delete this node or edges from this node. When connecting functions to each other, you can connect them through the table as well. Make sure that the input tables match the table name to ensure that the edge between them is consistent.

<img width="384" alt="image" src="https://storage.googleapis.com/ganymede-bio-website/public/apiServer/TableHeadConnection.png"/>

### Modifying Nodes

Once a Node is saved on a Flow, it can be modified by clicking the `edit` button in the bottom-right of the node. This will allow any properties to be changed as shown in the image below. 

<img width="384" alt="image" src="https://user-images.githubusercontent.com/111307862/186734565-2a40e931-8135-4df7-8ef9-bd744d9d0459.png"/>

While a node is be edited, it can also be deleted by clicking the trash icon in the top-right corner of the node. This action will not be permanent until the environment is saved. Until then, if the page is refreshed the node will re-appear.

<img width="416" alt="image" src="https://user-images.githubusercontent.com/111307862/186736076-767796ee-c83a-415e-8d7d-709c9d011984.png"/>

### Modifying Edges
If you click on the edge you can remove them by hitting the delete button. Edges tend to have a small click box but you should notice the edge bolden when selected

Before Click:

<img width="384" alt="image" src="https://storage.googleapis.com/ganymede-bio-website/public/apiServer/BeforeEdgeClick.png"/>

After Click:

<img width="384" alt="image" src="https://storage.googleapis.com/ganymede-bio-website/public/apiServer/AfterEdgeClick.png" />

How do we connect two nodes to make them dependent on each other? There are small circles at the beginning/end of each function and table. To make them dependent on each other, just connect them by clicking and dragging (a line should appear) one of these orbs to the next.

### Deleting Flows

In order to delete flows, there is a button that will appear once a pipeline is loaded. It contains the red trash icon, clicking this button will completely remove the flow from a users workspace. This action is NOT reversible.

<img width="1511" alt="Ganymede App Delete Flow button" src="https://user-images.githubusercontent.com/111307862/194401886-043c0e9c-a07b-4518-b778-35aaf913aa11.png">


## Analysis Notebooks

Analysis notebooks are Jupyter notebooks hosted on VMs which enable access to data uploaded to the data lake within the Ganymede Cloud as part of a Flow run.  A fresh notebook instantiation has templates to retrieve data and save notebooks as shown below:

![Ganymede Notebook](https://ganymede-bio.mo.cloudinary.net/apiServer/%20GanymedeNotebook_20220824.png)

### Installing Python packages

Additional packages can be installed using pip magic.  For example, the following command installs a number of analytics and plotting packages:

```python
!pip install scikit-learn seaborn matplotlib pandas_gbq
```

### Loading data from BigQuery

The __client__ object can be used to access data stored in Google BigQuery as part of a Flow run.  For example, run the code below to list available tables in the __ganymede_demo__ environment:

```python
pandas_gbq.context.credentials = client._credentials
pandas_gbq.context.project = client.project

tables = client.list_tables('ganymede_demo')
for table in tables:
    print(table.table_id)
```

A query can be run by passing a SQL snippet following [Bigquery syntax](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax) to the __query_sql__ variable and running the __results__ method from Ganymede's __query__ module. This will return a Pandas dataframe. Before running the query, a dry run of the query is also available in the Ganymede's query module using the __dry_run__ method. For example, the commands below perform a dry run and return the results of the query provided in __query_sql__.

```python
query_sql = 'select * from ganymede_demo.demo_table'
```
```python
from ganymede.notebook import query
query.dry_run(query_sql)
```
```python
from ganymede.notebook import query
query.results(query_sql)
```

### Saving notebooks

The final cell contains a code which commits the notebook to the HEAD of the Github repository containing the stored Flow.  The _src_ entry in the files dictionary specifies the location of the notebook within the repo, and the _dest_ entry specifies the name that the notebook is committed under.

```python
from ganymede.notebook import save

files = [{'src': 'default', 'dest': 'new_notebook'}]
save(files)
```
