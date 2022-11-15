import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'CC',
  description: '这是我的第一个记录文档',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  theme: defaultTheme({
    navbar: [
      {
        text: '我的学习指南',
        link: '/guide/',
        children: [{ text: 'Node', link: '/guide/node' }, { text: 'Git', link: '/guide/git' }, { text: '一些杂事', link: '/guide/chores' }],
      },
      // {
      //   text: '嵌套',
      //   link: '/nested/',
      //   children: ['/nested/page', '/nested/page2'],
      // },
      // {
      //   text: '贡献',
      //   link: '/contributing',
      // },
      // {
      //   text: 'foo',
      //   link: '/foo',
      // },
    ],
  }),
})