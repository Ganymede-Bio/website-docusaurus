---
sidebar_label: benchling.io.read
title: benchling.io.read
displayed_sidebar: APISidebar
--- 


# benchling.io.read


## `function` get_custom_entity_to_schema_id_map
  
Get a dictionary mapping custom entity IDs to schema IDs.  
  
### Parameters  
  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; The Benchling context object.  
**\*args**  
&nbsp; &nbsp; &nbsp; &nbsp; Arguments to pass to benchling.conn.custom_entities_list()  
**\*\*kwargs**  
&nbsp; &nbsp; &nbsp; &nbsp; Keyword arguments to pass to benchling.conn.custom_entities_list()  
  
### Returns  
  
`dict`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary mapping custom entity IDs to schema IDs.  


## `function` get_assay_results_to_schema_id_map
  
Get a dictionary mapping assay result IDs to schema IDs.  
  
### Parameters  
  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; The Benchling context object.  
**assay_result_columns** : `dict`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary mapping result schema IDs to assay result columns.  
  
### Returns  
  
`dict`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary mapping assay result IDs to schema IDs.  


## `function` retrieve_assay_results_data
  
Get a pandas dataframe of assay result data. Will raise a BenchlingError if the bulk get fails.  
  
### Parameters  
  
**entry_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Entry id to match to results from assay_results.bulk_get  
**assay_results_map** : `dict`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary of assay results keys  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; The Benchling context object.  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; A dataframe of records returned from assay_results.bulk_get  


## `function` retrieve_custom_entity_data
  
Get a pandas dataframe of custom_entity data. Will raise a BenchlingError if the bulk_get fails  
  
### Parameters  
  
**ts_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Benchling timeseries id  
**custom_entity_map** : `dict`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary to get custom_entity keys from  
**benchling_context** : `BenchlingContext`  
&nbsp; &nbsp; &nbsp; &nbsp; The Benchling context object.  
  
### Returns  
  
`pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; A dataframe of records returned from custom_entities.bulk_get  
