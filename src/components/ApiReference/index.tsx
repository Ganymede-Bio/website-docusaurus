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
          hiddenClients: {
            // C
            c: ['libcurl'],
            // Clojure
            clojure: ['clj_http'],
            // C#
            csharp: ['httpclient', 'restsharp'],
            // Dart
            dart: ['http'],
            // F#
            fsharp: ['httpclient'],
            // Go
            go: ['native'],
            // Java
            java: ['asynchttp', 'nethttp', 'okhttp', 'unirest'],
            // JavaScript
            js: ['axios', 'fetch', 'jquery', 'ofetch', 'xhr'],
            // Kotlin
            kotlin: ['okhttp'],
            // Node.js
            node: ['ofetch', 'undici'],
            // Objective-C
            objc: ['nsurlsession'],
            // OCaml
            ocaml: ['cohttp'],
            // PHP
            php: ['curl', 'guzzle'],
            // PowerShell
            powershell: ['restmethod', 'webrequest'],
            // Python
            python: ['python3', 'requests'],
            // R
            r: ['httr'],
            // Ruby
            ruby: ['native'],
            // Rust
            rust: ['reqwest'],
            // Shell
            shell: ['httpie', 'wget'],
            // Swift
            swift: ['nsurlsession'],
          }
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
