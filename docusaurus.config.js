// @ts-check
// Docusaurus configuration — Expert To Product

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Expert To Product',
  tagline: 'Documentation des produits Expert To Product',
  favicon: 'img/brand/e2p-logo.png',

  url: 'https://docs.experttoproduct.com',
  baseUrl: '/',

  organizationName: 'expert-to-product',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'costing',
        path: 'costing-docs',
        routeBasePath: 'costing',
        sidebarPath: require.resolve('./sidebarsCosting.js'),
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/brand/e2p-banner.png',
    navbar: {
      title: 'Expert To Product',
      logo: {
        alt: 'Logo E2P',
        src: 'img/brand/e2p-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'E2P Finance',
        },
        {
          type: 'docSidebar',
          sidebarId: 'costingSidebar',
          docsPluginId: 'costing',
          position: 'left',
          label: 'E2P Costing',
        },
        {
          href: 'https://experttoproduct.com',
          label: 'Site principal',
          position: 'right',
        },
        {
          href: 'https://x.com/ExpertToProduct',
          label: 'X',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Produits',
          items: [
            {
              label: 'E2P Finance',
              to: '/prise-en-main/introduction',
            },
            {
              label: 'E2P Costing',
              to: '/costing/prise-en-main/introduction',
            },
          ],
        },
        {
          title: 'Ressources',
          items: [
            {
              label: 'FAQ',
              to: '/support/faq',
            },
            {
              label: 'Résolution de problèmes',
              to: '/support/resolution-problemes',
            },
            {
              label: 'Contact support',
              to: '/support/contact-support',
            },
          ],
        },
        {
          title: 'Légal',
          items: [
            {
              label: 'Mentions légales',
              to: '/mentions-legales',
            },
          ],
        },
        {
          title: 'Suivez-nous',
          items: [
            {
              label: 'X / Twitter',
              href: 'https://x.com/ExpertToProduct',
            },
            {
              label: 'Site principal',
              href: 'https://experttoproduct.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Expert To Product · SIREN 500 279 427 · RCS Mamoudzou`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
  }),
};

module.exports = config;
