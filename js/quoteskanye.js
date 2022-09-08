const loadquote = () => {
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};
// ekhon ui te dekhabo

const displayQuote = (quote) => {
  const blockquote = document.getElementById("quote");
  console.log(quote);
  blockquote.innerText = quote.quote;
};
