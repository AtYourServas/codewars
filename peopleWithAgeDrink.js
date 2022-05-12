/* Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky" */

function peopleWithAgeDrink(old) {
    //create object of possible responses based on age thresholds
    let age = {
      'drink toddy': 14,
      'drink coke': 18,
      'drink beer': 21,
      'drink whisky': 22,
    }
    //default response if over the age of 21
    let result = 'drink whisky'
    //check if the age is less than any of the age thresholds and assign response
    for (let key in age) {
      if (old < age[key]) {
        result = key
        break;
      }
    }
    return result
  };