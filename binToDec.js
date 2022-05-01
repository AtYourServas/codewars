/* Complete the function which converts a binary number (given as a string) to a decimal number. */

function binToDec(bin){
    //create variable to track value
    let result = 0
    //iterate thru each binary value in the string
    for (let i = 0; i < bin.length; i++) {
        //calc value for that value based on its place
        result += Number(bin[i]) * (2 ** (bin.length - i - 1))
    }
    return result
  }

  //Test
console.log(binToDec('1001001'), 73)


/* Alternative solution

function binToDec(bin){
  return parseInt(bin,2);
}

*/