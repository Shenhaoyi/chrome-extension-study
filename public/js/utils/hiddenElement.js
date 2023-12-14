export default function hiddenElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.style.display = 'none';
    // element.style.visibility = 'hidden';
  }
}
