/* Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID" */

function sumMul(n,m){
    let result = 0
    if (m>n && n!=0) {  //confirm m is greater than n and n is not equal to 0
      
    for (i = n; i <= m; i+=n) {   //find multiples of n
        result += i   //add multiples to result
    }
    return result
    }
    else {
        return 'INVALID'    //for invalid results
    }
}