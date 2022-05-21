// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

//P:  array of numbers is input, don't have to worry about other input types
//R:  an array in the same order, but duplicates removed
//E:  [1, 2] returns [1, 2]
//    [1, 2, 3, 3, 4]  returns [1, 2, 3, 4]
//P:  use the Set constructor to create an object of unique values.  then use the spreader operator to pass the values back into an array

function distinct(a) {
    return [...new Set(a)]
  }