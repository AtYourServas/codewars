/* Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order. */

function eachCons(array, n) {
    let result = []
    //create a starting point for the first subset of the array
    let startIndex = 0
    //loop thru the array to find subsets
    for(let i = n; i <= array.length; i++) {
        //filter the array to the subset of n elements, starting that the start index and taking n elements
        result.push(array.filter( (elem,index) => index >= startIndex && index < i))
        //increase startIndex for the next time thru the loop
        startIndex++
    }

	return result;
}