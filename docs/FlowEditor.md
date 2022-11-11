---
id: FlowEditor
title: Flow Editor
displayed_sidebar: webUiSidebar
---

## Summary

The Flow Editor is the starting point for creating new _Flows_, which are a series of _Functions_. 

![Ganymede App Flow Editor Init](https://storage.googleapis.com/ganymede-bio-website/public/apiServer/FlowEditor.png)

The inputs/buttons at the top of the screen perform the following functions (some functions will open a sidebar):

- **Choose A Flow**: Input for specifying the Flow to run.
- **New**: Add functions to a flow, only does anything if a flow is selected
- **View**: Layout options for the flow in view
- **Analysis**: Enables access to notebooks which can be used for ad-hoc observation and analysis of data in the flow.  These notebooks are hosted on a virtual machine (VM) separate from the workflow management software running the Flow.
- **Runs** See the jobs that were ran for a specific flow
- **Processing** Shows the number of files in the queue for your next run
- **Run** Button to execute a flow with given inputs. 0 files in the queue causes the flow to not execute
- **Manage** This setting deals with managing flows. Save, Add, and Delete actions are stored under here.

## Sidebar
Some actions bring up a side bar that will contain more advance actions. Clicking the icon in the top right corner closes the sidebar. Here is an image of the sidebar that pops up:

<img width="384" alt="image" src="https://storage.googleapis.com/ganymede-bio-website/public/apiServer/SideBar.png"/>

## Flows

### Creating Flows

To create a new _Flow_, click the **Manage** button in the upper right hand corner of the screen. Then click the "Add" button on the sidebar.

This exposes a pop-up for you to name and describe your Flow in addition to identifying an environment to associate it to.  Each environment has its own dedicated Flow orchestration service, which can be configured to your data processing needs.  

![Ganymede App New Flow Creation](https://storage.googleapis.com/ganymede-bio-website/public/apiServer/AddNewFlow.png)

### Loading Flows

To load a Flow, specify Flow you would like to load in the _Choose A Flow_ input box.  Upon doing so, you will see the graphical structure of your Flow, which will look as follows:

<img width="1511" alt="Ganymede App Flow Editor Displayed" src="https://storage.googleapis.com/ganymede-bio-website/public/apiServer/ChooseFlow.png" />


### Modifying Flows

The second row of buttons provides tools for modifying Flows.  To incorporate new Functions, hover over the Functions button and select a desired Function to incorporate into your flow.  The Function can then be connected to an existing node by clicking and dragging between 2 nodes to specify their connectivity.  

### Running Flows
To run a flow that accepts data from file input, first the data has to be uploaded. Every flow is provided with a File Connection node at the start of the flow to allow file uploads. Click the button that says "Or, click or drag file to upload", a file selector menu will appear. Any number of data files can be selected. Once selected, they will appear in the file queue.

<img width="243" alt="input_node" src="https://user-images.githubusercontent.com/46538575/195667700-9b417fb9-f688-4b63-86ee-2e31500bb6e4.png" />

For each file uploaded, an optional run tag can be assigned from the dropdown menu labeled "Run Tag". These run tags are populated with the names that correspond to your entities in Benchling so that you can easily attribute files and write back to your ELN. We are able to enable this functionality with a simple integration with your Benchling account. 

<img width="243" alt="run_tags" src="https://user-images.githubusercontent.com/46538575/195667470-4157635b-0784-44f8-9011-d7d8800aee2a.png" />

When ready, click the green Run button to kick off the Flow run.  Run progress can be tracked in the Flow runs tab.

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

In order to delete flows, click on the "Manage" button on the flow editor page and there should be a button called "Delete Flow" that should appear in the sidebar. This action is NOT reversible.

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
