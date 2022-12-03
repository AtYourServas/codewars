/* Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3 */

function highestRank(arr){
    let count = 0
    let result
    arr.forEach( elem => {
           let currCount = arr.filter( num => num === elem).length
           if (currCount > count) {
             result = elem
             count = currCount
           }
          else if (currCount == count) {
            elem > result ? result = elem : null
          }
               })
      return result
  }