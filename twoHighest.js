/* In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  [] */

/* P:  array of any number of elements, if not empty it will be numbers
   R:  an array of the two highest values from provided array.  can be 1 or less values depending on elements in argument
   E:  see above
   P:  create empty array to hold results
       iterate thru provided arry and check if each value is max1 or max2
       push the highest values to the results array
       return results  */

       function twoHighest(arr) {
        return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
      }



console.log(twoHighest([]), [])
console.log(twoHighest([15]), [15])
console.log(twoHighest([15, 20, 20, 17]), [20, 17])