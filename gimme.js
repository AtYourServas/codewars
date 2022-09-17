/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1. */

// PARAMETERS:  an array of three numbers
// RETURN: the index of the number that sequentially falls between the other two numbers
// EXAMPLES:  
/* 		doTest([2, 3, 1], 0);
		doTest([5, 10, 14], 1); */
// PSEUDOCODE: 
// create a copy of the original array and sort from smallest to largest
// take the value of 1st index of the sorted array and search for the index of that same value in the original array
// return the index

function gimme (triplet) {
    let sorted = triplet.slice().sort( (a,b) => a-b)
    return triplet.indexOf(sorted[1])
  }