const extTabs = (globalThis.browser?.tabs ||
  globalThis.chrome?.tabs) as typeof chrome.tabs

export const getExtTabs = () => {
  if (!extTabs) {
    throw new Error("Extension tabs API is not available")
  }
  return extTabs
}
