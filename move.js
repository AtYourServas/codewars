/* Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15 */

//P:  Position (starting point of the user)  - always a positive integer
//    Roll (result of dice roll) - always a positive integer, user will move 2 * roll
//R:  Position + 2 * roll
//E:  move(3,6) should return 15
//P:  create funciton with a formula that returns "position + (2* roll)"

function move (position, roll) {
    return position + (2* roll)
  }