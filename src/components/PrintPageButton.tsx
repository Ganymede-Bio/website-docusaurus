// src/components/PrintPageButton.tsx
import React from 'react';
import { PrinterOutlined } from '@ant-design/icons';

export default function PrintPageButton({ floating = false }) {
  const base = 'button button--primary button--sm print-hidden';

  return (
    <button
      onClick={() => window.print()}
      className={floating ? `${base} floating-print` : base}
    >
      <PrinterOutlined size={16} strokeWidth={2} /> Save as PDF
    </button>
  );
}
