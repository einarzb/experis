var obj1 = {x:5, y:"yyy"};
//undefined
var obj2 = {x:5, y:"yyy"};
//undefined
obj1 === obj2
//false
obj1 == obj2
//false
var obj3 = obj2;
//undefined
obj2 == obj3;
//true
obj2 === obj3;
//true

var num1 = "15";//string
/*
Boxing -
when we check length of num1.length -
temporarly create object so we can do length - once we finish using it then it's gone
*/

var num2 = 15; //int

num1 == num2; //true because are primitive and not reference type like object

var other = {
  b: "bla"
}

var other1 = {
  b: "bla"
}

//
var other1 = other;


//shallow
//deep - you dont check if 2 ref equals you go recursively to the vars and check their value
obj1 = {x:5, y:other}
obj2 = {x:5, y:other1}
