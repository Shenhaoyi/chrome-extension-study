import { siteSelectors } from './config.js';
import generateHiddenCssCode from './utils/generateHiddenCssCode.js';
import loadCssCode from './utils/loadCssCode.js';

const doit = () => {
  console.log('doit');
  const currentUrl = window.location.href;
  for (let key in siteSelectors) {
    if (currentUrl.includes(key)) {
      const selectors = siteSelectors[key];
      const code = generateHiddenCssCode(selectors);
      loadCssCode(code);
    }
  }
};
doit();
