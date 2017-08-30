/*
1. The toString() method returns a string representing the object.
2. every object has this
3. toString() returns "[object type]", where type is the object type.
*/

//3.
var o = {};
o.toString();


function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog('Takli', 'Lab', 'chocolate', 'female');
theDog.toString(); //deafult object object

//overriding toString
Dog.prototype.toString = function dogToString() {
  var ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
  console.log(ret);
  return ret;
}

console.log(theDog.toString()); // "Dog Takli is a female chocolate Lab"
