---
sidebar_label: Input_Param
title: Input_Param
displayed_sidebar: webUiSidebar
---

## Node

### Node Description

Reads input parameter into Flow. Useful when downstream nodes need
access to a input parameter specified by the Flow runner.

### Node Attributes

- **input_string_param**
  - input string to be read into the Flow

### Example

The Node configuration below would capture a string called 'xyz':

- **param**: xyz

To access the input parameter from a node named "Input_Param" in a downstream node,
use the following syntax to obtain the parameter value input by the user:

```python
from ganymede_sdk import Ganymede
g = Ganymede()

param_value = g['Input_Param.param']
```
