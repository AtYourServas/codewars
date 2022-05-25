/* Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

a is considered "close to" b if margin is greater than or equal to the distance between a and b.

Please note the following:

When a is close to b, return 0.
Otherwise...

When a is less than b, return -1.

When a is greater than b, return 1.

If margin is not given, treat it as zero.

Assume: margin >= 0

Tip: Some languages have a way to make parameters optional. */

//P:  two numbers that need to be compared (a, b)
//    a margin ( >=0 ) used to determine whether a is close to b
//R:  0 (if a is within the margin to b)
//    -1 (if a is less than b)
//    1 (if a is greater than b)
//E:  
/* Example 1
If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.

This is because a and b are no more than 3 numbers apart.

Example 2
If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1.

This is because the distance between a and b is greater than 0, and a is less than b. */
//P:  use conditional to determine if the absolute value of (a - b) is less than or equal to the margin
//  if yes, return 0
//   if no, use another condition to determine if a is greater than or less than b and return 1 if a is less than or -1 if it is greater than b

function closeCompare(a, b, margin = 0){
    return Math.abs(a - b) <= margin ? 0 :
        a < b ? -1 : 1;
  }
  