/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function find_average(array) {
//sum all elements and divide by array length to find average
    return (array === null) || array.length === 0 ? 0: array.reduce( (x,y) => x + y, 0) / array.length
  }