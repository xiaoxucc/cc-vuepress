export const data = JSON.parse("{\"key\":\"v-7a974312\",\"path\":\"/guide/chores.html\",\"title\":\"一些杂事\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"一些杂事\",\"description\":\"记录一下零零碎碎的事情\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"guide/chores.md\"}")

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
