// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

//P:  array of numbers, will be integers, positive or negative
//R:  subtract element x from element (x-1) starting at index 1.  sum each difference together and return
//E:  Descending order: [10, 2, 1]    Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
//P:  create a variable to keep track of the sum
//    sort the inputted array into descending order
//    use the forEach element to iterate thru the array
//    subtract arr[x] from arr[x-1] and add the difference to sum variable


function sumOfDifferences(arr) {
    let sum = 0
    arr.sort( (a,b) => b-a).forEach( (elem, index) => (index > 0) ? sum += arr[index - 1] - arr[index] : null)
    return sum
  }