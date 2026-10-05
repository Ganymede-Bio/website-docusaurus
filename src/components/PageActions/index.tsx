// src/components/PageActions/index.tsx
// "Copy page" menu shown on every doc page. Relies on the Markdown copies of each
// page that docusaurus-plugin-llms writes at build time (see docusaurus.config.js).
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  CheckOutlined,
  CopyOutlined,
  DownOutlined,
  FileMarkdownOutlined,
  MessageOutlined,
  OpenAIOutlined,
} from '@ant-design/icons';
import styles from './styles.module.css';

// The plugin writes each page to `<route>.md`; the root doc (routed at "/") is
// written to `/docs.md` instead.
function getMarkdownPath(pathname: string): string {
  const route = pathname.replace(/\/+$/, '');
  return route === '' ? '/docs.md' : `${route}.md`;
}

function trackAction(action: string) {
  const gtag = (window as any).gtag;
  if (typeof gtag === 'function') {
    gtag('event', 'page_action', { action, page_path: window.location.pathname });
  }
}

export default function PageActions() {
  const { pathname } = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const markdownPath = getMarkdownPath(pathname);
  // AI tools fetch the public site, so prompts always point at production
  const markdownUrl = `${siteConfig.url}${markdownPath}`;
  const prompt = `Read ${markdownUrl} so I can ask questions about this page of the Ganymede documentation.`;

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const copyPage = async () => {
    setOpen(false);
    trackAction('copy_markdown');
    let text: string;
    try {
      const res = await fetch(markdownPath);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      text = await res.text();
    } catch {
      // Markdown copies only exist in production builds (not `yarn start`)
      text = document.querySelector('article')?.innerText ?? '';
    }
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openLink = (action: string, url: string) => {
    setOpen(false);
    trackAction(action);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.pageActions} ref={containerRef}>
      <div className={styles.splitButton}>
        <button type="button" className={styles.mainButton} onClick={copyPage}>
          {copied ? <CheckOutlined /> : <CopyOutlined />}
          {copied ? 'Copied' : 'Copy page'}
        </button>
        <button
          type="button"
          className={styles.toggleButton}
          aria-label="More page actions"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <DownOutlined />
        </button>
      </div>
      {open && (
        <ul className={styles.menu} role="menu">
          <li role="none">
            <button type="button" role="menuitem" onClick={copyPage}>
              <CopyOutlined />
              <span>
                <strong>Copy page</strong>
                <small>Copy as Markdown for AI tools</small>
              </span>
            </button>
          </li>
          <li role="none">
            <button
              type="button"
              role="menuitem"
              onClick={() => openLink('view_markdown', markdownPath)}
            >
              <FileMarkdownOutlined />
              <span>
                <strong>View as Markdown</strong>
                <small>Open this page as plain text</small>
              </span>
            </button>
          </li>
          <li role="none">
            <button
              type="button"
              role="menuitem"
              onClick={() =>
                openLink(
                  'open_chatgpt',
                  `https://chatgpt.com/?hints=search&q=${encodeURIComponent(prompt)}`
                )
              }
            >
              <OpenAIOutlined />
              <span>
                <strong>Open in ChatGPT</strong>
                <small>Ask questions about this page</small>
              </span>
            </button>
          </li>
          <li role="none">
            <button
              type="button"
              role="menuitem"
              onClick={() =>
                openLink('open_claude', `https://claude.ai/new?q=${encodeURIComponent(prompt)}`)
              }
            >
              <MessageOutlined />
              <span>
                <strong>Open in Claude</strong>
                <small>Ask questions about this page</small>
              </span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
