export default function loadCssCode(code) {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.appendChild(document.createTextNode(code));
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
}
