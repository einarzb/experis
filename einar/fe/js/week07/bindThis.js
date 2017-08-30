function Person(name){
  this.name = name;
}

Person.prototype.alertName = function(){
  alert(this.name)
}

Person.prototype.remindName = function(period) {
  //points to the function
  setTimeout(Person.prototype.alertName.bind(this), period);
  console.log(this);
}

var Myself = new Person("Einar");

Myself.alertName();
Myself.remindName(2000);


//fun fun function tutorial

/************************************************ without this *****************************************************/

function talk(sound){
  console.log(sound);
}

talk('woooooo');

/************************************************ this *****************************************************
this doesn't mean anything without a context!
this refers to global object (in the browser)
***********************************************************************************************************/

function talkThis(sound){
  console.log(this.sound);
}

talkThis(); //undefined

/************************************************ this & bind*****************************************************
bind is being explicit about THIS
/************************************************ this & bind****************************************************/

function bark(sound){
  console.log(this.sound);
}

let boromir = {
  sound: "dogs rules"
}

//copy of bark where we binded this to specific value
let barkBounding = bark.bind(boromir)

bark(); //undefined
barkBounding(); //dogs rules

/************************************************ this & REFERENCE*****************************************************
 A REFERENCE TO THE FUNCTION is being assigned as A PROPERTY OF the object that invokes it.
 the object becomes THIS
 FUNCTIONS ARE VALUES !! THEY LIVE ON THEIR ON AND THEIR RETURNS IS DEPENDS BY THE CONTEXT (THIS)
 FUNCTIONS CAN BE CALLED IN MULTIPLE CONTEXTS
/*********************************************************************************************************************/

let talk2 = function(){
  console.log(this.sound);
}

//takli is this
let takli = {
  speak: talk2, // ==> speak is a property of TAKLI object that points to the TALK function (value)
  sound: "fuck this shit"
}

let jerry = {
  sound: "im jerry"
}

let gollum = {
  jabber:takli.speak,
  sound:"my precious"
}

gollum.jabber(); //my precious and not fuckthisshit b/c functions r just VALUES WHAT THEY RETURN DEPENDS ON THE CONTEXT

jerry.speak = talk2.bind(jerry); //method is binding object to the function
jerry.speak(); //im jerry

takli.speak(); //fuck this shit
talk2(); // undefined
