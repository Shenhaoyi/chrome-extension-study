import scriptSrc from "url:../help/script"
import { enabled } from './mainSwitch';
const init = async () => {
  // 判断是否启用
  if (!(await enabled)) {
    return;
  }
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
