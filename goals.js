/* Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17 */

//P:  Goals provided for LaLiga, Copa del Rey, Champions... Input will always be positive integer
//R:  Sum of all goals from each league
//E:  5, 10, 2 => 17
//P:  Create function and sum all parameters

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }