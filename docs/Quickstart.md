---
id: Quickstart
title: Quickstart
sidebar_label: Quickstart
displayed_sidebar: webUiSidebar
---

This guide walks through building a simple _flow_ to ingest plate reader absorbance data captured at two timepoints and computing the difference between the two values.

### Step 0: Download sample plate reader file

Click on [this link](https://github.com/Ganymede-Bio/website-docusaurus/raw/04a3dfe170f4045610d72cca33e0ace6e9850f67/PlateReader.xlsx) to download the plate reader file used for this tutorial.

### Step 1: Sign into Ganymede

This sign-in button should be available once authentication is configured for your tenant, which is generally going to be a web address accessible via any web browser with the URL `https://<tenant>.ganymede.bio`.

<div class="text--center">
<img width="400" alt="Ganymede sign-in" src="https://ganymede-bio.mo.cloudinary.net/apiServer/GanymedeSignIn_20230110.png"/>
</div>

### Step 2: Select the Flow Editor page from the sidebar

<img alt="Flow Editor Select" src="https://ganymede-bio.mo.cloudinary.net/apiServer/FlowEditorSelect_20230110.png"/>

### Step 3: Create a new flow

Click on the **Manage** button in the upper right-hand corner of the header bar and select **Add New Flow** from the right sidebar.

<img alt="Add new flow" src="https://ganymede-bio.mo.cloudinary.net/apiServer/AddNewFlow_20230110.png"/>
&nbsp;


This exposes a modal for adding a new _flow_.  Populate the _flow_ name and description as shown below.

<div class="text--center">
<img alt="Quickstart flow description" src="https://ganymede-bio.mo.cloudinary.net/apiServer/QuickstartFlowDesc_20230110.png"/>
</div>

### Step 4: Add nodes to ingest and process data

Click on the **New** button in the header bar and search for the Excel_Read _node_.  Select the Excel_Read _node_ and connect the top attachment point of the Excel_Read _node_ to the bottom attachment point of the Flow Inputs node.

<div class="text--center">
<img width="350" alt="Excel_Read node chip" src="https://ganymede-bio.mo.cloudinary.net/apiServer/ExcelRead_20230110.png"/>
</div>

Repeat this process with the Transform_Py *node* and click **Save** in the header.  Upon doing so, the Flow Editor window should look as follows:

<img alt="Quickstart Flow Init" src="https://ganymede-bio.mo.cloudinary.net/apiServer/QuickstartFlow_20230110.png"/>

:::tip flow layout selection

Flow layout can be modified by clicking the View button in the header bar and selecting between horizontal or vertical layouts.

:::

Node attributes with green labels indicate validation attributes.  In this case, the "excel" node attribute on the Excel_Read tab specifies the file extension that the *flow* looks for during runs.  Click on the edit button, and modify the "excel" attribute to be ".xlsx", so that only files with ".xlsx" as an extension would be let through.  Click **Save** in the header to save this change.

:::tip file extension validation

Extension validation can be removed by leaving the file validation node attribute blank.

:::

### Step 5: Modify the Transform_Py node to calculate absorbance difference

By default, the Excel_Read _node_ treats the first row in the input file as the header row, so no modification is necessary for ingesting the file.

Open up the backing notebook for the Transform_Py _node_ by clicking on the pencil icon in the upper-right hand corner.  Edit the query_sql string to query for the output of the Excel_Read node (replacing <tenant\> with the appropriate tenant name) and run the cell by clicking on the Run button in the header.

```python
query_sql = """
  SELECT * FROM <tenant>.Quickstart_Absorbance_Change_Excel_Read_results
"""
```

Next, modify the _execute_ function to calculate the absorbance difference and run the cell:

```python
import pandas as pd
from typing import Union, Dict, List

def execute(
    df_sql_result: Union[pd.DataFrame, List[pd.DataFrame]], ganymede_context=None
) -> Union[pd.DataFrame, Dict[str, pd.DataFrame]]:

    # remove fields that do not contain well measurements
    df_out = df_sql_result[~df_sql_result['field'].isin(['Cycle Nr.', 'Time [s]', 'Temp. [°C]'])].copy()    
    
    # calculate absorbance difference
    df_out['run_diff'] = df_out['run2'] - df_out['run1']

    return df_out
```

Save and deploy changes made to the Transform_Py *node* by running the Save Pipeline Code cell **and** saving the notebook.  To save the notebook, click on `File` -> `Save and Checkpoint` in the menu.

```python
"""
Save the updated query and python function to the pipeline
"""
from ganymede.editor import save

files = { 'query.sql': query_sql }
save(files)
```

Upon doing so, the response in the Save Pipeline Cell should say "Commit completed successfully".

### Step 6: Run the flow

Deployment takes roughly 1-2 minutes.  Once the deployment is completed, return to the Flow Editor view and click Browse on the Flow Inputs _node_.  Select local storage and the PlateReader.xlsx file downloaded at the beginning of this quickstart.

Flow run status can be monitored by clicking on the **Runs** button in the header bar, or by clicking **Flow Runs** in the left sidebar.

<img alt="Example flow running" src="https://ganymede-bio.mo.cloudinary.net/apiServer/QuickstartFlowRun_20230110.png"/>

When complete, the status of the _flow_ should indicate success:

<img alt="Example flow success" src="https://ganymede-bio.mo.cloudinary.net/apiServer/QuickstartFlowSuccess_20230110.png"/>

### Step 7: Observe Results in Data Explorer

Click on **Data Explorer** in the left sidebar and run the following query to observe the processed results.

```sql
select 
    left(field, 1) as well_row, 
    cast(right(field, length(field)-1) as int) as well_column,
    *
from ganymede_dev.Quickstart_Absorbance_Change_Transform_py_analysis 
order by left(field, 1), cast(right(field, length(field)-1) as int)
```

Running this query will yield the result table from the _flow_, which is displayed below.

<img alt="Querying results" src="https://ganymede-bio.mo.cloudinary.net/apiServer/QuickstartDataExplorer_20230110.png"/>

The associated file ingested into the flow in this quickstart can be found in the **Files** tab of Ganymede.

<img alt="Files tab input files" src="https://ganymede-bio.mo.cloudinary.net/apiServer/QuickstartFiles_20230110.png"/>

