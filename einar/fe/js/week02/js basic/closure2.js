
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
    console.log("im board " + board);
  }

  function gamePlay(){
    console.log("move me");
  }

//object is the only way to return 2 inner functions!!!
  var ret = {
    gameInit:gameInit,
    play:gamePlay
  }

  return ret;
}

var myGameObj = makeGame(); //returns an object that invokes father function
console.log(myGameObj);
myGameObj.gameInit(); //invoke the functions via object
myGameObj.play();
