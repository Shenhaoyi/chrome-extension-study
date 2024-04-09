export default function loadCssCode(code: string) {
  const style = document.createElement("style")
  style.appendChild(document.createTextNode(code))
  const head = document.getElementsByTagName("head")[0]
  head.appendChild(style)
}
