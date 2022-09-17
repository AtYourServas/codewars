/* Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given. */

// PARAMETERS:  an array of integers
// RETURN:  the same array  filtered to only contain the non-odd numbers
// EXAMPLES:
/*     assert.deepEqual( noOdds( [0,1] ), [0] )
    assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] ) */
// PSEUDOCODE:  use the filter method on the original array.  the function argument will take the modulus of 2 and only return if it equals 0

function noOdds( values ){
    return values.filter( item => !(item % 2))
  }