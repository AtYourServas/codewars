/* Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS. */

// P:  a string... with a mix of upper/lowercase
// R:  boolean of whether the string input was all uppercase
// E:  see above
// P:  return result of string input compared to string input with upperCase method applied to it

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
  }
