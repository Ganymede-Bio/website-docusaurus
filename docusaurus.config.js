module.exports = {
  title: 'Ganymede Documentation',
  tagline: 'Integrate your entire lab',
  url: 'https://demo.ganymede.bio',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'Ganymede-Bio',
  projectName: 'website-docusaurus',
  themeConfig: {
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
          to: 'docs/About',
          routeBasePath: '/',
          label: 'Web UI',
          position: 'left',
        },
        {
          to: 'docs/functions/FunctionOverview',
          routeBasePath: '/',
          label: 'Functions',
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
        },
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
              to: 'docs/About',
            },
            {
              label: 'Functions',
              to: 'docs/functions/FunctionOverview'
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
      },
    ],
  ],
};
