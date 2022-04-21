/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

function removeEveryOther(arr){
    const arr2 = []
    //check each elemenent index to determine if divisible by 2, if yes then push that element to the new array
    arr.forEach( (elem, index) => index % 2 || arr2.push(elem))
    return arr2
  }


//could also use filter

//arr.filter( (elem, index) => index % 2 === 0)