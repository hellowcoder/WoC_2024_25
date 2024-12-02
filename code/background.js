chrome.runtime.onInstalled.addListener(() => {
    console.log("Codeforces Enhancer Installed");
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "notify") {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icons/icon48.png",
        title: message.title,
        message: message.body
      });
    }
  });