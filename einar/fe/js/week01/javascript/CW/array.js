/*********************************************
go through loop and find out if is sorting down or up or not (switch
4 option the myArr contains not int and string too
/*********************************************/

//initialize

var myArr = [34,5,4,3,2,1,0];
var up = 0;
var down = 0;
var equal =0;

//check array's values
for(var i = 0; i < myArr.length-1; ++i) {

  //status
  console.log("value:", myArr[i], "-- downCounter:",down, " -- upCounter:", up, " -- equal:", equal);

  //first check that all values are numeric
  if(isNaN(myArr[i]) || (isNaN(myArr[i+1]))){
      console.log("Please fill in numeric data");
      break;
  }
  //check that array is descending - if true - inc descending counter
  if(myArr[i] > myArr[i+1]) {
    down++;
  //nested if
  //compare descending counter to array.length-1 values
    if(down == myArr.length-1) {
      console.log("myArr is descending");
    }
  } else if (myArr[i] < myArr[i+1]) {
     up++;
     if(up == myArr.length-1) {
       console.log("myArr is ascending");
     }
  } else {
    equal++;
    // up++;
    // down++;
    }
    //checks if descending counter and ascending counter > 0 - it means that my array is unordered
    if(down!=0 && up!=0 ) {
      console.log("myArr is unordered");
      break;
    }
 } //end of for loop

 if(equal == myArr.length-1){
   console.log("myArr is equaled value");
 }
