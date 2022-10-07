/* Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74 */

// PARAMETERS:  an array of positive integers
// RETURN:  each integer is multiplied by another integer in the array and then summed together.  the function should return the minimum sum of these scenarios
// EXAMPLE:  
/* minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74 */
// PSEUDOCODE:  sort the inputted array  from lowest to highest
//              iterate thru the array multiplying the highest integer vs the lowest and summing the products
//              return the sum

function minSum(arr) {
    let sum = 0
    let indexRight = arr.length - 1
    arr.sort( (a,b) => a -b)
    console.log(arr)
    for (let i=0; i < arr.length/2; i++) {
      sum += arr[i] * arr[indexRight]
      indexRight -= 1
    }
    return sum
  }