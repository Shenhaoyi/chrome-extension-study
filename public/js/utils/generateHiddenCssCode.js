export default function generateHiddenCssCode(selectors) {
  return selectors.reduce((prev, selector) => {
    return prev + `${selector} { display: none !important; }\n`;
  }, '');
}
