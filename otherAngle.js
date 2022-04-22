/* You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested. */

function otherAngle(a, b) {
    //triangle angles add up to 180. subtract known angles from 180 to find result
    return 180 - a - b
  }