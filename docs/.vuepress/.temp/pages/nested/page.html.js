export const data = JSON.parse("{\"key\":\"v-565d9d8b\",\"path\":\"/nested/page.html\",\"title\":\"nested>page\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"nested>page\",\"description\":\"页面的描述\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"nested/page.md\"}")

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
