/* Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

X will be a valid integer number.
X will be either a number or a string. Both are valid. */

//P:  an integer (temperature) provided as either a number or a string
//R:  if the integer squared is >1,000, return 'It's hotter than the sun!!', otherwise return 'Help yourself to a honeycomb Yorkie for the gloveblox.'
//E:  apple('50'), 'It\'s hotter than the sun!!' 
//    apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'
//P:  use a conditional checking if x^2 is greater than 1000
//    true return hotter than the sun, else return help yourself...

function apple(x){
    return (x ** 2) > 1000 ? `It's hotter than the sun!!` : `Help yourself to a honeycomb Yorkie for the glovebox.`
  }