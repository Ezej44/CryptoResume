chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["listToken", "currency"], (data) => {
    chrome.storage.sync.set({
      listToken: data.listToken || [
        {
          id: "bitcoin",
          symbol: "btc",
          name: "Bitcoin",
        },
      ],
      currency: data.currency || "usd",
    });
  });
});
