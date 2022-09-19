/* The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0 */

// PARAMETERS:  an array representing the answer key, all elements are a single character string ranging from a-d
//              an array representing student answers (the same length array as the answer key), all elements are a single character ranging from a-d or could an empty string
// RETURN:  a score based on the number of student answers that match the answer key....  +4 for each match, -1 for incorrect, no change for empty strings
// EXAMPLES:  (see above)
// PSUEDOCODE:  create a counter to track the score, use the forEach method to check the value of each index against the index of the answer key, add to the counter based on whether the answers match, are wrong, or blank, return the result

function checkExam(array1, array2) {
    let result = 0
    array2.forEach( (item, index) => {
                  if (item === "") {
                     result += 0
                  }
                  else if (item === array1[index]) {
                    result += 4
                  }
                 else {
                   result -= 1
                 }})
     return result < 0 ? 0 : result
   }