/* You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests */

/*   P:  a string that either does or does not match a list of 7 words (don't have to worry about partial input)
     R:  boolean of whether it matches one of the words
     E:  validateHello('ahoj'), true
        validateHello('meh'), false
    P:  create object to check for validation
        convert string to lowercase and check if if includes one of the object keys
 */

        const hellos = {
            hello: 'english',
            ciao: 'italian',
            salut: 'french',
            hallo: 'german',
            hola: 'spanish',
            ahoj: 'czech republic',
            czesc: 'polish',
            }
            
        function validateHello (greetings) {
              for (key in hellos) {
               if (greetings.toLowerCase().includes(key)) {
                 return true
               }
              }
              return false
            }