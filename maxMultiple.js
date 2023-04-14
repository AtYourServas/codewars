/* Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found . */

function maxMultiple(divisor, bound){
    let answer = 0
    while (answer == 0) {
      bound % divisor ? bound-- : answer = bound
    } 
    return answer
  }