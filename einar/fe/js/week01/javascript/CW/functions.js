//anonimous function
//its really is an expression

var f = function(a) {
  console.log("im anonimous function that gets paremeter " + a);
  return "the end!"
}

//f is a var that holds a reference to function
f(5);
f("abc");


function callerX(callme) {
  callme('x');
}

var niceFunc = function(){
  console.log("im nice function");
}

var uglyFunc = function(who){
  console.log(who + " im ugly");
}

callerX(niceFunc);
callerX(uglyFunc);



//function gets strings and checks if its palindrom
