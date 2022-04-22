/* Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. */

function correct(string)
{
    //split stirng to array, check each element of the array for mistakes, rejoin array after correcting
  return string.split('').map( elem => {
    switch (elem) {
          case '5':
            return 'S';
            break;
          case '0':
            return 'O';
             break;
         case '1':
             return 'I'
            break;
          default:
            return elem
        }
      }).join('')
}