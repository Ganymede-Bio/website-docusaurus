---
sidebar_label: plate_annotation_load
title: plate_annotation_load
---

## PlateInputLoadOperator

Operator for reading plate reader annotation file in to BigQuery

#### extract\_data

```python
def extract_data(filename: str) -> None
```

Extract well data from input csv.  Target Gene and Effector are 2 columns that are not on the current state input, but can be extracted
and will be available once migration to Benchling is completed, so these columns are filled in as necessary.

:param filename: input csv file

