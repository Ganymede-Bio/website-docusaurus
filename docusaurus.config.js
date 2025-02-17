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
    experimental_faster: true
  },
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          GanymedeApi: {
            specPath: "api-server/common/public-api/openapi.yaml",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
            showSchemas: true
          },
        }
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
        {
          to: '/app/agents/Agent',
          from: '/connectivity/Agent',
          }
        ]
      }
    ],
    [
      'vercel-analytics',
      {
        debug: false,
        mode: 'auto',
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs", '@docusaurus/theme-mermaid'], 
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
        },
        {
          href: 'https://chatgpt.com/g/g-67b0b562425881919087cb95e30876cb-ganymede-documentation',
          label: 'Docs GPT',
          position: 'right',
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
      copyright: `Copyright © 2022-25 Ganymede Bio, Inc.  Built with Docusaurus`,
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
          docItemComponent: "@theme/ApiItem",
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
