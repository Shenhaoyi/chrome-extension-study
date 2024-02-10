console.log('content script');
const script = document.createElement('script');
script.src = chrome.runtime.getURL('js/script.js');
script.type = 'module';

const appendScript = () => {
  (document.head || document.documentElement).appendChild(script);
};

script.onload = function () {
  this.remove();
  console.log('script loaded');
};

appendScript();

const loadStyle = (filename) => {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = chrome.runtime.getURL(`/css/${filename}.css`);
  (document.head || document.documentElement).appendChild(link);
};

// 需要加载的 css 文件名
const cssFileNameList = ['bilibili', 'v2ex', 'juejin', 'github', 'google'];

const currentUrl = window.location.href;
if (currentUrl === 'https://www.douyin.com') {
  // 直接跳转关注页
  window.location = 'https://www.douyin.com/follow';
}
// 匹配网站地址就加载
cssFileNameList.filter((item) => currentUrl.includes(item)).forEach(loadStyle);
