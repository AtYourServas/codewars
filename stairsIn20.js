/* DESCRIPTION:
Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
Your function should return the 20 year estimate of the stairs climbed using the formula above. */

//P:  7 arrays of integers that represent the number of steps for each day of the week throughout the year
//R:  the sum of all steps for the year multiplied by 20 to estimate the 20 year total
//E:  400,000 steps in one year * 20 = 8,000,000 estimated for 20 years
//P:  use forEach method to iterate through each array within stairs array
//    use reduce method on each of those arrays to sum
//    add that sum to a results variable used to keep track of total steps
//    return the result variable multiplied by 20

function stairsIn20(s){
    let results = 0
    s.forEach( arr => results += arr.reduce( (x, y) => x + y))
    return results * 20
  }