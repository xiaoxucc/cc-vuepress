export const data = JSON.parse("{\"key\":\"v-78f2c975\",\"path\":\"/nested/page2.html\",\"title\":\"nested>page2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"nested>page2\",\"description\":\"页面的描述\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"nested/page2.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
