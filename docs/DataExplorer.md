---
id: DataExplorer
title: Data Explorer
displayed_sidebar: webUiSidebar
---

The Data Explorer tab offers an ANSI SQL interface to query tabular data generated from Ganymede _flows_.  

The Data Explorer page contains a few key areas. 

<img alt="Files page" src="https://storage.googleapis.com/ganymede-bio-website/public/apiServer/TableBrowser.png" />

- On the top left there is a list of tables that exist in the current environment. 
  - There is a search bar to filter tables that contain the search string
  - The button next to table will overwrite the SQL query in the top right and give an example query

- On the top right there is a SQL text edit region where a user can type in a query to produce an output.
  - This query is limited to DQL calls only. (e.g. `SELECT` are the only keyword allowed in the query)
  - Table names should be surrounded with single quotes: "`" to escapte special characters
  - If the `LIMIT` keyword in not included, the default of `LIMIT 1000` to prevent long loading times related to tables.
  
- Bottom of the page contains the output results
  - There is a download button on the top right which takes the current output and produces a .CSV file/
