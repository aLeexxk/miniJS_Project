let quotes = [
  {
    quotes:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quotes: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quotes: "Life is what happens when you're busy making other plans",
    author: "John Lennon",
  },
  {
    quotes:
      "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead",
  },
];

// button that the user clicks to generate a new quote.

const quoteBtn = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");

// this function generate select a random quote

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[number].quotes;
  quoteAuthor.innerHTML = quotes[number].author;
}

// this line generates a quote when clicked
quoteBtn.addEventListener("click", displayQuote);
