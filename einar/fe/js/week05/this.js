/*
default binding:
this points to global object
*/

x=5; //global
function a(){
  console.log("a:x " + this.x);
}

a(); //call-site => a:x 5

/*******************************************************************/

x=5;

function a(){
  var x=9; //function ignores this x!
  console.log("a:x " + this.x); //this.x != x ==> 5 != 9
}

a(); // call-site => a:x 5

/****************************hoisting********************************/

function a(){
  var x=9;
  console.log("a:x " + this.x);
}

a(); //5 because of hoisting
x = 5;

/*************************** implicit binding ****************************************/
//the object is used in the call so its the target of this

function a(){
  console.log("a:this" + this.x);
}

var o = {
  x:"x from o",
  fa:a
}

o.fa(); // a:thisx


var o = {
  x:6,
//Parameter passing is just an implicit assignment,
//and since we're passing a function, it's an implicit reference assignment
  f:function(n){
    return(this.x * n);
  }
}

o.f(1) // 6
o.f(2)//12

var f4 = o.f;
f4(1); //NaN





//this doesnt refer to the function's object or the object
function funcB(){
  console.log(this.prop2);
}

funcB.prop2 = "im prop2";

funcB;

funcB();//undefined

prop2 = "the real prop2";

// this doesnt refer to the functions' scope (inner func)
// this refers to the call-site

function funcC(){
  function funcC(a){
    var b = 2;
    var c = 3;
    console.log(this.a);
    console.log(this.b);
  }
}

funcC(8);


///
var o = {
  x:"x from o"
}

function myBind(func,obj){

  var newFunc = function(){
    func.apply(obj,arguments)
  }
  return newFunc;
}

a(2,3);

var bindedA = myBind(a, o) //a=func o=obj
bindedA(4,5);

//
function a (u,v){
  console.log("a: this " + this.x); //this undefined
  console.log(u +v); //5
}

a(2,3)
