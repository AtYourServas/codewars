/* Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.*/

function moveTen(s){
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    return s.split('').map((elem) => {
      let index = alph.indexOf(elem)
      return index > 15 ? alph[index - 16] : alph[index + 10]}).join('')
  }