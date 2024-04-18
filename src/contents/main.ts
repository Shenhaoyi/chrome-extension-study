import scriptSrc from 'url:../help/script';
import type { PlasmoCSConfig } from 'plasmo';

export const config: PlasmoCSConfig = {
  run_at: 'document_start', // 文档解析前执行
};
const init = async () => {
  console.log('content script');
  const script = document.createElement('script');
  script.src = scriptSrc;
  script.type = 'module';

  const appendScript = () => {
    (document.head || document.documentElement).appendChild(script);
  };

  script.onload = function () {
    script.remove();
    console.log('script loaded');
  };

  appendScript();
};

init();
