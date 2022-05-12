/* Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi" */

function remove (string) {  
    //iterate through string
    for (let i=0; i < string.length; i++) {
      //if string ends with !, remove 
      string.endsWith('!') ? string = string.slice(0, -1) : null
      }
    return string
  }