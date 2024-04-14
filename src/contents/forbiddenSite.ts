import { enabled } from './mainSwitch';
interface ForbiddenSite {
  name: string;
  forbiddenPaths: string[];
  replaceUrl: string;
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
];

const init = async () => {
  // 判断是否启用
  if (!(await enabled)) {
    return;
  }
  const href = window.location.href;
  const site = forbiddenSites.find((item) => href.includes(item.name));
  if (site) {
    const { forbiddenPaths, replaceUrl } = site;
    setInterval(() => {
      if (forbiddenPaths.includes(window.location.pathname)) {
        window.location.replace(replaceUrl); // TODO: 优化成事件监听
      }
    }, 1000);
  }
};

init();
