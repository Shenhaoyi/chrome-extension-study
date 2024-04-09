import bilibili from "url:../css/bilibili.css"
import github from "url:../css/github.css"
import google from "url:../css/google.css"
import juejin from "url:../css/juejin.css"
import v2ex from "url:../css/v2ex.css"

const styleSrc = {
  bilibili,
  v2ex,
  juejin,
  google,
  github
}

const loadStyle = async (filename) => {
  const link = document.createElement("link")
  link.type = "text/css"
  link.rel = "stylesheet"
  link.href = styleSrc[filename]
  // link.href = `url:./css/${filename}.css`
  const container = document.head || document.documentElement
  container.appendChild(link)
}

// 需要加载的 css 文件名
const cssFileNameList = ["bilibili", "v2ex", "juejin", "github", "google"]

// 匹配网站地址就加载
cssFileNameList.filter((item) => currentUrl.includes(item)).forEach(loadStyle)

const currentUrl = window.location.href
