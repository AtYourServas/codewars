/* If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers. */

var countSheep = function (num){
    //create variable to store string
    let str = ''
    //use loop to add to string for each number of sheep
    for (let i = 1; i <= num; i++) {
      str += `${i} sheep...`
    }
    //return finished string
    return str
  }