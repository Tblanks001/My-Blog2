// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// themes were previously imported via a nested path, which no longer
// exists beginning with prism-react-renderer@2.4. The package now
// exports a `themes` object at the root, so we pull the colours from
// there instead.
const { themes: prismThemes } = require('prism-react-renderer');
const lightCodeTheme = prismThemes.duotoneLight;
const darkCodeTheme = prismThemes.nightOwl;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gekaku',
  tagline: 'Click the photo to learn more about me!',
  favicon: 'img/gpp.jpg',

  // Set the production url of your site here
  url: 'https://blog.gekaku.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Tlbanks001', // Usually your GitHub org/user name.
  projectName: 'My-Blog2', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Commening out the docs section
        // docs: {
          //sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/gpp.jpg',
      navbar: {
        title: 'Gekaku',
        logo: {
          alt: 'My Site Logo',
          src: 'img/gpp.jpg',
        },
        items: [
          // Commenting out the docs sidebar item
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'docsSidebar',
          //   position: 'left',
          //   label: 'Docs',
          // },
          
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: 'about', label: 'About', position: 'left' },
          {
            href: 'https://www.youtube.com/@gekaku',
            label: 'YouTube',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // Commenting out the docs footer section
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Docs',
          //       to: '/docs/category/custom-title',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'About',
                href: '/about',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
