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
    typesense: {
      typesenseCollectionName: 'websiteDocusaurus',

      typesenseServerConfig: {
        nodes: [
          {
            host: `${process.env.TYPESENSE_HOST}-1.a1.typesense.net`,
            port: 443,
            protocol: 'https',
          },
          {
            host: `${process.env.TYPESENSE_HOST}-2.a1.typesense.net`,
            port: 443,
            protocol: 'https',
          },
          {
            host: `${process.env.TYPESENSE_HOST}-3.a1.typesense.net`,
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: process.env.TYPESENSE_API_KEY,
        contextualSearch: true
      },

      // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/search.md#search-parameters
      typesenseSearchParameters: {},

      // Optional
      contextualSearch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
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
              label: 'GitHub',
              href: 'https://github.com/Ganymede-Bio/website-docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ganymede Bio, Inc. Built with Docusaurus.`,
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
