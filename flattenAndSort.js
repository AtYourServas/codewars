/* Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9]. */

// PARAMETERS:  an array containing arrays of integers
// RETURN:  a single array containing all of the values from the array of arrays in ascending order
// EXAMPLE:  [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]
// PSEUDOCODE: create an empty array and use the concat method on the submitted array and use the spread operator to combine the arrays, then use the sort method to sort the elements in ascending order

function flattenAndSort(array) {
    let result = []
    return result.concat(...array).sort( (a,b) => a -b )
  }