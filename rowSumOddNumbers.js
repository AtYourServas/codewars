/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */

// PARAMETERS:  a triangle of conescutive odd numbers, with n rows, n starts with 1

// RETURN:  sum of all numbers in row n

// EXAMPLES:
// assert.strictEqual(rowSumOddNumbers(42), 74088);

// PSEUDOCODE:  
// return n cubed 

function rowSumOddNumbers(n) {
	return n ** 3
}