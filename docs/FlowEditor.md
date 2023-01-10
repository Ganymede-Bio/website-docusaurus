---
id: FlowEditor
title: Flow Editor
displayed_sidebar: webUiSidebar
---

The Flow Editor is the starting point for creating and modifying _flows_.  

<img width="1111" alt="Flow Editor before flow load" src="https://ganymede-bio.mo.cloudinary.net/apiServer/FlowEditor_20230109.png" />


## Header Bar

The header bar contains buttons for creating _flows_ and monitoring _flow_ runs.

<img alt="Flow Editor header" src="https://ganymede-bio.mo.cloudinary.net/apiServer/FlowEditorHeader_20230109.png" />
&nbsp;

- **Choose A Flow**: Selection box for specifying the _flow_ to load.
- **New**: Opens right sidebar for selecting new _node_ to add.  
- **View**: Opens right sidebar for specifying whether _flow_ should be laid out horizontally or vertically
- **Analysis**: Enables access to Jupyter notebooks which can be used for ad-hoc observation and data analysis.  These notebooks are hosted on a virtual machine (VM) separate from the workflow management software running the _flow_.
- **Runs** Opens right sidebar showing statuses of historical runs for the selected _flow_.  The [Flow Runs](FlowRuns.md) page contains greater detail about the contents of this tab.
- **Processing** Shows the number of files in the queue for your next run.  Clicking this button brings up the [Flow Runs](FlowRuns.md) page.
- **Save** Button to save _flow_ layout to git repo and deploy code to workflow management system.
- **Manage** Opens right sidebar to create new _flows_ or delete existing ones.

## Flows

### Creating Flows

To create a new _flow_, click the **Manage** button in the upper right hand corner of the screen. Then click the **Add New Flow** button on the sidebar.  This action exposes a modal for naming and describing the _flow_.  

<img width="1111" alt="Editor_add_flow" src="https://user-images.githubusercontent.com/46538575/211052554-2f6d272a-1d63-4f4e-a1b2-2bc92e5fd412.png" />
&nbsp;

### Loading and Saving Flows

To load a _flow_, specify the _flow_ to load in the **Choose A Flow** selection box.  Upon doing so, the primary pane displays the graphical structure of the _flow_.

<img width="1111" alt="Editor_select_flow" src="https://user-images.githubusercontent.com/46538575/211091935-c8074b1b-6545-4e18-bd81-a0a63ae6f507.png" />
&nbsp;

After saving a _flow_, the entire environment (which contains all _flows_) is saved and deployed. When this save and deploy is taking place, users are temporarily restricted from running _flows_. A tooltip will be displayed to the user if they try to run a _flow_ during this time. Users can observe the status of environment updates on the [Notifications](Notifications.md) page.

<img width="569" alt="Editor_tooltip" src="https://user-images.githubusercontent.com/46538575/211051939-0bba7a3f-4b9d-4a69-a7e0-34735fc2c4b8.png" />
&nbsp;


### Running Flows

 To select input files for _flows_, users can click **Browse** to choose a file or drag-and-drop a file into the box labeled "Upload file here".  If **Browse** is clicked, users have the option to either select an input file to process from the local computer or from Ganymede Cloud Storage (for files previously executed on _flows_ in Ganymede).  

<img width="550" alt="Browse" src="https://user-images.githubusercontent.com/46538575/211056720-732928a5-86dc-4057-a110-8c9e269d0b09.png" />

If the input file has previously been uploaded to the corresponding flow and node (as determined by file name), users are prompted with an option to use the file that was previously uploaded or to save a new version with a unique id appended to the end of the file name.

<img width="550" alt="existing_file_treatment" src="https://user-images.githubusercontent.com/46538575/211057216-bd34e3db-c4ed-49f5-8042-e6b420f7efd3.png" />

To run the same _flow_ with different sets of input files, add additional rows to the input box by clicking on the **Add** button.

<img width="550" alt="Sample input node" src="https://ganymede-bio.mo.cloudinary.net/apiServer/FlowInputFile_20221220.png"/>

Clicking the **Run** button on the Flow Inputs _node_ kicks off the _flow_ run.  Run progress can be tracked by clicking on the **Runs** button in the header, or by navigating to the [Flow Runs](FlowRuns.md) page.

### Deleting Flows

In order to delete _flows_, click the **Manage** button on the Flow Editor page and which opens up the right sidebar offering a button to **Delete Flow**. 

:::caution

Deleting _flows_ is not reversible from within the Ganymede UI, so undoing a _flow_ deletion will require restoring code from a prior commit in the git repo corresponding to the Ganymede cloud tenant.

:::

