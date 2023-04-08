const timeDisplay = document.querySelector("#time");
setInterval(function () {
  const dateString = new Date().toLocaleString();
  const date = dateString.split(", ")[1];
  timeDisplay.textContent = date;
}, 1000); // 1s === 1000ms
