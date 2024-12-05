chrome.runtime.onInstalled.addListener(() => {
    console.log("C@C Installed");
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "notify") {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icons/icon-48.png",
        title: message.title,
        message: message.body
      });
    }
  });