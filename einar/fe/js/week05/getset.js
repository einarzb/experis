/*get
binds an object property to a function that will be called when that property is looked up.

*/

var o = {
  x:5,
  get twox () {
  return (2*this.x);
  }
}

Object.defineProperty(o, 'plus5', {
  get: function(){
    return (this.x + 5)},
    enumerable:true //makes this property shown in the obj properties
});

console.log(o); //{ x: 5, twox: [Getter], plus5: [Getter] }
console.log(o.plus5);
console.log(o.x);
console.log(o.twox); //its not a function it is a GETTER
console.log(typeof o.twox); //number (not a function)

////////////////////////////////////another example of get//////////////////////////////////////////////////

function funcA(){
  console.log("im A");
}

funcA();

Object.defineProperty(funcA, "stam", {
  get:function(){
    return "stam value";
  }
});

funcA.stam; //stam value
console.log(funcA.stam);

/************************************************************************************************/

//object has 2 properties (array and getter function)
var obj = {
  log: ['test'], //an array with 1 string

  get latest() {
    if (this.log.length == 0) return undefined; //if empty undefined
    return this.log[this.log.length - 1];
  }
}

console.log(obj.latest);
console.log(obj.log.length); //1
console.log(this.log[this.log.length - 1]);

 // Will return "test".
