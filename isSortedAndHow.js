/* Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer. */

// PARAMETERS:  an array of integers
// RETURN: 
/* "yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise */
// EXAMPLE:  
/* it("[1, 2]", function() {
    Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
  });
  
  it("[15, 7, 3, -8]", function() {
    Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
  });
  
  it("[4, 2, 30]", function() {
    Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
  }); */
// PSEUDOCODE:  create 2 copies of the submitted array and sort one into ascending order and the other into descending order
// first check if the submitted array checks the sorted array in ascending order using the .every() method... if true return ascending
// if false, check against the descending order array using the .every() method... if true return descending
// if false, return no

function isSortedAndHow(array) {
    const asc = array.slice().sort( (a,b) => a -b)
    const desc = asc.slice().reverse()
    if (array.every( (e, i) => e === asc[i])) {
      return "yes, ascending"
    }
    else if (array.every( (e, i) => e === desc[i])) {
      return "yes, descending"
    }
    else {
      return "no"
    }
  }