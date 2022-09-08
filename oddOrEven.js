/* Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even" */

// PARAMETERS:  an array of integers or an empty array

// RETURN:  sum of elements being even or odd being returned as a string "even" or "odd"

// EXAMPLES:
/*
    assert.strictEqual(oddOrEven([0]), 'even')
    assert.strictEqual(oddOrEven([]), 'even')
    assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
    assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
    assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
    assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd') */

// PSEUDOCODE:  

// use reduce method to sum the array elements
// check if odd or even using modulus operator
// return result as string

function oddOrEven(array) {
    return array.reduce( (sum, curr) => sum + curr, 0) % 2 ? 'odd' : 'even'
 }