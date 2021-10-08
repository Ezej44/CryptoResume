chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    listToken: [
      {
        id: "bitcoin",
        symbol: "btc",
        name: "Bitcoin",
      },
    ],
    currency: "usd",
  });
});
