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

![Ganymede App Flow Editor Displayed](https://ganymede-bio.mo.cloudinary.net/apiServer/FlowEditorLoaded_20220824.png)

### Modifying Flows

The second row of buttons provides tools for modifying Flows.  To incorporate new Functions, hover over the Functions button and select a desired Function to incorporate into your flow.  The Function can then be connected to an existing node by clicking and dragging between 2 nodes to specify their connectivity.  

When ready, click the green Run button to kick off the Flow run.  Run progress can be tracked by refreshing the Flow runs tab.

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