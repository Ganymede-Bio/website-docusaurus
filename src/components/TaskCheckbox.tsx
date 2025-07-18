// src/components/TaskCheckbox.tsx
import React, { useState, useRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function TaskCheckbox({ id, disabled, ...rest }: Props) {
  /* 1 ─ generate the key once and remember it in a ref */
  const keyRef = useRef<string>(
    id ??
      rest['data-checkbox-id'] ??
      rest['data-sourcepos'] ??        // remark‑gfm always sets this
      Math.random().toString(36)       // fallback, but now only ONCE
  );
  const key = keyRef.current;

  /* 2 ─ initialise state directly from localStorage */
  const [checked, setChecked] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(`task:${key}`) === '1';
    }
    return false; // during SSR
  });

  /* 3 ─ handle clicks */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setChecked(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`task:${key}`, value ? '1' : '0');
    }
  };

  return (
    <input
      {...rest}                /* keep any other props, but… */
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      style={{ cursor: 'pointer' }}
      /* …do NOT forward `disabled` unless you really want it */
    />
  );
}
