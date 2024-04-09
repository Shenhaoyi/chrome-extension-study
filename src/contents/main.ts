import scriptSrc from "url:../help/script"

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
