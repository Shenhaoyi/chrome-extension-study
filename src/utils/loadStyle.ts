function insertAtFirst(dom: HTMLElement) {
  const container = document.head || document.documentElement;
  if (container.firstChild) {
    container.insertBefore(dom, container.firstChild); // 优先加载
  } else {
    container.appendChild(dom);
  }
}

export function loadCssCode(code: string) {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(code));
  insertAtFirst(style);
}

export function loadStyle(path: string) {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = path;
  insertAtFirst(link);
}
