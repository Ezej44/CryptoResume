const goToOptionsButton = document.getElementById("go-to-options-button");
goToOptionsButton.addEventListener("click", () => {
  chrome.runtime.openOptionsPage();
});
