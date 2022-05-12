/* You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291 */

function uniTotal (string) {
    //create result to accumulate to
    let result = 0
    //iterate thru string
    for (let i = 0; i < string.length; i++) {
      //convert current character in string to number and add to result
      result += string.charCodeAt(i)
    }
    return result
  }