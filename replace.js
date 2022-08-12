/* Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!" */

function replace(s){
    let vowels = ['A', 'E', 'I', 'O', 'U']
    return s.split('').map( x => vowels.includes(x.toUpperCase()) ? '!' : x).join('')
  }