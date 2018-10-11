// palindrome.js

// reverses a string
function reverse(string)
{
  return Array.from(string).reverse().join("");
}

// returns true for a palindrome, false otherwise
function palindrome(string)
{
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}
