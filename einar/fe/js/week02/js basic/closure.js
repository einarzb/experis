/**********************RULES*********************
inner functions have access to the variables of parent function
inner function only available within the body of the parent function --> closure
Nested functions have access to variables declared in their outer scope.
***************************************************/

function init() {
  var name = 'Mozilla'; // name is a local variable created by init

  function displayName() {
    console.log(name); // use variable declared in the parent function
  }

  displayName();
}
init();


// the inner function is returned from the PARENT function before being executed.
/*
A closure is the combination of a function and the lexical environment within which that function was declared.
This environment consists of any local variables that were in-scope at the time that the closure was created
*/
function makeAdder(toAdd) {
  //makeAdder is a function that returns a function named newAdder
  var newAdder =  function (num) { //num is 3
    return (num + toAdd) //to add is 5/7
  }

  return newAdder;
}


var adder5 = makeAdder(5);
var adder7 = makeAdder(7);

// user can call this function but can't touch/change the 5/7 values
console.log(adder5(3)); //8
console.log(adder7(3)); //10

//you call makeAdder > the data returns to adder5 >> in console.log I call inner function again


//another

//this is being determined by call-site
var obj = {
  x:5,
  f: function(){
    console.log(this.x);
  }
}

obj.f();

//we lost our this. so undefined
var f2 = obj.f;

f2();

f2.call(obj); //bind this to function
f2.apply(obj,[]); //the array stands for the arguments part

//binding is saving the this
var f3 = f2.bind(obj);
f3();

//gets a func as parameter and call it
function myCaller(aFunc){
  aFunc();
}

myCaller(obj.f);


function sayHello(name) {
  var text = 'Hello ' + name;
  var say = function() { console.log(text); }
  say();
}
sayHello('Joe');

//a closure is a stack frame which is allocated when a function starts its execution,
//and not freed after the function returns (as if a 'stack frame' were allocated on the heap rather than the stack!).


function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var item = 'item' + i;
        result.push( function() {console.log(item + ' ' + list[i])} );
    }
    return result;
}

function testList() {
    var fnlist = buildList([1,2,3]);
    // Using j only to help prevent confusion -- could use i.
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

 testList() //logs "item2 undefined" 3 times


//each call creates a separate closure for the local variables
//A closure in JavaScript is like keeping a copy of all the local variables, just as they were when a function exited.
/*
A new set of local variables is kept every time a function with a closure is called
(given that the function contains a function declaration inside it, and a reference to that inside function
 is either returned or an external reference is kept for it in some way).
*/

function makeGame (){
  var board = [];

  function gameInit(){
    for(var i =0; i < 9; ++i){
      board[i] = 0;
    }
  }
  return gameInit;
}

var myGame = makeGame();

myGame();
