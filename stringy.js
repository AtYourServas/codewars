/* write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers. */

function stringy(size) {
    //create empty string as starting point
     let result = ''
     //loop from 1 to size
     for (let i = 1; i <= size; i++) {
       //add 0 or 1 depending on if i is even or odd
         i % 2 ? result += 1 : result += 0
     } 
     return result
    }