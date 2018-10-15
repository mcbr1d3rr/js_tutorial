// palindrome.js

// fn: reverse()
// description: reverses a string
// input: string
// return: reversed string
// Reverses a string.
function reverse(string)
{
  return Array.from(string).reverse().join("");
}

// fn Phrase()
// description: defines a palindrome Phrase object,
// includes palindrome function into the Phrase object as a method
// input: content
// returns: True if palindrome, else false
function Phrase(content)
{
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent()
  {
    return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome()
  {
    return this.processedContent() === reverse(this.processedContent());
  }
}

// fn TranslatedPhrase()
// description: Defines a TranslatedPhrase object.
// input: content
// input: translation
// returns: True if translation is palindrome, else false
function TranslatedPhrase(content, translation)
{
  this.content = content;
  this.translation = translation;

    // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent()
  {
    return this.translation.toLowerCase();
  }
}

// translatedPhrase now inherits all methods of Phrase instance.
TranslatedPhrase.prototype = new Phrase();
