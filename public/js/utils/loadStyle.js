export default function loadStyle(path) {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = path;
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(link);
}
