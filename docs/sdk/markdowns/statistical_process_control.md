---
sidebar_label: statistical_process_control
title: statistical_process_control
displayed_sidebar: SDKSidebar
--- 


# statistical_process_control


## `class` LimitType
Enum for types of control limits

## `class` ControlLimits
Class to hold control limit specifications

## `class` WesternElectricRules
  
Implements Western Electric Rules for Statistical Process Control (SPC).  
Supports symmetric, asymmetric, and single-sided control limits.  
  
Rules implemented:  
1. One point beyond 3 sigma  
2. 2 out of 3 consecutive points beyond 2 sigma on the same side  
3. 4 out of 5 consecutive points beyond 1 sigma on the same side  
4. 8 consecutive points on the same side of the centerline  
5. 6 consecutive points steadily increasing or decreasing  
6. 14 consecutive points alternating up and down  
7. 15 consecutive points within 1 sigma  
8. 8 consecutive points beyond 1 sigma on either side  
  
### Methods  
  
**analyze_series**  
&nbsp; &nbsp; &nbsp; &nbsp; Generate a dataframe containing the original data, the results of various WER rules, and the  
&nbsp; &nbsp; &nbsp; &nbsp; control limits. The result returned can be passed to the generate_report method.  
**analyze_dataframe**  
&nbsp; &nbsp; &nbsp; &nbsp; Generate a dictionary of dataframes containing the original data, the results of various WER  
&nbsp; &nbsp; &nbsp; &nbsp; rules, and the control limits where the keys are the column names being analyzed. The  
&nbsp; &nbsp; &nbsp; &nbsp; result can be passed to the generate_report method.  
**analyze_groupby**  
&nbsp; &nbsp; &nbsp; &nbsp; Generate a dictionary of dictionaries where the keys are the groups the WER are applied  
&nbsp; &nbsp; &nbsp; &nbsp; across. The values are dictionaries of dataframes containing the original data, the results  
&nbsp; &nbsp; &nbsp; &nbsp; of various WER rules, and the control limits where the keys are the column names being analyzed.  
&nbsp; &nbsp; &nbsp; &nbsp; The result can be passed to the generate_report method.  
**generate_report**  
&nbsp; &nbsp; &nbsp; &nbsp; Pass in the results from analyze_series, analyze_dataframe, or analyze_groupby to generate a  
&nbsp; &nbsp; &nbsp; &nbsp; pdf report and display control charts. The result can be passed to the generate_report method.  
  
### Examples  
  
```python  
df = pd.DataFrame(  
    \{  
        "x": range(10),  
        "y": range(20, 30),  
        "type": 4 * ["a"] + 6 * ["b"],  
        "exp": [f"EXP\{i\}" for i in range(10)],  
        "datetime": pd.date_range(start="2023-01-01", periods=10, freq="D"),  
    \}  
)  
df = df.set_index(["datetime", "exp"]).sort_index()  
  
# Workflow 1: Use default analysis by calculating distribution parameters and control limits  
wer = WesternElectricRules()  
  
res = wer.analyze_series(df["x"])  
wer.generate_report("datetime", res)  
  
res = wer.analyze_dataframe(df)  
wer.generate_report("datetime", res)  
  
res = wer.analyze_groupby(df.groupby(["type"]))  
wer.generate_report("datetime", res)  
  
# Workflow 2: Only show certain rules, update the default limit type but use default analysis  
for limit_type in ["upper", "lower", "both"]:  
    wer = WesternElectricRules(  
        default_limit_type=limit_type, rules_to_ignore=["rule4", "rule5", "rule6", "rule7", "rule8"]  
    )  
    res = wer.analyze_series(df["x"])  
    wer.generate_report("datetime", res)  
  
# Workflow 3: Fixing the distrution parameters with dictionaries where the key is the group and inner  
# dictionaries have keys that are the columns to pass arguemts for to analyze_dataframe  
# analyze_groupby gets called with means = \{("b",): \{"x": 5\}\}  
# analyze_dataframe gets called with means = \{'x': 5\}.  
means = \{("b",): \{"x": 5\}\}  
stds = \{("b",): \{"x": 1\}\}  
limit_types = \{("b",): \{"x": "lower", "y": "upper"\}\}  
  
wer = WesternElectricRules(rules_to_ignore=["rule4", "rule5", "rule6", "rule7", "rule8"])  
res = wer.analyze_groupby(df.groupby(["type"]), means=means, stds=stds, limit_types=limit_types)  
wer.generate_report("datetime", res)  
  
# save off bytes from pdf report  
report = wer.generate_report("datetime", res, show_plots=True)  
  
output_file_path = "test.pdf"  
with open(output_file_path, "wb") as f:  
    f.write(report)  
```

