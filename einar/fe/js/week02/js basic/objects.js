//creatomg object
var object = {};

//regular property
object.name = "einar";
//console.log(object.name);

//function
object.sayHello = function(){
  console.log("yo yo hello");
}

//object
object.child = {name:"ducktk"};
//object.sayHello();

//array
object.contacts = ["Assaf", "Einar", "Andrey"];

function showName(person){
  console.log(person.name);
  console.log(person.contacts)
}

//ARRAY OBJECT
//Object["PropertyName"] = value;

//you can create a new property and assign it a value in this syntax
object["age"]= 25;

object[5] = "hello im new property"
//showName(object);
//you can call property of an object as in string
//syntax - objectName["PropertyName"]
console.log(object["name"]);
console.log(object["age"]);
console.log(object["contacts"][1]);

//one way to declare object
var person = {name:"einar", lname:"barzilay", age: 32}

//creat object VIA function
function personMaker(name,lname,age){
  var newPerson = {};
  newPerson.name = name;
  newPerson.lname = lname;
  newPerson.age = age;
    return newPerson;
}

//loop iteration through object properties
// a is placeholder for property name
for(var property in newPerson) {
  console.log("im property! " + property)
  console.log("value: " + newPerson[property]);
//im property! name value: hagai
}

//Object.keys("object name") => gives you an array of properties
var keys = Object.keys(object)
var newPerson = personMaker("hagai","gal", 36);

console.log(person, "im made with an object declaration");
console.log(newPerson, "im made via function");

console.log(object);
console.log("keys are: " + keys);


//weird key names
var weird = {
  x:5,
  "y" : 6,
  "-3" : 7
}

weird["+"] = 8;
weird["-"] = 9;
weird[8] = 15;

console.log(weird);

///
