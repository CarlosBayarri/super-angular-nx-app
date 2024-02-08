// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My app',
  tagline: 'Application description',
  url: 'https://your-disid-url.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DISID',
  projectName: 'My app',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {},
  },
  plugins: [
    [
      require.resolve('docusaurus-plugin-search-local'), // Only works in the production build
      /** @type {import('docusaurus-plugin-search-local').Options} */
      ({
        highlightSearchTermsOnTargetPage: true,
        hashed: true,
        indexBlog: false,
        docsDir: ['docs/docs', 'docs/api'],
        docsRouteBasePath: '/docs',
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My app',
        logo: {
          alt: 'My Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'docs/intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'api/intro',
            label: 'API',
            position: 'left',
          },
          {
            href: 'https://gitlab.com/disid/lab-frontend/disid-documentation',
            label: 'GitLab',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Web',
                href: 'https://www.disid.com/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/disid/mycompany/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/disid_corp',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'API',
                to: '/docs/api/intro',
              },
              {
                label: 'GitLab',
                href: 'https://gitlab.com/disid/lab-frontend/disid-documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DISID.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
