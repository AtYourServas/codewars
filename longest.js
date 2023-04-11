/* Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :) */

function longest(str) {
    let prev = 0
    let currStr = ''
    let longestStr = ''
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    str.split('').forEach( elem => {
      if (alpha.indexOf(elem) >= prev) {
        currStr = currStr + elem
        if (currStr.length > longestStr.length) {
          longestStr = currStr
          }}
        else {
          currStr = elem
        }
        prev = alpha.indexOf(elem)
      }
    )
    return longestStr
  }