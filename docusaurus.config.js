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
          label: 'AI-Finance DAF',
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
              label: 'AI-Finance DAF',
              to: '/01-prise-en-main/01-introduction',
            },
          ],
        },
        {
          title: 'Ressources',
          items: [
            {
              label: 'FAQ',
              to: '/04-support/01-faq',
            },
            {
              label: 'Résolution de problèmes',
              to: '/04-support/02-resolution-problemes',
            },
            {
              label: 'Contact support',
              to: '/04-support/03-contact-support',
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
      copyright: `Copyright © ${new Date().getFullYear()} Expert To Product. Tous droits réservés.`,
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
