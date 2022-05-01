/* Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john" */

function nameShuffler(str){
    //split into an array, reverse the array, and rejoin as string
    return str.split(' ').reverse().join(' ')
  }