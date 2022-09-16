/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */

// PARAMETERS:  an array of numbers, a limit (number) for comparison
// RETURN:  if all numbers in the array are less than or equal to the provided limit, return true, otherwise false
// EXAMPLES:  
// assert.strictEqual(smallEnough([66, 101], 200), true);
// assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
// PSEUDOCODE:  
// use the every method on the array with the function provided comparing each array item to the limit
// return the result of the method

function smallEnough(a, limit){
    return a.every( item => item <= limit)
  }