## `function` WesternElectricRules.__repr__
  
Print the documention of the class.  


## `function` WesternElectricRules.__init__
  
Initialize WesternElectricRules with flexible control limit options.  
  
### Parameters  
  
**default_limit_type** : `LimitType`  
&nbsp; &nbsp; &nbsp; &nbsp; Set the default limit type for the analysis. Import LimitType object from this patht  
&nbsp; &nbsp; &nbsp; &nbsp; to see examples.  
**only_flag_last_points** : `bool`  
&nbsp; &nbsp; &nbsp; &nbsp; If True, only the last point in a violation sequence will be flagged.  
**rules_to_ignore** : `list`  
&nbsp; &nbsp; &nbsp; &nbsp; List of rules to ignore during analysis.  


## `function` WesternElectricRules.analyze_series
  
Analyze a pandas Series for control limit violations according to Western Electric Rules.  
  
This function evaluates a given pandas Series against specified control limits to identify  
any violations. It allows for optional overrides of the mean, standard deviation, limit  
type, and control limits. The function returns a DataFrame that includes the original data,  
the results of various control rules, and any control limit values if provided.  
  
### Parameters  
  
**data** : `pandas.Series`  
&nbsp; &nbsp; &nbsp; &nbsp; Pandas Series to analyze.  
**mean** : `float, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Optional mean value to override instance mean.  
**std** : `float, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Optional standard deviation value to override instance std.  
**limit_type** : `str, LimitType, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Optional limit type to override instance limit_type, defaults to default_limit_type  
&nbsp; &nbsp; &nbsp; &nbsp; attribute.  
**control_limits** : `dict, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Optional control limits to override instance limits.  
  


## `function` WesternElectricRules.analyze_dataframe
  
Analyze multiple columns in a DataFrame for control limit violations according to Western  
Electric Rules.  
  
This function evaluates multiple columns in a given DataFrame against specified control  
limits to identify any violations. It allows for optional overrides of the mean, standard  
deviation, limit type, and control limits for each column. The function returns a dictionary  
containing the analysis results for each column.  
  
This acts as a wrapper for WesternElectricRules.analyze_series() for each column in the  
dataframe  
  
### Parameters  
  
**df** : `pd.DataFrame`  
&nbsp; &nbsp; &nbsp; &nbsp; The input DataFrame containing the data to be analyzed.  
**columns** : `list of str, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The list of column names to be analyzed. If None, all numeric columns  
&nbsp; &nbsp; &nbsp; &nbsp; in the DataFrame will be analyzed (default is None).  
**means** : `dict of str to float, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary containing the mean values for each column. If not provided,  
&nbsp; &nbsp; &nbsp; &nbsp; the mean will be calculated from the data (default is \{\}).  
**stds** : `dict of str to float, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary containing the standard deviation values for each column.  
&nbsp; &nbsp; &nbsp; &nbsp; If not provided, the standard deviation will be calculated from the data  
&nbsp; &nbsp; &nbsp; &nbsp; (default is \{\}).  
**limit_types** : `dict of str to Union[str, LimitType], optional`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary specifying the type of control limits to be used for each column.  
&nbsp; &nbsp; &nbsp; &nbsp; The value can be a string or an instance of the LimitType class (default is \{\}).  
**control_limits** : `dict of str to dict of str to float, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary containing the control limits for each column. The keys are  
&nbsp; &nbsp; &nbsp; &nbsp; column names and the values are dictionaries with control limit names as  
&nbsp; &nbsp; &nbsp; &nbsp; keys and their corresponding values (default is \{\}).  
  
### Returns  
  
`dict`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary containing the analysis results for each column. The keys  
&nbsp; &nbsp; &nbsp; &nbsp; are column names and the values are the results of the analysis.  
  
### Notes  
  
The function performs the following steps:  
1. If `columns` is None, selects all numeric columns in the DataFrame.  
2. Iterates over the specified columns.  
3. For each column, checks if it exists in the DataFrame and is of numeric type.  
4. Calls the `analyze_series` method to perform the analysis on the column.  
5. Stores the analysis results in a dictionary and returns it.  
  
### Examples  
  
```python  
>>> df = pd.DataFrame(\{  
...     'A': [1, 2, 3, 4, 5],  
...     'B': [5, 4, 3, 2, 1]  
... \})  
>>> wer = WesternElectricRules()  
>>> results = wer.analyze_dataframe(df)  
>>> print(results)  
```

## `function` WesternElectricRules.analyze_groupby
  
Analyze groups in a GroupBy object against control limits according to Western Electric  
Rules.  
  
