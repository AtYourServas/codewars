/* Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!" */

function replace(s){
    // return s.replace(/[AEIOU]/gi,'!')
    
    return s.split('').map( elem => {
      return 'AEIOU'.includes(elem.toUpperCase()) ? '!' : elem
    })
    .join('')
  }