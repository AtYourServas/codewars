/* Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
 */


var humanYearsCatYearsDogYears = function(humanYears) {
    //create trackers for years defaulting to humanYears at 1
    let catYears = 15, dogYears = 15
    //create conditional to check if humanYears is 2 or more
    if (humanYears >= 2) {
    //calculate dogYears and catYears using formual
    dogYears += 9 + ((humanYears - 2) * 5) 
    catYears += 9 + ((humanYears - 2) * 4)
    }
    return [humanYears, catYears, dogYears];
  }
  

  //Ex
  console.log(humanYearsCatYearsDogYears(1), [1,15,15])
  console.log(humanYearsCatYearsDogYears(2), [2,24,24])
  console.log(humanYearsCatYearsDogYears(3), [3,28,29])