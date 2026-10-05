import React from 'react';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import PageActions from '@site/src/components/PageActions';
import styles from './styles.module.css';

// Puts the "Copy page" menu on the same row as the breadcrumbs on every doc page
export default function DocBreadcrumbsWrapper(props) {
  return (
    <div className={styles.docHeader}>
      <DocBreadcrumbs {...props} />
      <PageActions />
    </div>
  );
}
