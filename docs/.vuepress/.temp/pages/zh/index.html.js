export const data = JSON.parse("{\"key\":\"v-2d0ad528\",\"path\":\"/zh/\",\"title\":\"关于我\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"关于我\",\"description\":\"这是CC的简介\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"zh/README.md\"}")

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
