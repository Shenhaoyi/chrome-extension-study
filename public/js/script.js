import { siteSelectors, customStyleSites } from './config.js';
import generateHiddenCssCode from './utils/generateHiddenCssCode.js';
import loadCssCode from './utils/loadCssCode.js';
import loadStyle from './utils/loadStyle.js';

const doit = () => {
  console.log('doit');
  const currentUrl = window.location.href;
  // 1.隐藏元素
  for (let key in siteSelectors) {
    if (currentUrl.includes(key)) {
      const selectors = siteSelectors[key];
      const code = generateHiddenCssCode(selectors);
      loadCssCode(code);
    }
  }
  // 2.加载自定义样式,TODO:无法访问 chrome API，待完善
  // customStyleSites.forEach((site) => {
  //   loadStyle(`/css/${site}.css`);
  // });
};
doit();
