/* Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime. */

function amIWilson(p) {
    //create function to calculate the factorial of a number
    let factorial = function (num) {
        return num == 1 ? 1 : num * factorial(num - 1)
    }
    //check if the result of the formula is an integer and return the result
    return Number.isInteger((factorial(p-1) + 1) / (p * p))
    
  }

  console.log(amIWilson(5), true)
  console.log(amIWilson(9), false)
  console.log(amIWilson(6), false)