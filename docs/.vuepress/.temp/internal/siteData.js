export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"CC\",\"description\":\"这是我的第一个记录文档\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"description\":\"Vue-powered Static Site Generator\"},\"/zh/\":{\"lang\":\"zh-CN\",\"description\":\"Vue 驱动的静态网站生成器\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
