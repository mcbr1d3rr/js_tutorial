(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"rmcbride-palindrome":2}],2:[function(require,module,exports){
// index.js (from palindrome.js)
// repos/palindrome/index.js

// export so Phrase can be used by other files
module.exports = Phrase;

// description: add reverse to all string
// return: reversed string
// Reverses a string.
String.prototype.reverse = function ()
{
  return Array.from(this).reverse().join("");
}

// fn Phrase()
// description: defines a letter palindrome Phrase object,
// includes palindrome function into the Phrase object as a method
// input: content
// returns: True if letter palindrome, else false
function Phrase(content)
{
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent()
  {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content, using for loop
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
/*
  this.letters = function letters()
  {
    let theLetters = [];
    for (let i = 0; i < this.content.length; i++)
    {
      if (this.content.charAt(i).match(/[a-zA-Z]/))
      {
        theLetters.push(this.content.charAt(i));
      }
    }
    return theLetters.join("");
  }
*/
/*
  // or this .using .forEach to replace for loop method.
  this.letters = function letters()
  {
    let theLetters = [];
    const letterRegex = /[a-z]/i;
    Array.from(this.content).forEach(function(character)
    {
      if (character.match(letterRegex))
      {
        theLetters.push(character);
      }
    });
    return theLetters.join("");
  }
*/
/*
  // or we could replace above to return the letters in the content, using .filter & .match /i
  this.letters = function letters()
  {
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }
*/

  // Returns the letters in the content, using for loop
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  // or we could replace above to return the letters in the content, using .match .gi
  this.letters = function letters()
  {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Returns true if the letter phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome()
  {
    if(this.processedContent().length == 0)
    {
      return false;
    }
    else
    {
      return this.processedContent() === this.processedContent().reverse();
    }
  }
}

},{}]},{},[1]);
