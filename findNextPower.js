/* We have the number 12385. We want to know the value of the closest cube but higher than 12385. The answer will be 13824.

Now, another case. We have the number 1245678. We want to know the 5th power, closest and higher than that number. The value will be 1419857.

We need a function find_next_power ( findNextPower in JavaScript, CoffeeScript and Haskell), that receives two arguments, a value val, and the exponent of the power, pow_, and outputs the value that we want to find.

Let'see some cases:

findNextPower(12385, 3) == 13824

findNextPower(1245678, 5) == 1419857
The value, val will be always a positive integer.

The power, pow_, always higher than 1. */

// PARAMETERS:  an integer to compare to the result of values multiplied expoenentially
//              another integer representing the exponent in an equation (will always be > 1)

// RETURN:  the result of a number taken to the provided exponent that is higher and closest to the provided integer

// EXAMPLES:
/*     assert.strictEqual(findNextPower(8, 3), 27)
    assert.strictEqual(findNextPower(12385, 3), 13824)
    assert.strictEqual(findNextPower(1245678, 5), 1419857)
    assert.strictEqual(findNextPower(1245678, 6), 1771561)
    assert.strictEqual(findNextPower(4782969, 7), 10000000) */

// PSEUDOCODE:  create a counter to start incrementing and a result for tracking the results of this counter taken to the provided exponent
//              use a do while loop to increase the counter until the result is higher than the provided integer
//              return the result from the last execution of the wihle loop

function findNextPower(val, pow_) {
    let counter = 2
    let result = 0
    do {
      result = counter**pow_
      counter++
    } while (result <= val)
    return result
}