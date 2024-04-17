import styleSrc from '~/css';
import type { PlasmoCSConfig } from 'plasmo';
import { loadStyle } from '~utils/loadStyle';

export const config: PlasmoCSConfig = {
  run_at: 'document_start', // 文档解析前执行
};

const init = async () => {
  const url = window.location.href;
  // 匹配网站地址就加载
  Object.keys(styleSrc)
    .filter((item) => url.includes(item))
    .forEach((filename) => loadStyle(styleSrc[filename]));
};

init();
