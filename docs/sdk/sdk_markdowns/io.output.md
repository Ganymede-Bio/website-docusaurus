---
sidebar_label: io.output
title: io.output
displayed_sidebar: SDKSidebar
--- 


# io.output



##  `class` NodeReturn
Return object from execute function in Ganymede nodes
tables: Optional[Dict[str, str]]
    tables to upload to data lake
file_location: str
    bucket location to output to; only need to specify if files_to_upload is not null
files: Optional[Dict[str, str]]
    files to upload to file_location


##  `function` save_files_from_container
Save files from container node to Ganymede

###  Parameters
- **context** : `GanymedeContext`
    - Ganymede context
- **files_to_save** : `Union[str, List[str]]`
    - file or list of files to save to k8s cluster