const counter = document.querySelector("#counterValue");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

// Initialize the count to zero
let count = 0;

increase.addEventListener("click", increaseCounter);
decrease.addEventListener("click", decreaseCounter);

// Define the increaseCounter function that increases the count and updates the counter element
function increaseCounter() {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML > "0") {
    counter.style.color = "green";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
}

// Define the decreaseCounter function that decreases the count and updates the counter element
function decreaseCounter() {
  count--;
  counter.innerHTML = count;
  if (counter.innerHTML < "0") {
    counter.style.color = "red";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
}
