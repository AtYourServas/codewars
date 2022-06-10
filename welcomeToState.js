/* Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona! */

//P:  an array with two names input as strings
//    a cityname that is a string
//    a state name that is a string
//R:  a string template welcoming the name from the array, to the city/state
//E:  see above
//P:  use template literals to write the string expression
//    use the join method to join the elements of the array with a space between
//    return to user

function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
  }