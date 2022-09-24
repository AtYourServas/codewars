/* Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values. */

// PARAMETERS:  an array of arrays (nested arrays), each nested array contains positive integers
// RETURN:  the sum of the minimum value of each nested array
// EXAMPLES:  
/* [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
] */
// PSEUDOCODE:  use the reduce method to iterate through the parent array
//  use the spread operator to pass the elements of the nested arrays into the Math.min function and add that to the accumulator
// return the result of the reduce method

function sumOfMinimums(arr) {
    return arr.reduce((accum, curr) => accum + Math.min(...curr), 0);
  }