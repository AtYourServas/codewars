/* Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]] */

// PARAMETERS:  an array of arrays
// RETURN:  a single array combining the elements of the arrays within the provided array argument
// EXAMPLE:
/* flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]] */
// PSEUDOCODE:
//  create an array to hold result
//  iterate through the original array and for each item, concat the elements using the spread tool to the result array

var flatten = function (array){
    let result = []
    array.forEach(item => Array.isArray(item) ? result.push(...item) : result.push(item))
    return result
  }
