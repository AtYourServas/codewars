/* Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

 */

// PARAMETERS:  an integer N >= 1
// RETURN:  an array of length N, where the elements are sequential from 1 to N\
//          multiples of 3 are replaced with the string "Fizz", multiples of 5 are replaced with the string "Buzz"
//          multiples of 3 and 5 are replaced with "FizzBuzz"
// EXAMPLE:  fizzbuzz(3) -->  [1, 2, "Fizz"]
// PSEUDOCODE:  create an empty array, use a for loop to sequentially increase from 1 to N, 
//              for each number, use conditionals to check if the number is divisible by 3, 5, or 3&5
//              push the appropriate word to the array if a multiple, otherwise push the value
//              return the array


function fizzbuzz(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        result.push('FizzBuzz') }
      else if (i % 3 == 0) {
        result.push('Fizz')
      }
      else if (i % 5 == 0) {
        result.push('Buzz')
      }
      else {
        result.push(i)
      }
    }
    return result
  }
  