/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x){
    //Convert all elements to number and then use reduce method to add
    return x.map( x => Number(x)).reduce( (a,b) => a+b)
  }