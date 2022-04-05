/* Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order. */

function digitize(n) {
    //convert number input to string; split into an array; reverse the array; map each element in the array back to a number
    return n.toString().split('').reverse().map(x => Number(x))
  }

//Examples
console.log(digitize(1839), [9, 3, 8, 1])
console.log(digitize(3820), [0, 2, 8, 3])
console.log(digitize(0), [0])