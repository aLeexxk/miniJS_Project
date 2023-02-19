//  get the button and message display element from the DOM
const btn = document.querySelector("#btn");
const input = document.querySelector("#messageInput");
const showMessage = document.querySelector("#displayMessage");

// attach an event listener to the button that listens for a click.
btn.addEventListener("click", sendMsg);

//  Define the sendMsg function that is called when the button is clicked
function sendMsg() {
  let msg = input.value;

  if (msg === "") {
    window.alert("cannot send empty message");
    return;
  }

  showMessage.innerHTML = msg;
  input.value = "";
}
