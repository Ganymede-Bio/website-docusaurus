---
sidebar_label: benchling.utils.write_molecule
title: benchling.utils.write_molecule
displayed_sidebar: SDKSidebar
--- 


# benchling.utils.write_molecule


## `function` create_molecule_obj
  
Create a molecule object to create in Benchling  
  
### Parameters  
  
**entity_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of the molecule to create  
**folder_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the folder to create the molecule in  
**input_schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the molecule schema to use  
**registry_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the registry to use  
**fields** : `Optional[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of fields to add to the molecule  
**author_id** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the author to assign to the molecule  
**naming_strategy** : `NamingStrategy`  
&nbsp; &nbsp; &nbsp; &nbsp; Naming strategy to use for the molecule, by default NamingStrategy.NEW_IDS  
  
### Returns  
  
**molecule_item** : `MoleculeCreate`  
&nbsp; &nbsp; &nbsp; &nbsp; Molecule object to create in Benchling  


## `function` create_molecule
  
Creates a new molecule in Benchling.  
  
Args:  
&nbsp; &nbsp; &nbsp; &nbsp; molecule_service (MoleculeServce): The initiated MoleculeService.  
&nbsp; &nbsp; &nbsp; &nbsp; molecule_obj (MoleculeCreate): The molecule object to create.  
  
Returns:  
&nbsp; &nbsp; &nbsp; &nbsp; dict: A dictionary containing the name and ID of the newly created molecule.  


## `function` create_molecules_bulk
  
Sends an async task to Benchling to start creating a list of molecules.  
  
Args:  
&nbsp; &nbsp; &nbsp; &nbsp; benchling_context (BenchlingContext): The Benchling context object.  
&nbsp; &nbsp; &nbsp; &nbsp; molecule_objs (List): A list of molecule objects to create.  
&nbsp; &nbsp; &nbsp; &nbsp; molecule_service (MoleculeService): The initiated MoleculeService.  
&nbsp; &nbsp; &nbsp; &nbsp; wait (bool, optional): Whether to wait for the task to complete. Defaults to True.  
  
Returns:  
&nbsp; &nbsp; &nbsp; &nbsp; List[str]: A list of task IDs for each bulk create request.  


## `function` update_molecules_bulk
  
Update a list of molecules in bulk on Benchling.  
  
Args:  
&nbsp; &nbsp; &nbsp; &nbsp; benchling_context (BenchlingContext): The Benchling context object.  
&nbsp; &nbsp; &nbsp; &nbsp; molecule_objs (List): A list of molecule objects to update.  
&nbsp; &nbsp; &nbsp; &nbsp; molecule_service (MoleculeService): The initiated MoleculeService.  
&nbsp; &nbsp; &nbsp; &nbsp; wait (bool, optional): Whether to wait for the task to complete. Defaults to True.  
  
Returns:  
&nbsp; &nbsp; &nbsp; &nbsp; List: A list of task IDs for the molecule update tasks.  


## `function` update_molecule
  
Updates a molecule object in Benchling.  
  
Args:  
&nbsp; &nbsp; &nbsp; &nbsp; benchling_context (BenchlingContext): The Benchling context object.  
&nbsp; &nbsp; &nbsp; &nbsp; molecule_obj (MoleculeUpdate): The molecule object to update.  
  
Returns:  
&nbsp; &nbsp; &nbsp; &nbsp; dict: A dictionary containing the updated molecule's name and ID.  


## `function` update_molecule_obj
  
Create a molecule update object to update in Benchling  
  
### Parameters  
  
**existing_molecule** : `Molecule`  
&nbsp; &nbsp; &nbsp; &nbsp; Molecule to update  
**folder_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the folder to create the entity in  
**input_schema_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the schema to use for the entity  
**fields** : `Optional[Dict]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary of fields to add to the entity, by default None  
**author_id** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the author to assign to the entity, by default None  
**bulk_update** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to return a MoleculeBulkUpdate object instead of a MoleculeUpdate object  
  
### Returns  
  
`Dict[str, str]`  
&nbsp; &nbsp; &nbsp; &nbsp; Dictionary containing the name and ID of the created entity  
