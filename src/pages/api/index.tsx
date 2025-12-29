import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import '@scalar/api-reference/style.css';

function ScalarApiReference({ specUrl }: { specUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Import Scalar standalone
      import('@scalar/api-reference').then(({ createApiReference }) => {
        createApiReference(containerRef.current!, {
          spec: {
            url: specUrl,
          },
          layout: 'modern',
          pathRouting: {
            basePath: '/api',
          },
          generateOperationSlug: (operation: any) => {
            // Use operationId for cleaner, more stable anchor links
            // This makes links like /api#getFlows instead of /api#tag/flows/GET/v1/environment/{environment}/flows
            return operation.operationId || `${operation.method}${operation.path}`;
          },
          hideClientButton: true,
          hideModels: true,
          hideTestRequestButton: true,
          showSidebar: true,
          showDeveloperTools: 'localhost',
          showToolbar: 'localhost',
          operationTitleSource: 'summary',
          theme: 'default',
          persistAuth: false,
          telemetry: true,
          isEditable: false,
          isLoading: false,
          documentDownloadType: 'none',
          hideSearch: false,
          showOperationId: false,
          hideDarkModeToggle: false,
          withDefaultFonts: true,
          defaultOpenAllTags: false,
          expandAllModelSections: false,
          expandAllResponses: false,
          orderSchemaPropertiesBy: 'alpha',
          orderRequiredPropertiesFirst: true,
          searchHotKey: 'k',
          darkMode: false,
          defaultHttpClient: {
            targetKey: 'shell',
            clientKey: 'curl',
          },
          hiddenClients: ['ruby', 'c', 'csharp', 'php', 'swift', 'kotlin', 'go', 'r', 'rust', 'java', 'clojure', 'ocaml'],
          customCss: `
            --scalar-color-1: #7508a3;
            --scalar-color-accent: #7508a3;
            --scalar-font: var(--ifm-font-family-base);
            --scalar-font-code: var(--ifm-font-family-monospace);
          `,
        });
      });
    }
  }, [specUrl]);

  return (
    <div
      ref={containerRef}
      className="scalar-container"
    />
  );
}

export default function ApiDocs() {
  const specUrl = useBaseUrl('/openapi.yaml');

  return (
    <Layout
      title="API Documentation"
      description="Ganymede API Reference Documentation"
    >
      <BrowserOnly fallback={<div>Loading API Documentation...</div>}>
        {() => <ScalarApiReference specUrl={specUrl} />}
      </BrowserOnly>
    </Layout>
  );
}
