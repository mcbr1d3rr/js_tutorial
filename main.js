// repos/js_tutorial/main.js

let Phrase = require("rmcbride-palindrome");

// fn: palindromeTester
// description: prompts for a string & displays results
// input:
// return:
function palindromeTester()
{
  let string = prompt("Please enter a string for palindrome testing:");
  let phrase = new Phrase(string);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome())
  {
    //alert(`"${phrase.content}" is a palindrome!`);
    palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a palindrome!`;
  }
  else
  {
    //alert(`"${phrase.content}" is not a palindrome.`)
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

// listens for web document to load
document.addEventListener("DOMContentLoaded", function()
{

  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", function()
  {
    palindromeTester();
  });

  // use form instead of button
/*
  let form = document.querySelector("#palindromeTester");
  form.addEventListener("submit", function()
  {
    palindromeTester();
  });
*/
});
