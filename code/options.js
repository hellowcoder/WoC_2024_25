const notificationsCheckbox = document.getElementById("enable-notifications");

notificationsCheckbox.addEventListener("change", (event) => {
  const enabled = event.target.checked;
  chrome.storage.sync.set({ notificationsEnabled: enabled });
});

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get("notificationsEnabled", (data) => {
    notificationsCheckbox.checked = data.notificationsEnabled || false;
  });
});
