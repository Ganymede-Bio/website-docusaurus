// src/theme/MDXComponents/index.tsx
import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import TaskCheckbox from '@site/src/components/TaskCheckbox';

export default {
  ...MDXComponents,
  input: (props) =>
    props.type === 'checkbox' ? <TaskCheckbox {...props} /> : <input {...props} />,
};
