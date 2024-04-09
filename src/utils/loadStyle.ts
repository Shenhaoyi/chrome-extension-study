export default function loadStyle(path: string) {
  const link = document.createElement("link")
  link.type = "text/css"
  link.rel = "stylesheet"
  link.href = path
  const head = document.getElementsByTagName("head")[0]
  head.appendChild(link)
}
