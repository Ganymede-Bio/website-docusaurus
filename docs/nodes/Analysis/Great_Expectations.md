---
sidebar_label: Great_Expectations
title: Great_Expectations
displayed_sidebar: nodeSidebar
---

### Node Operator
Reads data from data lake and grants acccess to Great Expectations validation methods. Validation results
are written to data lake.

Ingests stored data from a table in data lake, which is passed to the user-defined function.
Also grants access to the Great Expectations validator object, which can be used to run in-flow
validations.


### Node Attributes
- **output_table_analysis**
  - Data lake table to write to
## User-Defined Python
Returns dataframe of validation results on data pulled from data lake.


### Parameters
  - validator: Validator
    - Great Expectations validator obj, which contains methods for data validation
- **ganymede_context** : `GanymedeContext`
    - Ganymede context variable, which stores flow run metadata


### Returns
`pd.DataFrame`
- Data to store in data lake table