// 抖音处理
if (window.location.href.includes("douyin")) {
  const pathNames = ["/", "/discover"]
  setInterval(() => {
    if (pathNames.includes(window.location.pathname)) {
      // 直接跳转关注页
      window.location.replace("https://www.douyin.com/follow")
    }
  }, 1000)
}
