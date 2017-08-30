Object.prototype.toString = function (){
  var str = '';
  for(var key in this){
    if(str !== ''){
    str += ', ';
    }
    str += key += ": " + this[key];
  }
  return '{ ' + str + ' }';
}

console.log({name:"ho", age:88}.toString());

function Person(name){
  this.name = "Mr. " + name;
}

Person.prototype.toString = function(){
  return '{ name: "' + this.name +'}'
}

var p = new Person("moshe");
console.log(p.toString());

p.toString = function(){
  return 'Only me: {name:"' +this.name + '}';
}

console.log(p.toString());

var q = new Person("michal");
console.log(q.toString());

//toCurrency is a method of Number Object
Number.prototype.toCurrency = function(){
  return this + "$";
}
console.log((5).toCurrency());

//wrap is a method of String Object
String.prototype.wrap = function(){
  return "(" + this + ")";
}
console.log("hello".wrap());
