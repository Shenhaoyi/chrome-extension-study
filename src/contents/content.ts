import bilibili from "url:../css/bilibili.css"
import github from "url:../css/github.css"
import google from "url:../css/google.css"
import juejin from "url:../css/juejin.css"
import v2ex from "url:../css/v2ex.css"
import scriptSrc from "url:../help/script"

const styleSrc = {
  bilibili,
  v2ex,
  juejin,
  google,
  github
}

console.log("content script")
const script = document.createElement("script")
script.src = scriptSrc
script.type = "module"

const appendScript = () => {
  ;(document.head || document.documentElement).appendChild(script)
}

script.onload = function () {
  script.remove()
  console.log("script loaded")
}

appendScript()

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

const currentUrl = window.location.href
// 抖音处理
if (currentUrl.includes("douyin")) {
  const pathNames = ["/", "/discover"]
  setInterval(() => {
    if (pathNames.includes(window.location.pathname)) {
      // 直接跳转关注页
      window.location.replace("https://www.douyin.com/follow")
    }
  }, 1000)
}
// 匹配网站地址就加载
cssFileNameList.filter((item) => currentUrl.includes(item)).forEach(loadStyle)
