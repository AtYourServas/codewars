/* Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */

/* 
    P:  array of numbers (will be valid character codes)
    R:  the same array, but replace any of the character codes for a, e, i, o, u (lowercase only) as the actual letter
    E:  [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])
        returns [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
    P:  create object containing vowels and their character codes
        map thru the array and check each element for a value in the object, otherwise return the value
*/
function isVow(a){
    const vowels = {
        97: 'a',
        101: 'e',
        105: 'i',
        111: 'o',
        117: 'u',
    }
    return a.map( elem => elem in vowels ? vowels[elem] : elem)
   }