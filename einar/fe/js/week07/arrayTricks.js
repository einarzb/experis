
var a = [];
var a = new Array();
var a = [3,5];
a["h"]=12;
a[-2] = 14;

console.log(a);//[3,5]
console.log(a.h); //12
console.log(a[-2]); //14

//Array.isArray checks that an object is an array
console.log(Array.isArray(a));

var obj ={};
obj.a = 7;
console.log(obj);

console.log(a);
console.log(a.length);

//clear an array 1st way
a.length=0;
console.log(a);

//clear an array 2d way
a =[];
console.log(a);
console.log(a.length);

function f(a) {
  a = [];
}

var arr = [3,4];

f(arr);
console.log(arr);
console.log(a);

//clear an array 3rd way
a.splice();
console.log(a);

//clear an array 4th way
for(var i = 0; i < a.length; ++i) {
  console.log(a);
  a.pop();
}
