/*
  过滤 b 站的搜索结果
*/
(function () {
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const response = await originalFetch(...args);
    if (response.url.includes('api.bilibili.com/x/web-interface/wbi/search/type')) {
      const clonedResponse = response.clone();
      const data = await clonedResponse.json();
      // Modify the response data as needed
      data.data.result = data.data.result.filter((item: any) => {
        const { pubdate, play } = item;
        const date = new Date(pubdate * 1000);
        return date.getFullYear() >= 2024 && play > 1000;
      });

      // data.someField = 'modified_value';

      // Create a new response with the modified data
      const modifiedResponse = new Response(JSON.stringify(data), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });

      return modifiedResponse;
    }
    return response;
  };
})();
