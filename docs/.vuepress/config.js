var nav = require("./nav")
var sidebar = require("./sidebar")
module.exports = {
  base: '/vuepress-universal/',
  title: 'Vuepress',
  description: '',
  head: [
    ['link', { href: 'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap', rel: 'stylesheet' }],
    /* 本地备份字体 */
    // ['link', {rel: 'stylesheet', href: './font/index.css'}]
    ['script', { src: '/icon/svg.js' }]
  ],
  themeConfig: {
    searchMaxSuggestions: 10,
    smoothScroll: true, // 开启平滑滚动
    nav: nav,
    lastUpdated: '上次更新', // string | boolean
    sidebarDepth: 0,
    sidebar: sidebar,
  },
  plugins: [
    // ['vuepress-plugin-table-of-contents'],
    ['@vuepress/back-to-top'],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.page img',
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },
    ],
    ['@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.page-catalog a'
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        }
      }
    ],
    ['container', {
      type: 'info',
      before: text => `<div class="custom-block info"><p class="custom-block-title">${text}</p>`,
      after: '</div>',
    }],
  ],
  markdown: {
    // lineNumbers: true, // 开启代码块行数显示
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}