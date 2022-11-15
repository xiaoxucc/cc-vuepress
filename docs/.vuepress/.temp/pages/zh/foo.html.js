export const data = JSON.parse("{\"key\":\"v-9c74260a\",\"path\":\"/zh/foo.html\",\"title\":\"zh>foo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"zh>foo\",\"description\":\"页面的描述\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"zh/foo.md\"}")

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
