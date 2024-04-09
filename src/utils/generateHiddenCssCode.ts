export default function generateHiddenCssCode(selectors: string[]) {
  return selectors.reduce((prev, selector) => {
    return prev + `${selector} { display: none !important; }\n`
  }, "")
}
