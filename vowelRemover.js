/* Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata */

function shortcut(str) {
    //split string into an array and filter
    return str.split('').filter(function(e) {
        //return only values that are not in this array (if not a value, the indexOf will return -1 making the filter value true
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
      //recombine into an array
    }).join('')
  }