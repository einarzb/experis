/*
this operates on it's object scope.
thats why in object1 it will output something else then object2
*/

var object1 = {
  name:"Orev",
  shwName: function(){
    console.log(this.name);
  }
}

object1.shwName(); //Orev

//

var object2 = {
  name:"Eagle",
  shwName: function(){
    console.log(this.name);
  }
}

object2.shwName(); //Eagle

//because there is
function useThis(){
  this.myProp = "this property";
}
//call-site
useThis();
myProp;
//=> would output "this property"

function a(){
b();
// console.log(X)
}

function b() {
this.x = "im x from b"
}

a(); //x from b

function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope

    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}

function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    console.log( "foo" );
}

baz();

//another example call-site, what is importent is where you
//call the this
function foo () {
  console.log(this.a);
}

var obj = {
  a:5,
  foo:foo
};

var obj2 = {
  a:80,
  foo:foo
}

obj.foo(); //5
obj2.foo(); //80

//another example
function foo() {
	console.log( this.a );
}

var obj3 = {
	a: 42,
	foo: foo
};

var obj4 = {
	a: 2,
	obj3: obj3
};

obj4.obj3.foo(); // 42
// would print 102 b/c obj3 is closest to foo then obj3

function too(){
  console.log(this.b);
}

var obj = {
  b: 525
};

too.apply(obj,[17]) //gets arguments in an array
too.call(obj) //i call function and determine which object I want to invoke
//same as obj.too(5);

//another example///

//function to do on the object
function showFullData(){
  console.log(this.name + ' is ' + this.breed + " type");
}

//object constractor
function makeDog (name,age,breed){
  var newDog = {};
  newDog.name = name;
  newDog.age = age;
  newDog.breed = breed;
  newDog.showFullData = showFullData;
  return newDog;
}

var dog1 = makeDog("takli",10,"pincher");
var dog2 = makeDog("elvis",2,"mix");
var dog3 = makeDog("martin",5,"sheperd");

dog1.showFullData();
dog2.showFullData();
dog3.showFullData();

//using bind - force showFullData to use THIS of dog1! 
var sfn = showFullData.bind(dog1);

sfn();
