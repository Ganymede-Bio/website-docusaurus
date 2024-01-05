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
  themes: ['docusaurus-theme-search-typesense'],
  themeConfig: {
    prism: {
      additionalLanguages: ['python'],
      theme: prismThemes.nightOwl
    },
    typesense: {
      typesenseCollectionName: process.env.TYPESENSE_COLLECTION_NAME,

      typesenseServerConfig: {
        nodes: [
          {
            host: process.env.TYPESENSE_HOST,
            port: 443,
            protocol: 'https',
          }
        ],
        apiKey: process.env.TYPESENSE_API_KEY,
        contextualSearch: true
      },

      typesenseSearchParameters: {
        query_by:
          'hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,hierarchy.lvl4,hierarchy.lvl5,hierarchy.lvl6,content,embedding',
        vector_query: 'embedding:([], k: 5, distance_threshold: 1.0, alpha: 0.2)' // Optional vector search fine-tuning
      },

      // Optional
      contextualSearch: true,
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
          docId: 'Welcome',
          label: 'App'
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'nodes/NodeOverview',
          label: 'Nodes'
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
          href: 'https://github.com/Ganymede-Bio/website-docusaurus',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
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
            },
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
          ],
        },
      ],
      copyright: `Copyright © 2023 Ganymede Bio, Inc.  Built with Docusaurus`,
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
