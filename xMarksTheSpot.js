/* Task:
Given a two dimensional array, return the co-ordinates of x.

If x is not inside the array, or if x appears multiple times, return [].

The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

Examples
Input: []
Return an empty array if input is an empty array => []

Input: [
  ['o', 'o'],
  ['o', 'o']
]
Return an empty array if no x found => []

Input: [
  ['x', 'o'],
  ['o', 'x']
]
Return an empty array if more than one x found => []

Input: [
  ['x', 'o'],
  ['o', 'o']
]
Return [0,0] when x at top left => [0, 0]

Input: [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
Return [4,6] for the example above => [4, 6] */

const xMarksTheSpot = (input) => {
    let numberOfX = 0
    let row = 0
    let column = 0
    let rowCount = 0
    // check for multiple x
    input.forEach( arr => {
        // check number of X's
        numberOfX += arr.filter(elem => elem === 'x').length
        // find coordinates of x
        if (arr.indexOf('x') > -1) {
          column = arr.indexOf('x')
          row = rowCount}
        else {
          rowCount += 1
        }
    })
    return numberOfX != 1 || !input.length ? [] : [row, column]
  }