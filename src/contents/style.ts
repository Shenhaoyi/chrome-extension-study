import styleSrc from '~/css';
import { enabled } from './mainSwitch';

const loadStyle = async (filename: string) => {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = styleSrc[filename];
  // link.href = `url:./css/${filename}.css`
  const container = document.head || document.documentElement;
  container.appendChild(link);
};

const init = async () => {
  // 判断是否启用
  if (!(await enabled)) {
    return;
  }
  const url = window.location.href;
  // 匹配网站地址就加载
  Object.keys(styleSrc)
    .filter((item) => url.includes(item))
    .forEach(loadStyle);
};

init();
