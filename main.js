// repos/js_tutorial/main.js

let Phrase = require("rmcbride-palindrome");

// fn: palindromeTester
// description: prompts for a string & displays results
// input:
// return:
function palindromeTester(event)
{
  event.preventDefault();

  //let string = prompt("Please enter a string for palindrome testing:");
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome())
  {
    palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a palindrome!`;
  }
  else
  {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

// listens for web document to load
document.addEventListener("DOMContentLoaded", function()
{
/*
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", function()
  {
    palindromeTester();
  });
*/
  // use submit form instead of click button

  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event)
  {
    palindromeTester(event);
  });
});
