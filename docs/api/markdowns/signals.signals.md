---
sidebar_label: signals.signals
title: signals.signals
displayed_sidebar: APISidebar
--- 


# signals.signals


## `class` Signals
  
Signals object to interact with Signals API through read and write type methods.  
  
### Attributes  
  
**ganymede_context** : `GanymedeContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Ganymede context to get run attributes  
**signals_url** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Signals URL to send requests to  
**signals_api_key** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Signals API key to pass in request headers  
**run_tag** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Tag associated with flow run  


## `function` Signals.__init__
  
Set up the Signals object  
  
### Parameters  
  
**ganymede_context** : `GanymedeContext`  
&nbsp; &nbsp; &nbsp; &nbsp; Ganymede context to get run attributes  
**signals_url** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Signals URL, retrieved from secrets  
**signals_api_key** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Signals API key, retrieved from secrets  


## `function` Signals.convert_container_position
  
Convert string container position to grid coordinates  
  
### Parameters  
  
**container_position** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Container position in string format (e.g. - "A1")  
  
### Returns  
  
`list`  
&nbsp; &nbsp; &nbsp; &nbsp; Container position in grid coordinates (e.g. - [0, 0])  
  


## `function` Signals.create_container
  
Create a container in Signals  
  
### Parameters  
  
**container_type_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the container type to create  
**description** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Description of the container  
**amount** : `float`  
&nbsp; &nbsp; &nbsp; &nbsp; Amount of the batch to put in the container  
**amount_unit** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Unit of the container to create  
&nbsp; &nbsp; &nbsp; &nbsp; Must be one of ["g", "ml", "kg", "mg", "l", "mug", "ng", "mul", "nl", "kl", "item"]  
**location_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the plate location to create the container in  
**batch_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the batch to add to the container  
**x_coord** : `int`  
&nbsp; &nbsp; &nbsp; &nbsp; X coordinate of the container inside a matrix plate  
**y_coord** : `int`  
&nbsp; &nbsp; &nbsp; &nbsp; Y coordinate of the container inside a matrix plate  
**barcode** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Barcode of the container  
**container_id** : `str, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; ID to use to create container, if not provided, one will be generated  
**container_name** : `str, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of the container to create, if not provided, one will be generated  
**container_fields** : `list, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; List of dictionaries containing fields to add to the container, by default []  
  
  
### Returns  
  
`str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the created container  


## `function` Signals.create_location
  
Create a location in Signals, including matrix plates  
  
### Parameters  
  
**location_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of the location to create  
**location_type_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the location type to create  
**description** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Description of the location  
**barcode** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Barcode of the location  
**parent_location_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the parent location, e.g. a freezer or shelf  
**isGrid** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether the location is a matrix plate/has coordinates  
**rows** : `int`  
&nbsp; &nbsp; &nbsp; &nbsp; Number of rows in the matrix plate, only required if isGrid is True  
**columns** : `int`  
&nbsp; &nbsp; &nbsp; &nbsp; Number of columns in the matrix plate, only required if isGrid is True  
**location_fields** : `list, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; List of dictionaries containing fields to add to the location, by default []  
  
  
### Returns  
  
