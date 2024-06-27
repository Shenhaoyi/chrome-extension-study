import scriptSrc from 'url:../help/script';
import filterResponseSrc from 'url:../utils/filterResponse';
import type { PlasmoCSConfig } from 'plasmo';

export const config: PlasmoCSConfig = {
  run_at: 'document_start', // 文档解析前执行
};

function loadScript(scriptSrc: string) {
  const script = document.createElement('script');
  script.src = scriptSrc;
  script.type = 'module';
  script.onload = function () {
    script.remove();
    console.log('injected script loaded');
  };
  (document.head || document.documentElement).appendChild(script);
}

const init = async () => {
  loadScript(scriptSrc);
  if (window.location.href.includes('bilibili')) {
    loadScript(filterResponseSrc);
  }
};

init();
