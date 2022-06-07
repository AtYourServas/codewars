/* Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34' */

//P:  array with each element being an array
//R:  the elements of each array written on their own line
//E:  see above
//P: create variable to store result
//   use forEach to iterate thru each element of the array
//   use the join method to join each element into a string and pass that result to the array.  
//   use conditional to check if last element of the array... if not, then add new line... if yes then end

function toCsvText(array) {
    let result = ''
     array.forEach( (elem, index) => {
       result += elem.join(',')
       if (index !== array.length - 1) { 
          result += '\n'
         }
     })
    return result;
  }