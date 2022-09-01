---
id: FunctionOverview
title: Function Overview
displayed_sidebar: functionSidebar
sidebar_label: Overview
---

## Functions

Functions are used within _Flows_ to perform data extraction, transformation, and loading into other apps.

Functions consist of two parts:

- Interactions with the platform: tasks like loading files, authenticating with apps and infrastructure, these are not user-editoalbe
- User-editable portions which contains logic and processing which you can edit

The editable parts of functions consist of two languages:
- SQL (using ANSI SQL)
- Python (using Python3 and [pandas dataframes](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html))


Select a function from the sidebar to learn more.

## Editing a Function

If a function is editable, it will have a pencil icon in the upper-right corner. Clicking this pencil will launch an editor notebook. This notebook contains the user-editable Function code as well as some testing and debugging code that you can use as you make changes to your function code.

Comitting your changes to the Flow is accomplished by running the final step in the notebook. This will commit your changes and re-deploy the Flow to the Environment.

```python
from ganymede.editor import save

save({})
```