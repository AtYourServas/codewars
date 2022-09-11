/* Write a function that returns the number of occurrences of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0; */

// PARAMETERS:  an array of numbers and a number to search for within the array
// RETURN:  the number of times the provided number appears within the provided array
// EXAMPLE:  see above
// PSEUDOCODE:  create a counter set at 0, iterate thru the array and check each item against the search item, increase the counter for each time the array item matches

Array.prototype.numberOfOccurrences = function(x) {
    let count = 0
    this.forEach(item => item === x ? count+=1 : null)
    return count
  }