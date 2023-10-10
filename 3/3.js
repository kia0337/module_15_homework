const chatBox = document.getElementById("chat-box");
const message = document.getElementById("message-input");
const send = document.getElementById("send-button");
const geolocation = document.getElementById("location-button");

const socket = new WebSocket("wss://echo-ws-service.herokuapp.com");

socket.onopen = function (event) {
  console.log("Соединение открыто");
};

socket.onmessage = function (event) {
  let message = event.data;
  showMessage(message);
};

socket.onclose = function (event) {
  console.log("Соединение закрыто");
};

function showMessage(message) {
  let messageElement = document.createElement("p");
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
}

send.addEventListener("click", function (event) {
  event.preventDefault();
  let message = message.value;
  sendMessage(message);
  message.value = "";
});

function sendMessage(message) {
  socket.send(message);
  showMessage(message);
}

geolocation.addEventListener("click", function (event) {
  event.preventDefault();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let locationURL = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}&zoom=30`;
      sendMessage(locationURL);
    });
  } else {
    alert("Error");
  }
});
