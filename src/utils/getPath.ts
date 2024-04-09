export function getPath(element: Element): string | null {
  if (!(element instanceof Element)) return null

  const path: string[] = []
  while (element.nodeType === Node.ELEMENT_NODE) {
    let selector = element.nodeName.toLowerCase()
    const id = element.id
    const classes = Array.from(element.classList).join(".")
    if (id) {
      selector += "#" + id
      path.unshift(selector)
      break
    } else if (classes) {
      selector += "." + classes
    }
    path.unshift(selector)
    element = element.parentNode as Element
  }
  return path.join(" > ")
}
