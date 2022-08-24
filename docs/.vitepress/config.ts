import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '开源小灶',
  titleTemplate: '个人开源文档库',
  description: '我的个人文档库.',
  themeConfig: {
    // Type is `DefaultTheme.Config`
    logo: '/logo.svg',
    siteTitle: '开源小灶',
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/BugOS-ly' }],
    sidebar: [
      {
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Hello World', link: '/hello-world' }
        ]
      }
    ],
    outlineTitle: '文档目录',
    // 由于设计原因，仅当页面不包含侧边栏时才会显示页脚。
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // },
    // 在上次更新时间之前显示的前缀文本
    lastUpdatedText: '最近更新时间: ',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  }
})
