function Animal(name) {
  this.name = name || 'noname';
}

Animal.prototype.props =  function() { return ' #'; };

Animal.prototype.say = function() {
  console.log("Animal name: " + this.name + this.props());
};

function Dog(name) {
	this.teeth = 'sharp';
	Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype); // OK

Dog.prototype.props = function() {
	var str = Animal.prototype.props.call(this);
	return str+' teeth: '+this.teeth;
}
Dog.prototype.constructor = Dog; // repair the inherited constructor

var dog = new Dog('Kobi');
dog.say();

console.log('dog instanceof Dog: ' + (dog instanceof Dog));
console.log('dog instanceof Animal: ' + (dog instanceof Animal));

console.log('CTOR is Dog: ' + (dog.constructor === Dog));
console.log('CTOR is Animal: ' + (dog.constructor === Animal));

console.log('CTOR is Dog: ' + (Dog.prototype.constructor === Dog));
console.log('CTOR is Animal: ' + (Dog.prototype.constructor === Animal));

// var animal = {
//   name: 'noname',
//   props: function() { return ''; },
//   say: function() {
//     console.log("Animal name: " + this.name + this.props());
//   }
// };
//Dog.prototype = Object.create(animal);

// var rabbit = {
//   ears: 'long',
//   name: 'bugs',
//   props: function() { return ' ears: '+this.ears; },
//   __proto__: animal
// };

// rabbit.say();
// animal.say();
