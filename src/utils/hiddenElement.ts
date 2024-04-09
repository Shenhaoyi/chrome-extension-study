export default function hiddenElement(selector: string) {
  const element: HTMLElement = document.querySelector(selector)
  if (element) {
    element.style.setProperty("display", "none", "important")
  }
}
