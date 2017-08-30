//require node packages
var readlineSync = require('readline-sync');

//first check if string
function checkIsString () {
  var userInput = readlineSync.question('Please enter word > ');
  
  if(isNaN(userInput)) {
    checkPalindrom(userInput);
  } else {
        console.log("its not a string, try again");
        var userInput = readlineSync.question('Please enter word > ');
          if (isNaN(userInput)) {
            checkPalindrom(userInput);
          } else {
            console.log("its still not a string, try again");
          }
     }
  }

//then, if string check if palondrom
function checkPalindrom (userInput) {
  var palindrom = [];
  console.log("testing if " + userInput + " is a palindrom... ");

//turn string onto array so I can loop through it next loop and compare chars
  for (var i = 0; i < userInput.length; ++i) {
          palindrom[i] = userInput[i];
      }

//loop through the array (the string)
  for(var i=0; i < palindrom.length/2; ++i){
        if(palindrom[i] !== palindrom[palindrom.length - 1 - i]) {
          console.log("nope it's not a palindrom");
          return false;
        }
      }
      console.log("yes it is a palindrom! ");
      return true;
  }

checkIsString();
