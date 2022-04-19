/* The cockroach is one of the fastest insects. Write a function which takes its 
speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer. */

function cockroachSpeed(s) {
    //convert km to cm by multiplying by 100,000 cm/km
    //convert cm/hr to cm/s by dividing by 3600 s/hr
    //round answer down to nearest integer
    return Math.floor(s * 100000 / 3600)
  }