`str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the created location  


## `function` Signals.get_assets_or_batches
  
Retrieves assets or batches from the Signals API based on the specified asset type ID  
(library ID).  
  
### Parameters  
  
&nbsp; &nbsp; &nbsp; &nbsp; asset_type_id (str)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The ID of the asset type to retrieve (library ID).  
&nbsp; &nbsp; &nbsp; &nbsp; asset_or_batch (str)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Either "asset" or "batch", specifying which to retrieve.  
&nbsp; &nbsp; &nbsp; &nbsp; time_start (datetime, optional)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The start time for the time range to filter by. Defaults to None.  
&nbsp; &nbsp; &nbsp; &nbsp; time_end (datetime, optional)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The end time for the time range to filter by. Defaults to None.  
&nbsp; &nbsp; &nbsp; &nbsp; time_filter (str, optional)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The field to filter by. Defaults to "modifiedAt"  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Can also be "createdAt", can add "-" in front to sort descending  
&nbsp; &nbsp; &nbsp; &nbsp; page_offset (int, optional)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The page offset to start querying from. Defaults to 0. Max is 5000.  
&nbsp; &nbsp; &nbsp; &nbsp; page_limit (int, optional)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The page limit to retrieve. Defaults to 100, max is 100.  
&nbsp; &nbsp; &nbsp; &nbsp; sort_by (str, optional)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The field to sort by. Defaults to "createdAt".  
&nbsp; &nbsp; &nbsp; &nbsp; smiles (bool, optional)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Whether to retrieve SMILES data for the assets. Defaults to True.  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Adds an extra API call per asset if true.  
  
### Returns  
  
&nbsp; &nbsp; &nbsp; &nbsp; dict: A dictionary containing the retrieved data and metadata.  


## `function` Signals.get_all_assets_or_batches
  
Retrieves all assets or batches of a given type from the Signals API, including any  
additional data that may be available beyond the initial query limit of 5000 results.  
  
Args:  
&nbsp; &nbsp; &nbsp; &nbsp; asset_type_id (str)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - The ID of the asset type to retrieve.  
&nbsp; &nbsp; &nbsp; &nbsp; asset_or_batch (str)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Either "assets" or "batches", indicating which to retrieve.  
&nbsp; &nbsp; &nbsp; &nbsp; smiles (bool, optional)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Whether to include SMILES strings in the returned data. Defaults to False.  
&nbsp; &nbsp; &nbsp; &nbsp; time_start (datetime, optional)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - The start time for the time range to filter by. Defaults to None.  
&nbsp; &nbsp; &nbsp; &nbsp; time_end (datetime, optional)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - The end time for the time range to filter by. Defaults to None.  
&nbsp; &nbsp; &nbsp; &nbsp; time_filter (str, optional)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - The field to filter by. Defaults to "modifiedAt"  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Can also be "createdAt", can add "-" in front to sort descending  
&nbsp; &nbsp; &nbsp; &nbsp; load_all_data (bool, optional):  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Whether to add extra API call for each asset/batch to load full data.  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Defaults to True.  
  
Returns:  
&nbsp; &nbsp; &nbsp; &nbsp; pd.DataFrame: A pandas DataFrame containing all retrieved assets or batches, along with  
&nbsp; &nbsp; &nbsp; &nbsp; any additional data that was available beyond the initial query limit.  


## `function` Signals.get_all_batches_per_asset
  
Retrieves all assets or batches of a given type from the Signals API, including any  
additional data that may be available beyond the initial query limit of 5000 results.  
  
### Parameters  
  
&nbsp; &nbsp; &nbsp; &nbsp; asset_type_id (str)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - The ID of the asset type to retrieve.  
&nbsp; &nbsp; &nbsp; &nbsp; asset_or_batch (str)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Either "assets" or "batches", indicating which to retrieve.  
&nbsp; &nbsp; &nbsp; &nbsp; smiles (bool, optional)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Whether to include SMILES strings in the returned data. Defaults to False.  
  
### Returns  
  
&nbsp; &nbsp; &nbsp; &nbsp; pd.DataFrame  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - A pandas DataFrame containing all retrieved assets or batches, along with any  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; additional data that was available beyond the initial query limit.  


## `function` Signals.get_batches_per_asset
  
Retrieves batches from the Signals API based on the specified asset ID  
  
### Parameters  
  
**asset_type_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the asset type to retrieve (library ID).  
**asset_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of the asset to retrieve associated batches for.  
**time_start** : `datetime, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The start time for the time range to filter by. Defaults to None.  
**time_end** : `datetime, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The end time for the time range to filter by. Defaults to None.  
**time_filter** : `str, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The field to filter by. Defaults to "modifiedAt"  
&nbsp; &nbsp; &nbsp; &nbsp; Can also be "createdAt", can add "-" in front to sort descending  
**page_offset** : `int, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The page offset to start querying from. Defaults to 0. Max is 5000.  
**page_limit** : `int, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The page limit to retrieve. Defaults to 100, max is 100.  
**sort_by** : `str, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The field to sort by. Defaults to "createdAt".  
**smiles** : `bool, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Whether to retrieve SMILES data for the assets. Defaults to True.  
&nbsp; &nbsp; &nbsp; &nbsp; Adds an extra API call per batch if true.  
  
### Returns  
  
`dict`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary containing the retrieved data and metadata.  
&nbsp; &nbsp; &nbsp; &nbsp; data: pd.DataFrame  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A pandas DataFrame containing the retrieved batches.  


## `function` Signals.get_materials
  
Get Materials  
  
### Parameters  
  
**library_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of library (e.g. - Compounds or Building Blocks)  
  
### Notes  
  
/materials/\{libraryName\}/bulkExport is an asynchronous API.  
  
If the request is accepted, server will start a job to export the materials batch by batch  
asynchronously. And server will return a report with file ID and report ID to client.  
  
Client can use one of below APIs to check the status of current export.  
  
HEAD "/materials/bulkExport/download/\{fileId\}"  
GET "/materials/bulkExport/reports/\{reportId\}"  
Example usage:  
  
Start an export job by POSTing "/materials/\{libraryName\}/bulkExport".  
  
Query the status with HEADing "/materials/bulkExport/download/\{fileId\}" every 5 seconds till  
content-length is not 0 in response header.  
  
Or, query the status with GETing "/materials/bulkExport/reports/\{reportId\}" every 5 seconds  
till the status is "COMPLETED" in the response body.  
  
Download the file with GETing "/materials/bulkExport/download/\{fileId\}".  
  
The maximum file size is 100MB. The maximum count is 25000 assets.  
  
If the count limit or file size limit is reached, the user can continue the export job using  
the "nextExport" link in the report.  


## `function` Signals.query_for_inventory_item
  
Query to see if inventory item exists in Signals  
  
### Parameters  
  
**entity_type_str** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Type of entity to query for (e.g. - "container" or "location")  
**location_type_field_name** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of the location type field  
&nbsp; &nbsp; &nbsp; &nbsp; For containers, this is "container.Container Type"  
&nbsp; &nbsp; &nbsp; &nbsp; For locations, this is "location.Location Type"  
**location_type_value** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; name to query for in the location_type_field_name field  
&nbsp; &nbsp; &nbsp; &nbsp; e.g. "96 well Matrix Plate" or "Matrix Tube"  
**entity_property** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Property of the entity to query for, needs to be prefaced by "fields."  
&nbsp; &nbsp; &nbsp; &nbsp; e.g. "fields.Barcode"  
**entity_value** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Value of the entity_property to query for  
**stop_after_items** : `int, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Number of items to stop after, by default 1000000  
  
### Returns  
  
`dict`  
&nbsp; &nbsp; &nbsp; &nbsp; JSON response from Signals  


## `function` Signals.query_for_batch
  
Query for batch in Signals  
  
### Parameters  
  
**libraryName** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; Name of library (e.g. - Compounds or Building Blocks)  
**batch_id** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; ID of batch to query for  
  
### Returns  
  
`dict`  
&nbsp; &nbsp; &nbsp; &nbsp; JSON response from Signals  
