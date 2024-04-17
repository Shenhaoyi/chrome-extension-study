import { loadCssCode } from '~utils/loadStyle';
import generateHiddenCssCode from '../utils/generateHiddenCssCode';
import { siteSelectors } from './config';

const doit = () => {
  const currentUrl = window.location.href;
  // 1.隐藏元素
  for (let key in siteSelectors) {
    if (currentUrl.includes(key)) {
      const selectors = siteSelectors[key];
      const code = generateHiddenCssCode(selectors);
      loadCssCode(code);
    }
  }
};
doit();
