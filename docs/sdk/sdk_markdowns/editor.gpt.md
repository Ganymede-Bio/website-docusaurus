---
sidebar_label: editor.gpt
title: editor.gpt
displayed_sidebar: SDKSidebar
--- 


# editor.gpt



##  `function` GPT.ask
Use ChatGPT to assist with coding

###  Parameters
- **prompt** : `str`
    - Prompt for ChatGPT - code or natural language question to ask
- **action** : `str`
    - Action desired from GPT
- **model** : `str, optional`
    - openai model used, by default "gpt-3.5-turbo"
- **temperature** : `float`
    - temperature value between 0 and 2 for amount of variation in response with 0
    - being lowest, by default 0

###  Returns
- `str`
    - Explanation of code in natural language