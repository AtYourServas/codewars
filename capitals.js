/* Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */

// PARAMETERS:  a single word as a string

// RETURN:  an array containing the index of each letter from the string that was capitalized

// EXAMPLES:  capitals('CodEWaRs'), [0,3,4,6] 

// PSUEDOCODE:  

// create an empty array to keep track of results
// split the provided string into an array and use the forEach method to compare each item to the capitalized letter using .toUpperCase()
// if they are equal, pass the index to the result
// return result

var capitals = function (word) {
	let result = []
  word.split('').forEach( (item, index) => item === item.toUpperCase() ? result.push(index) : null)
  return result
};