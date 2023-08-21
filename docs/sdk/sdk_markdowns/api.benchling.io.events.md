---
sidebar_label: api.benchling.io.events
title: api.benchling.io.events
displayed_sidebar: SDKSidebar
--- 


# api.benchling.io.events



##  `function` FlowInputs.__init__
Representation of all inputs for a flow

files: Optional[List[FlowInputFile]]
    list of files for flow
params: Optional[List[FlowInputFile]]
    list of params for flow
tags_benchling: Optional[List[FlowInputFile]]
    list of Benchling tags for flow


##  `function` retrieve_flow_input_param
Retrieve input param based on Benchling field name, entity_id


###  Parameters

- **benchling_context** : `BenchlingContext`
    - Benchling context to access the connection  
- **entity_id** : `str`
    - Benchling entity id for retrieving file  
- **field_name** : `str`
    - Parameter passed to benchling  
- **triggered_node_name** : `str`
    - Node in triggered flow that will be receiving file input  
- **triggered_param_name** : `str`
    - Parameter for node in triggered flow  


###  Returns

- `FlowInputParam`


##  `function` retrieve_flow_input_file
Retrieve file based on Benchling field name


###  Parameters

- **benchling_context** : `BenchlingContext`
    - Benchling context to access the connection  
- **entity_id** : `str`
    - Benchling entity id for retrieving file  
- **benchling_field** : `str`
    - Name of Benchling field to retrieve blob data from  
- **triggered_flow_node_name** : `str`
    - Node in triggered flow that will be receiving file input  
- **triggered_flow_param_name** : `str`
    - Parameter for node in triggered flow  
- **file_extension** : `Optional[str]`
    - File extension (if different from what is param name)  


###  Returns

- `FlowInputFile`


##  `function` get_benchling_value
Returns the benchling value for a given entity ID and field name.


###  Parameters

- **benchling_context** : `BenchlingContext`
    - Benchling context object  
- **object_id** : `str`
    - ID used in Benchling API (e.g. - entity schema ID or notebook entry ID)  
- **field_name** : `str`
    - Parameter passed to benchling  
    conn.custom_entities.get_by_id().fields.additional_properties.get(field_name)


###  Returns

- `str`
    - Benchling value associatec with field name and id  