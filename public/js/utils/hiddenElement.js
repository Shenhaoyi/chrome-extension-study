export default function hiddenElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.style.setProperty('display', 'none', 'important');
  }
}
