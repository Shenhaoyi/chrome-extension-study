import type { PlasmoCSConfig } from 'plasmo';
import { enabled } from './mainSwitch';

export const config: PlasmoCSConfig = {
  run_at: 'document_start', // 文档解析前执行
};

interface ForbiddenSite {
  name: string;
  forbiddenPaths: string[];
  replaceUrl: string;
  force?: boolean;
}
const forbiddenSites: ForbiddenSite[] = [
  {
    name: 'douyin',
    forbiddenPaths: ['/', '/discover'],
    replaceUrl: 'https://www.douyin.com/follow', // 跳转关注页
  },
  {
    name: 'xiaohongshu',
    forbiddenPaths: ['/', '/explore'],
    replaceUrl: 'https://www.xiaohongshu.com/notification',
  },
  {
    name: 'v2ex',
    forbiddenPaths: ['/'],
    force: true,
    replaceUrl: 'https://www.google.com',
  },
  {
    name: 'weibo',
    forbiddenPaths: ['/'],
    force: true,
    replaceUrl: 'https://www.google.com',
  },
];

const site = forbiddenSites.find((item) => window.location.href.includes(item.name));

const doForbidden = () => {
  const { forbiddenPaths, replaceUrl, force } = site;
  if (force || forbiddenPaths.includes(window.location.pathname)) {
    window.location.replace(replaceUrl);
  }
};
const init = async () => {
  // 判断是否启用
  const isEnabled = await enabled;
  if (isEnabled && site) {
    doForbidden();
    setInterval(doForbidden, 1000); // TODO: 优化成事件监听
  }
};

init();
