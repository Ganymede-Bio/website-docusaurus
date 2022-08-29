---
sidebar_label: spectramax_load
title: spectramax_load
---

#### well\_pos\_to\_row\_col

```python
def well_pos_to_row_col(position: pd.Series)
```

Converts alphanumeric notation (e.g. - A1) to row, col notation (e.g. = [0, 0])

#### substr\_pos\_in\_list

```python
def substr_pos_in_list(substr, list)
```

Check if substr is in list
Returns index position of first occurrence if found; -1 otherwise

## SpectraMaxExtractAndLoadOperator

Operator for reading Spectramax file in to BigQuery

#### parse\_plate\_section

```python
def parse_plate_section(plate_section)
```

Parse plate XML output into data and metadata components

#### extract\_data

```python
def extract_data(filename: str, genes: Dict[str, str]) -> QuantigenePlate
```

Extract SpectraMax data into a dictionary of {gene type:Quantigene}

:param filename: SpectraMax XML file to parse

#### associate\_plates

```python
@staticmethod
def associate_plates(plate_list, genes: Dict[str, str])
```

Associate purpose with each plate

