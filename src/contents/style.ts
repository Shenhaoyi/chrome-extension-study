import bilibili from 'url:../css/bilibili.css';
import github from 'url:../css/github.css';
import google from 'url:../css/google.css';
import juejin from 'url:../css/juejin.css';
import v2ex from 'url:../css/v2ex.css';
import { enabled } from './mainSwitch';

const styleSrc = {
  bilibili,
  v2ex,
  juejin,
  google,
  github,
};

const loadStyle = async (filename) => {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = styleSrc[filename];
  // link.href = `url:./css/${filename}.css`
  const container = document.head || document.documentElement;
  container.appendChild(link);
};

// 需要加载的 css 文件名
const cssFileNameList = ['bilibili', 'v2ex', 'juejin', 'github', 'google'];

const init = async () => {
  // 判断是否启用
  if (!(await enabled)) {
    return;
  }
  // 匹配网站地址就加载
  cssFileNameList.filter((item) => window.location.href.includes(item)).forEach(loadStyle);
};

init();
