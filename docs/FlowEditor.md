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

To create a new _flow_, click the **Manage** button in the upper right hand corner of the screen. Then click the **Add New Flow** button on the sidebar.  This action exposes a modal for naming and describing the _flow_.  

![Ganymede App New Flow Creation](https://ganymede-bio.mo.cloudinary.net/apiServer/AddNewFlow_20221220.png)

### Loading and Saving Flows

To load a _flow_, specify the _flow_ to load in the **Choose A Flow** datalist input.  Upon doing so, the primary pane displays the graphical structure of the _flow_.

<img width="1511" alt="Ganymede Flow Editor displayed" src="https://ganymede-bio.mo.cloudinary.net/apiServer/ChooseFlow_20221220.png" />
&nbsp;

After saving a _flow_, the entire environment (which contains all _flows_) is saved and deployed. When this save and deploy is taking place, users are temporarily restricted from running _flows_. A tooltip will be displayed to the user if they try to run a _flow_ during this time. Users can observe the status of environment updates on the [Notifications](Notifications.md) page.

<img width="306" alt="Runs restricted temporarily popover" src="https://user-images.githubusercontent.com/46538575/202579236-2c4c9aa5-9afa-48ec-b8bb-eb93fe524eea.png" />

### Running Flows

 To run a _flow_ that accepts data from file input, upload the input file by either clicking the **Browse** button followed by selecting **Local File Browser** or dragging and dropping a file into the upload box. 

<img width="550" alt="Browse" src="https://user-images.githubusercontent.com/46538575/211056720-732928a5-86dc-4057-a110-8c9e269d0b09.png" />

If the input file has previously been uploaded to the corresponding flow and node, you will be prompted with an option to use the file that was previously uploaded or to save a new version with a unique id appended to the end of the file name. We determine file uniqueness based on the file's name.

<img width="550" alt="existing_file_treatment" src="https://user-images.githubusercontent.com/46538575/211057216-bd34e3db-c4ed-49f5-8042-e6b420f7efd3.png" />

To run the same _flow_ with different sets of input files, add additional rows to the input box by clicking on the **Add** button.

<img width="550" alt="Sample input node" src="https://ganymede-bio.mo.cloudinary.net/apiServer/FlowInputFile_20221220.png"/>

Clicking the **Run** button on the Flow Inputs _node_ kicks off the _flow_ run.  Run progress can be tracked by clicking on the **Runs** button in the header to display flow runs history in the right sidebar, or by navigating to the [Flow Runs](FlowRuns.md) page.

### Deleting Flows

In order to delete _flows_, click the **Manage** button on the Flow Editor page and which opens up the right sidebar offering a button to **Delete Flow**. 

:::caution

Deleting _flows_ is not reversible from within the Ganymede UI, so undoing a _flow_ deletion will require restoring code from a prior commit in the git repo corresponding to the Ganymede cloud tenant.

:::

