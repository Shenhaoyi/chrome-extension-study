import hiddenElement from './utils/hiddenElement.js';
import { siteSelectors } from './config.js';

const doit = () => {
  console.log('doit');
  const currentUrl = window.location.href;
  for (let key in siteSelectors) {
    if (currentUrl.includes(key)) {
      const selectors = siteSelectors[key];
      selectors.forEach(hiddenElement);
    }
  }
};
doit();
