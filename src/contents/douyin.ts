import { enabled } from './mainSwitch';
const init = async () => {
  // 判断是否启用
  if (!(await enabled)) {
    return;
  }
  // 抖音处理
  if (window.location.href.includes('douyin')) {
    const pathNames = ['/', '/discover'];
    setInterval(() => {
      if (pathNames.includes(window.location.pathname)) {
        // 直接跳转关注页
        window.location.replace('https://www.douyin.com/follow');
      }
    }, 1000);
  }
};

init();
