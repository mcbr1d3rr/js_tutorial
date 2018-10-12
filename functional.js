// functional.js

// init states[]
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// urlify()
// description: Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
// input: string
// return: string
function urlify(string)
{
  //return string.toLowerCase().split(/\s+/).join("-");
  return "https://example.com/" + string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
// description: creates array of lower case strings joined on hyphen using .forEach
// input: elements - array of elements
// return: urls - array of urls
function imperativeUrls(elements)
{
  let urls = [];
  elements.forEach(function(element)
  {
    //urls.push(element.toLowerCase().split(/\s+/).join("-"));
    urls.push(urlify(element));
  });

  return urls;
}

// functionalUrls()
// description: creates array of lower case strings joined on hyphen using .map
// input: array, elements
// return: array, urls
function functionalUrls(elements)
{
  //return states.map(state => state.toLowerCase().split(/\s+/).join('-'));
  return states.map(state => urlify(state));
}

// imperativeSingles()
// description: filters out multi word strings using .forEach
// input: array, elements
// return: array, singles
function imperativeSingles(elements)
{
  let singles = [];
  elements.forEach(function(element)
  {
    if (element.split(/\s+/).length === 1)
    {
      singles.push(element);
    }
  });
  return singles;
}

// functionalSingles()
// description: filters out multi word strings using .filter
// input: array, elements
// return: array, singles
function functionalSingles(elements)
{
  return elements.filter(element => element.split(/\s+/).length === 1);
}

// imperativeSum()
// description: sum array of numbers using .forEach
// input: array, numbers
// return: total
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements)
{
  let total = 0;
  elements.forEach(function(n)
  {
    total += n;
  });
  return total;
}

// functionalSum()
// description: sum array of numbers using .reduce
// input: array, numbers
// return: total
function functionalSum(elements)
{
  return elements.reduce((total, n) => { return total += n; });
}

// imperativeLengths()
// description: lenght of each string in states[] using .forEach
// input: array, states
// return: lengths[] of each state
function imperativeLengths(elements)
{
  let lengths = {};
  elements.forEach(function(element)
  {
    lengths[element] = element.length;
  });
  return lengths;
}

// functionalLengths()
// description: length of each string in states[] using .reduce
// input: array, states
// return: lengths[] of each state
function functionalLengths(elements)
{
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}


// calls urlify(), passing in string, prints returned results
console.log("urlify();");
console.log(urlify("North Dakota"));

// calls imperativeUrls(), passing in states[], prints returned results
console.log("imperativeUrls();");
console.log(imperativeUrls(states));

// calls functionalUrls(), passing in states[], prints returned results
console.log("functionalUrls();");
console.log(functionalUrls(states));

// calls imperativeSingles(), passing in states[], prints returned results
console.log("imperativeSingles();", imperativeSingles(states));

// calls functionalSingles(), passing in states[], prints returned results
console.log("functionalSingles();", functionalSingles(states));

// calls imperativeSum(), passing in numbers[], return results
console.log("imperativeSum()", imperativeSum(numbers));

// calls functionalSum(), passing in numbers[], prints returned results
console.log("urlfunctionalSum();", functionalSum(numbers));

// calls imperativeLengths(), passing in states[], prints returned results
console.log("imperativeLengths();", imperativeLengths(states));

// calls functionalLengths(), passing in states[], prints returned results
console.log("functionalLengths();", functionalLengths(states));
