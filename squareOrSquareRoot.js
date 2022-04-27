/* Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null. */

function squareOrSquareRoot(array) {
    //check if the squareroot of each element is an integer... if true, override the value in the array with the squareroot, otherwise square it and override with the result 
    array = array.map( x => Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x ** 2)
    return array;  
  }