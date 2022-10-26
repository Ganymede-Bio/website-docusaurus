---
sidebar_label: FCSBulkExtractAndLoadOperator
title: FCSBulkExtractAndLoadOperator
displayed_sidebar: functionSidebar
---

## FCSBulkExtractAndLoadOperator

Function for reading zip file containing Flow Cytometry Standard (FCS) time series data across multiple FCS files

#### extract\_data

```python
def extract_data(fcs_data: object) -> dict[str, object]
```

Extracts FCS object info into Pandas Dataframe called data and python dictionary called metadata

