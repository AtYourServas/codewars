/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them. */


function abbrevName(name){
//Split words into array, pull first letter of each word, and join them together with a "." separator
return name.split(" ").map( e => e[0]).join(".").toUpperCase()

}


//Examples:
console.log(abbrevName("sam harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C")