/* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length. */

// PARAMETERS:  an array of strings

// RETURN:  the same array sorted by the length of each string from shortest to longest

// EXAMPLE:  ["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"])

// PSEUDOCODE:  use the sort method on the array to compare the length of each item

function sortByLength (array) {
    return array.sort( (curr, next) => curr.length - next.length)
  };