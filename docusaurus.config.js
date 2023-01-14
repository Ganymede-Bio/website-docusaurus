require('dotenv').config()

module.exports = {
  title: 'Ganymede Documentation',
  tagline: 'Integrate your entire lab',
  url: 'https://www.ganymede.bio',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'Ganymede-Bio',
  projectName: 'website-docusaurus',
  themes: ['docusaurus-theme-search-typesense'],
  themeConfig: {
    typesense: {
      typesenseCollectionName: 'website-docusaurus',

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
        contextualSearch: false
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
          to: 'docs/Welcome',
          routeBasePath: '/',
          label: 'Web UI',
          position: 'left',
        },
        {
          to: 'docs/nodes/NodeOverview',
          routeBasePath: '/',
          label: 'Nodes',
          position: 'left',
        },
        {
          to: 'docs/releases/ReleaseNotes',
          routeBasePath: '/',
          label: 'Release Notes',
          position: 'left',
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
          title: 'Docs',
          items: [
            {
              label: 'Web UI',
              to: 'docs/Welcome',
            },
            {
              label: 'Nodes',
              to: 'docs/nodes/NodeOverview'
            },
            {
              label: 'Release Notes',
              to: 'docs/releases/ReleaseNotes'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main website',
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Ganymede-Bio/website-docusaurus/edit/main/',
        },
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
