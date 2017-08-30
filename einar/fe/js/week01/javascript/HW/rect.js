//require node packages
var readlineSync = require('readline-sync');

// get user data
var width = readlineSync.questionInt('Please enter width > ');
var length = readlineSync.questionInt('Please enter length > ');

//check if width's smaller than length
if(width < length) {
   //switch inputs by reassignment
   var temp = width;
   width = length;
   length = temp;
}
//calculate area and perimeter
const area = length * width;
const perimeter = (2 * length + 2 * width);

console.log("The rectangle width is " + width + " and length is " + length + "\n and it's total area is " + area + " and it\'s periemeter is " + perimeter);
