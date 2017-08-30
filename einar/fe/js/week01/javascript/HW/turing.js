/**********************************************
task: write 2 functions encrypt and decrypt
and create 2 keys for encrypting and decrypting
bonus: shuffle the abc key with Math.random
this code is written by Einar Barzilay
*********************************************/

//require node packages
var readlineSync = require('readline-sync');

//initialize

function getAbc(){
  return 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  "A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V","X","Y","Z", "";
}
//main function to create key
function turingMachine(array) {
  var cba = [];
  var temp;
  var randomize;
        for (var i = 0; i < array.length; ++i) {
               //each char in the ABC array is reassigned with random number
                randomize = (Math.floor(Math.random() * abc.length)); //the length of the ABC array.
                temp = array[i]; //saves the ordered ABC
                array[i] = array[randomize]; // each char is getting scrumbbled
                array[randomize] = temp;
            }
          //assign the mixed array and return it
            cba = array;
            encrypt(array, cba);
            return array;
  }

// encrypt function - gets data from user and encrypt it by the key I've made up
function encrypt(array, cba){
  var encryptWord = " ";
  var userInput = readlineSync.question('Please enter word > ');

  //loop through users input
  for (var i = 0; i < userInput.length; ++i) {
    //nested loop through the ORDERED array
    for (var j=0; j < array.length; ++j){
      //if letter of the users input exists in the ordered ABC array
      if(userInput[i] == array[j]) {
        //then 'push' onto encryptWord the opposite letter thats inside the UNORDERD ARRAY
         encryptWord += cba[j];
      }
    } //nested loop
  } // for loop
  console.log("\n Encrypted word " + userInput + " is now >> " + encryptWord + "\n Under his eye!");
  decrypt(encryptWord, array, cba);
  return encryptWord;
}

//decrypt back
function decrypt(encryptWord, array, cba){
  var decryptWord = " ";
  //loop through the encryptWord
  for (var i = 0; i < encryptWord.length; ++i) {
    //nested loop through the ORDERED array
      for (var j=0; j < array.length; ++j){
        //if letter is inside the UNORDERED array
        if(encryptWord[i] == cba[j]) {
          //then 'push' onto decryptWord the letter thats inside the ORDERD ARRAY
          decryptWord += array[j];
          }
        } //nested loop
  }//end loop
  console.log("\n Decrypted word " + encryptWord + " was >> " + decryptWord + "\n May the lord open!");
  return decryptWord;
}

//invoke functions
var key = turingMachine(getAbc);
