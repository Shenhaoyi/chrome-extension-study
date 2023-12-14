export const siteSelectors = {
  bilibili: [
    'div.topic-panel',
    'main.bili-feed4-layout',
    'div.popular-container',
    'div.right-container-inner.scroll-sticky > div:last-child', // 推荐播放列表
    'div#activity_vote', // 活动条
  ],
  douyin: [
    'div#waterFallScrollContainer', // 首页
    'div.page-recommend-container', // 推荐-单列
  ],
  youtube: ['ytd-two-column-browse-results-renderer[page-subtype="home"]'],
  twitter: ['div[role="presentation"]:first-child', 'aside[aria-label="推荐关注"]'],
};
