/* Write a function that checks if a given string (case insensitive) is a palindrome. */

function isPalindrome(x) {
    //compare original word to reversed (convert to lower case to make sure comparison is equal)
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
  }
  