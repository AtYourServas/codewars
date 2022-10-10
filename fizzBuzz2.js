/* Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”. */

let fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        let result = ""
        if (i % 3 === 0) {
            result += "fizz"
        }
        if (i % 5 === 0) {
            result+= "buzz"
        }
        console.log(result || i)
    }
}

