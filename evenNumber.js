/* Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6] */

// PAREMETERS:  a non-empty array, and an integer.  the array will contain at least (integer) even numbers
// RETURN:  a new array containing the last (integer) even numbers from the original array
// EXAMPLES:
/* ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6] */
// PSEUDOCODE:  
// Filter the array to only cotain even numbers, then use the slice method to count backwards for (integer) items of the array

function evenNumbers(array, number) {
    return array.filter( item => item % 2 === 0).slice(-number)
  }