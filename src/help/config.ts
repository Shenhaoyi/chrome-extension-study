export const siteSelectors = {
  bilibili: [
    'div.topic-panel',
    'main.bili-feed4-layout',
    'div.popular-container',
    'div.right-container-inner.scroll-sticky > div:last-child > div#reco_list', // 推荐播放列表
    'div.right-container-inner.scroll-sticky > div:last-child > div.pop-live-small-mode', // 推荐直播
    'div#activity_vote', // 活动条
    'div.adblock-tips', // 顶部广告拦截提示
    'div.bpx-player-ending-related', // 播放结束推荐
  ],
  douyin: [
    // 'div#waterFallScrollContainer', // 首页
    // 'div#douyin-right-container > div#slidelist.fullscreen_capture_feedback', // 推荐-单列(也包含关注哪里的)
  ],
  // youtube: ['ytd-two-column-browse-results-renderer[page-subtype="home"]'],
  twitter: ['div[role="presentation"]:first-child', 'aside[aria-label="推荐关注"]'],
};
