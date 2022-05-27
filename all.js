/* Task
Create a method all which takes two params:

a sequence
a function (function pointer in C)
and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

Example
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True */

//P:  a sequence of numbers or an empty array
//    a function to test the elements of the sequence against
//R:  boolean of whether the elements of the sequence meet the function parameters or not
//    if the sequence is empty, the function should return true
//E:  all((1, 2, 3, 4, 5), function (x) => x > 9) -> false
//    all((1, 2, 3, 4, 5), function (x) => x < 9)    -> True */
//P:  use the every() method on the passed in array with the passed in function as the argument
//    return the result

function all( arr, fun ){
    return arr.every(fun)
  }
