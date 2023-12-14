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
