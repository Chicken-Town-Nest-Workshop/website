// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chicken Town 🐔',
  tagline: '歡迎來到小雞鎮',
  favicon: 'img/chicken.png',

  // Set the production url of your site here
  url: 'https://town.lychicken.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LonelyYeezhiChicken', // Usually your GitHub org/user name.
  projectName: 'Chicken-Town', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          "https://github.com/Chicken-Town-Nest-Workshop/website/tree/main/",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          "https://github.com/Chicken-Town-Nest-Workshop/website/tree/main/",
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
      image: 'img/chicken.png',
      
      metadata: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { property: "og:title", content: "Chicken Town" },
        { property: "og:url", content: "https://town.lychicken.com" },
        { property: "og:site_name", content: "孤獨一隻雞" },
        { property: "og:description", content: "歡迎來到小雞鎮" },
        { property: "og:locale", content: "zh_TW" },
        { property: "og:width", content: "300" },
        { property: "og:height", content: "301" },
        { property: "article:author", content: "Lonely Yeezhi Chicken" },
        { property: "article:tag", content: "雞" },
        { property: "article:tag", content: "一隻雞" },
        { property: "article:tag", content: "孤獨一隻雞" },
        { property: "article:tag", content: "小雞鎮" },
        { property: "article:tag", content: "Chicken" },
        { property: "article:tag", content: "Chicken Town" },
        { property: "article:tag", content: "Lonely Yeezhi Chicken" },
        { property: "article:tag", content: "Nest JS" },
        { property: "article:tag", content: "TypeScript" },
        {
          property: "article:tag",
          content:
            "前端, 後端, 全端, 網頁, 開發, 技術, 網頁開發, 前端開發, 後端開發, 全端開發, JavaScript, HTML, CSS, 經驗分享, 手札, 筆記",
        },
        {
          property: "article:tag",
          content:
            "frontend, backend, web, Nest JS, Nest, TypeScript, JavaScript, HTML, CSS, 經驗分享, 手札, note",
        },
      ],
      navbar: {
        title: 'Chicken Town',
        logo: {
          alt: 'My Site Logo',
          src: 'img/chicken-big.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '小鎮歷史',
          },
          {to: '/blog', label: '新聞', position: 'left'},
          {
            href: 'https://github.com/Chicken-Town-Nest-Workshop',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} chicken town, Inc. Built with Chicken.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        require.resolve("docusaurus-lunr-search"),
        {
          languages: ["zh"],
        },
      ],
    ],
};

module.exports = config;
