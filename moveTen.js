/* Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0. */

function moveTen(s){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return s.split('').map( elem => {
      let startIndex = alphabet.indexOf(elem)
      let indexPlus10
      startIndex + 10 > 25 ? indexPlus10 = startIndex - 16 : indexPlus10 = startIndex + 10
      return alphabet[indexPlus10]
      }).join('')
  }