/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"] */

// PARAMETERS:  an array of varying lengths containing string values

// RETURN:  an array of strings with the original values with a line number, colon, and space in front of each item

// EXAMPLES: 
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// PSEUDOCODE:  
// iterate over each array value
// prepend each value with a line number, starting with 1, and also add a colon and space between the line number and item

var addLineNumbers =function(array){
    return array.map( (item, index) => `${index + 1}: ${item}`)
  }