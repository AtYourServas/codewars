function createPhoneNumber(numbers){
    let phone = '('
    for (let i=0;i<=9;i++) {
      if (i !== 3 && i !== 6) {
        phone += String(numbers[i])
        }
      else if (i===3) {
        phone += ')' + String(numbers[i])
      }
      else if (i===6){
        phone += '-'
        phone += String(numbers[i])
      } 
    }
    return phone
  }

  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])


  //common solution from codewars
  function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
    console.log(format)
  }
  
}