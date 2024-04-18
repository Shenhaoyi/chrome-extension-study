function insertAtFirst(dom: HTMLElement) {
  const container = document.head || document.documentElement;
  if (container.firstChild) {
    container.insertBefore(dom, container.firstChild); // 优先加载
  } else {
    container.appendChild(dom);
  }
}

// html 解析器看到就能直接解析到，放到 head 前，一定能保证优先解析
export function loadCssCodeAsStyle(code: string) {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(code));
  insertAtFirst(style);
}

// 缺点：即使放在 head 可能造成闪烁，涉及到资源加载线程
export function loadCssFileAsLink(path: string) {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = path;
  insertAtFirst(link);
}
