// src/components/TaskCheckbox.tsx
import React, { useEffect, useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function TaskCheckbox({ id, disabled, ...rest }: Props) {
  // ❶ throw away `disabled` (ignore the variable or rename it to _)
  const key =
    id ??
    rest['data-checkbox-id'] ??   // GitHub’s attr
    rest['aria-label'] ??
    Math.random().toString(36);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setChecked(localStorage.getItem(`task:${key}`) === '1');
    }
  }, [key]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setChecked(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`task:${key}`, value ? '1' : '0');
    }
  };

  return (
    <input
      {...rest}                 // all other original props
      type="checkbox"
      id={key}
      checked={checked}
      onChange={handleChange}
      /* no disabled here! */
      style={{ cursor: 'pointer' }}
    />
  );
}
