export const data = JSON.parse("{\"key\":\"v-11e76820\",\"path\":\"/zh/nested/\",\"title\":\"zh>nested\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"zh>nested\",\"description\":\"页面的描述\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"zh/nested/README.md\"}")

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
