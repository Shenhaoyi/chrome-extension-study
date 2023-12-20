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
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(link);
};

// 需要加载的 css 文件名
const cssFileNameList = ['bilibili', 'v2ex'];

const currentUrl = window.location.href;
// 匹配网站地址就加载
cssFileNameList.filter((item) => currentUrl.includes(item)).forEach(loadStyle);
