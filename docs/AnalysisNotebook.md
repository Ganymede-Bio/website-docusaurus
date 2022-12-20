---
title: Analysis Notebooks
sidebar_label: Analysis Notebooks
displayed_sidebar: webUiSidebar
---

Analysis notebooks are Jupyter notebooks that enable access to data uploaded to the Ganymede Cloud data lake as part of a _flow_ run.  A fresh notebook instantiation has templates to retrieve data and save notebooks.  To access a fresh notebook instance, on the Flow Editor page, click on the **Analysis** button in the header and `new-notebook`.  The image below shows an example of what this notebook would contain:

![Ganymede Notebook](https://ganymede-bio.mo.cloudinary.net/apiServer/%20GanymedeNotebook_20220824.png)

The first 3 cells in the image provide templates for validating and querying data, while the last cell enables the notebook to be saved to git.

:::info

To save the notebook to a different name, modify the `dest` key (i.e. - replace `new_notebook` with the desired notebook name) and execute the cell.

:::

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

files = [{'src': 'default', 'dest': 'notebook_to_save_to'}]
save(files)
```