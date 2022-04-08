/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59 */

function past(h, m, s){
    //check to confirm input constraints
    if ((h > 23) || (m > 59) || (s > 59)) {
        return 'Not a valid input'
    }
    //1000 miliseconds in a second (multiply seconds by 1,000)
    //60,000 miliseconds in a minute (multiply minutes by 60,000)
    //36,000 miliseconds in an hour (multiply hours by 360,000)
    return (s * 1000) + (m * 60000) + (h * 3600000)
}