/* Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). */

function twiceAsOld(dadYearsOld, sonYearsOld) {
    //calculate what son's age is multipled by 2
    let twice = sonYearsOld * 2
    //check to see if dad's age is greater than or less than that age and return the difference
    return dadYearsOld > twice ? dadYearsOld - twice : twice - dadYearsOld
  }