// palindrome.js

// description: add reverses to String properties
// return: reversed string
// Reverses a string.
String.prototype.reverse = function ()
{
  return Array.from(this).reverse().join("");
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
    return this.processedContent() === this.processedContent().reverse();
  }
}

/* removed as not needed for palindrome
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
*/