/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

// complete the function
function solution(string) {
    return string.split('').map( elem => elem == elem.toUpperCase() ? (' ' + elem) : elem).join('')
}
