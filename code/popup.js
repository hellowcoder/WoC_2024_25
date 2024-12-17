const createRoomButton = document.getElementById("create-room");
const joinRoomButton = document.getElementById("join");
const roomIdInput = document.getElementById("room-id");
const statusDiv = document.getElementById("status");

createRoomButton.addEventListener("click", async () => {
  const roomId = `room_${Date.now()}`;
  chrome.storage.sync.set({ roomId }, () => {
    statusDiv.textContent = `Room created: ${roomId}`;
  });
});

joinRoomButton.addEventListener("click", async () => {
  const roomId = roomIdInput.value;
  if (roomId) {
    chrome.storage.sync.set({ roomId }, () => {
      statusDiv.textContent = `Joined Room: ${roomId}`;
    });
  } else {
    statusDiv.textContent = "Enter a valid Room ID!";
  }
});

