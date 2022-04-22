/* Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6] */

function divisibleBy(numbers, divisor){
    //create empty array to push results to
    let isDivisible = []
    //check if each element in numbers is divisible and push to new array
    numbers.forEach( elem => elem % divisor || isDivisible.push(elem))
    //return answers
  return isDivisible
}