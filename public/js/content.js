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

// 临时使用，TODO:移除
const currentUrl = window.location.href;
if (currentUrl.includes('bilibili')) {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = chrome.runtime.getURL('/css/bilibili.css');
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(link);
}
