---
sidebar_label: benchling.io.events
title: benchling.io.events
displayed_sidebar: APISidebar
--- 


# benchling.io.events


## `function` FlowInputs.__init__
  
Representation of all inputs for a flow  
  
files: Optional[List[FlowInputFile]]  
&nbsp; &nbsp; &nbsp; &nbsp; list of files for flow  
params: Optional[List[FlowInputFile]]  
&nbsp; &nbsp; &nbsp; &nbsp; list of params for flow  
tags_benchling: Optional[List[FlowInputFile]]  
&nbsp; &nbsp; &nbsp; &nbsp; list of Benchling tags for flow  


## `function` retrieve_flow_input_param
  
Retrieve input param based on Benchling field name, entity_id  
  
### Parameters  
  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context to access the connection  
**entity_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling entity id for retrieving file  
**field_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Parameter passed to benchling  
**triggered_node_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Node in triggered flow that will be receiving file input  
**triggered_param_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Parameter for node in triggered flow  
  
### Returns  
  
`FlowInputParam`  


## `function` retrieve_flow_input_file
  
Retrieve file based on Benchling field name  
  
### Parameters  
  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context to access the connection  
**entity_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling entity id for retrieving file  
**benchling_field** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of Benchling field to retrieve blob data from  
**triggered_flow_node_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Node in triggered flow that will be receiving file input  
**triggered_flow_param_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Parameter for node in triggered flow  
**file_extension** : `Optional[str]`  
&nbsp; &nbsp; &nbsp; &nbsp; File extension (if different from what is param name)  
  
### Returns  
  
`FlowInputFile`  


## `function` get_benchling_value
  
Returns the benchling value for a given entity ID and field name.  
  
### Parameters  
  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling context object  
**object_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID used in Benchling API (e.g. - entity schema ID or notebook entry ID)  
**field_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Parameter passed to benchling  
&nbsp; &nbsp; &nbsp; &nbsp; conn.custom_entities.get_by_id().fields.additional_properties.get(field_name)  
  
### Returns  
  
`str`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling value associatec with field name and id  
