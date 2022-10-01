/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

// PARAMETERS:  a string
// RETURN:  the same string but with each of the words reversed, all spacing must remain the same
// EXAMPLES:  
/* "This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */
// PSEUDOCODE:  
// split the string into an array of words using " " as the delimeter
// use map to iterate thru the array of strings
// split each array item into an array of characters, reverse, and then rejoin
// join back the mapped array into a string

function reverseWords(str) {
    return str.split(' ').map( item => item.split('').reverse().join('')).join(' ')
  }