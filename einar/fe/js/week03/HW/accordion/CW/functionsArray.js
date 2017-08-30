var grades = [90,100,98,68,110];

function setTheThird(arr, newValue) {
   arr[2] = newValue;
   return arr;
}


setTheThird(grades, 45);

grades;

function f1(a,b,c) {
  var loc=19;
  console.log("a",a, "b", b, "c", c);
  console.log(loc, "local");
}

console.log("f1(3,4,5)");
f1(3,4,5)
console.log("f1(3,4)");
f1(3,4)
console.log("f1(3,4,5,6)");
f1(3,4,5,6)

var t = 8;
f1(t,4,5)

//functions get value of a variable
//not the access to the var that holds the value
//so functions can only change array or object
//but not strings value!


var x=1;
var y=1;

function f2(param){
  var x;
  x=5;
  y=6;
}

f2(99);

console.log(x);//1 -- its not 5 because global var trumps (inside the function) the local var
console.log(y);//6 -- y gets its **local** value because there is no local var that hides the global one
