import { themes as prismThemes } from 'prism-react-renderer';

require('dotenv').config()

module.exports = {
  title: 'Ganymede Documentation',
  tagline: 'Integrate your entire lab',
  url: 'https://docs.ganymede.bio',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'Ganymede-Bio',
  projectName: 'website-docusaurus',
  markdown: {
    mermaid: true
  },
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
    },
    experimental_faster: true,
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
        {
          to: '/app/agents/Agent',
          from: '/connectivity/Agent',
          },
        // RunContainer node was replaced by operator extensions
        {
          to: '/app/flows/OperatorExtensions',
          from: '/nodes/Analysis/RunContainer',
        },
        // nodes that were removed or are no longer available in the node palette
        {
          to: '/nodes/NodeOverview',
          from: [
            '/nodes/App/Azure_Read_Multi',
            '/nodes/App/Benchling_Api',
            '/nodes/App/SciNote_API',
            '/nodes/File/AVI_Read',
            '/nodes/File/AVI_Read_Multi',
            '/nodes/File/HDF5_Read',
            '/nodes/Instrument/Agilent_HPLC_Read',
            '/nodes/Instrument/Instron_Tensile_Read',
            '/nodes/Instrument/Profilometer_Read',
            '/nodes/Instrument/Synergy_Read',
            '/nodes/Instrument/Synergy_Read_Multi',
          ],
        },
        // ganymede_sdk.api.benchling.io.benchling_write module was removed
        {
          to: '/sdk/GanymedeSDKOverview',
          from: '/sdk/markdowns/benchling.io.benchling_write',
        },
        ]
      }
    ],
    [
      'vercel-analytics',
      {
        debug: false,
        mode: 'auto',
      },
    ],
    [
      // Generates llms.txt, llms-full.txt, and a .md copy of every doc page so
      // AI tools (and the page "Copy page" menu) can read the docs as Markdown
      'docusaurus-plugin-llms',
      {
        description: 'Documentation for Ganymede, the lab data platform: app, nodes, SDK, API, and release notes.',
        rootContent:
          'The REST API reference is available as an OpenAPI 3 spec: https://docs.ganymede.bio/openapi.yaml',
        generateMarkdownFiles: true,
        excludeImports: true,
        removeDuplicateHeadings: true,
        rewriteImageUrls: true,
        includeOrder: ['app/**', 'sdk/**', 'nodes/**', 'releases/**'],
      },
    ]
  ],
  themes: ['@docusaurus/theme-mermaid'], 
  themeConfig: {
    prism: {
      additionalLanguages: ['python', 'bash', 'powershell', 'yaml'],
      theme: prismThemes.nightOwl
    },
    algolia: {
      appId: 'SMEM8QA2TD',
      apiKey: 'd7fb51ca85e14d48eb21e1fd4e08c1f6',
      indexName: 'ganymede',
      contextualSearch: false,
      optionalFilters: ['category:-releases'],
    },
    navbar: {
      title: 'Ganymede',
      logo: {
        alt: 'Ganymede Logo',
        src: 'img/ganymede_ball.png',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'app/intro/Welcome',
          label: 'App'
        },
        {
          label: "API",
          to: "/api",
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'sdk/GanymedeSDKOverview',
          label: 'SDK'
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'releases/ReleaseNotes',
          label: 'Release Notes'
        }
      ],
    },
    plugins: [
      [
        'vercel-analytics',
        {
          debug: false,
          mode: 'auto',
        },
      ]
    ],
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation Links',
          items: [
            {
              label: 'App',
              to: '/'
            },
            {
              label: 'Nodes',
              to: 'nodes/NodeOverview'
            },
            {
              label: 'Ganymede SDK',
              to: 'sdk/GanymedeSDKOverview'
            },
            {
              label: 'Release Notes',
              to: 'releases/ReleaseNotes'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Company website',
              to: 'https://www.ganymede.bio',
            },
            {
              label: 'Blog',
              to: 'https://blog.ganymede.bio'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Ganymede-Bio/website-docusaurus',
            },
            {
              label: 'Contact Us',
              href: 'mailto:support@ganymede.bio'
            }
          ],
        },
      ],
      copyright: `Copyright © 2022-26 Ganymede Bio, Inc.  Built with Docusaurus`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Ganymede-Bio/website-docusaurus/edit/main/',
        },
        blog: false,
        gtag: {
          trackingID: 'G-CDRHMZJ61T',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-554GP3T'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        }
      },
    ],
  ]
};
