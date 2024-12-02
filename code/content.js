const challengeButton = document.createElement("button");
challengeButton.textContent = "Challenge";
challengeButton.style.position = "fixed";
challengeButton.style.bottom = "10px";
challengeButton.style.right = "10px";
challengeButton.style.zIndex = 9999;
challengeButton.addEventListener("click", () => {
  const problemUrl = window.location.href;
  chrome.runtime.sendMessage({
    type: "notify",
    title: "Challenge Sent",
    body: `Problem shared: ${problemUrl}`
  });
});

document.body.appendChild(challengeButton);