This function evaluates multiple groups in a given GroupBy object against specified control  
limits to identify any violations. It allows for optional overrides of the mean, standard  
deviation, limit type, and control limits for each column within each group.  
The function returns a dictionary containing the analysis results for each group.  
  
This acts as a wrapper for WesternElectricRules.analyze_dataframe() for each group.  
  
### Parameters  
  
**groupby_obj** : `pd.core.groupby.GroupBy`  
&nbsp; &nbsp; &nbsp; &nbsp; The GroupBy object containing the groups to be analyzed.  
**columns** : `list of str, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; The list of column names to be analyzed. If None, all numeric columns  
&nbsp; &nbsp; &nbsp; &nbsp; in each group will be analyzed (default is None).  
**means** : `dict of str to dict of str to float, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary containing the mean values for each column in each group.  
&nbsp; &nbsp; &nbsp; &nbsp; The keys are group names and the values are dictionaries with column  
&nbsp; &nbsp; &nbsp; &nbsp; names as keys and their corresponding mean values (default is \{\}).  
**stds** : `dict of str to dict of str to float, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary containing the standard deviation values for each column  
&nbsp; &nbsp; &nbsp; &nbsp; in each group. The keys are group names and the values are dictionaries  
&nbsp; &nbsp; &nbsp; &nbsp; with column names as keys and their corresponding standard deviation  
&nbsp; &nbsp; &nbsp; &nbsp; values (default is \{\}).  
**limit_types** : `dict of str to dict of str to Union[str, LimitType], optional`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary specifying the type of control limits to be used for each  
&nbsp; &nbsp; &nbsp; &nbsp; column in each group. The keys are group names and the values are  
&nbsp; &nbsp; &nbsp; &nbsp; dictionaries with column names as keys and their corresponding limit  
&nbsp; &nbsp; &nbsp; &nbsp; types (default is \{\}).  
**control_limits** : `dict of str to dict of str to dict of str to float, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary containing the control limits for each column in each group.  
&nbsp; &nbsp; &nbsp; &nbsp; The keys are group names and the values are dictionaries with column  
&nbsp; &nbsp; &nbsp; &nbsp; names as keys and their corresponding control limit dictionaries  
&nbsp; &nbsp; &nbsp; &nbsp; (default is \{\}).  
  
### Returns  
  
`dict`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary containing the analysis results for each group. The keys  
&nbsp; &nbsp; &nbsp; &nbsp; are group names and the values are dictionaries with column names as  
&nbsp; &nbsp; &nbsp; &nbsp; keys and their corresponding analysis results.  
  
### Examples  
  
```python  
>>> df = pd.DataFrame(\{  
...     'A': [1, 2, 3, 4, 5],  
...     'B': [5, 4, 3, 2, 1],  
...     'group': ['X', 'X', 'Y', 'Y', 'Y']  
... \})  
>>> groupby_obj = df.groupby('group')  
>>> wer = WesternElectricRules()  
>>> results = wer.analyze_groupby(groupby_obj)  
>>> print(results)  
```

## `function` WesternElectricRules.generate_report
  
Generate a report by processing the results and generating plots. A pdf report is generated  
as bytes for saving off to storage.  
  
Accepts the results from analyze_series, analyze_dataframe, or analyze_groupby to generate a  
pdf report and display control charts. An x variable must be given to&nbsp; &nbsp; assign to the xaxis  
in the charts.  
  
### Parameters  
  
**x_var** : `str`  
&nbsp; &nbsp; &nbsp; &nbsp; The name of the column to be used for the x-axis in the plots.  
**results** : `dict`  
&nbsp; &nbsp; &nbsp; &nbsp; A dictionary containing the results to be processed. The dictionary can  
&nbsp; &nbsp; &nbsp; &nbsp; contain nested dictionaries and DataFrames.  
**show_plots** : `bool, optional`  
&nbsp; &nbsp; &nbsp; &nbsp; Display plots to view  
  
### Returns  
  
`bytes`  
&nbsp; &nbsp; &nbsp; &nbsp; Generate the plots and save the plots to a pdf as bytes  
  
### Examples  
  
```python  
>>> results = \{  
...     'group1': pd.DataFrame(\{  
...         'x': range(10),  
...         'value': [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]  
...     \}),  
...     'group2': \{  
...         'subgroup1': pd.DataFrame(\{  
...             'x': range(10),  
...             'value': [2, 3, 2, 3, 2, 3, 2, 3, 2, 3]  
...         \})  
...     \}  
... \}  
>>> wer = WesternElectricRules()  
>>> wer.generate_report(x_var='x', results=results)  
```