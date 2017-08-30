
function Expression(value){
  this.value = value;
}

Expression.prototype.evaluate = function () {
  return this.value;
}

///////

function Value(value){
  Expression.call(this,value);
}

Value.prototype = Object.create(Expression.prototype);

////////

function Add(exp1, exp2){
  var a = exp1.evaluate();
  var b = exp2.evaluate();
  var value = a + b;
  Expression.call(this,value);
};

Add.prototype = Object.create(Expression.prototype);

//////////

function Substract(exp1, exp2){
  var a = exp1.evaluate();
  var b = exp2.evaluate();
  var value = a - b;
  Expression.call(this,value);
};

Substract.prototype = Object.create(Expression.prototype);

///////////////////

function Multiply(exp1, exp2){
  var a = exp1.evaluate();
  var b = exp2.evaluate();
  var value = a * b;
  Expression.call(this,value);
};

Multiply.prototype = Object.create(Expression.prototype);

////////////////////////////

function Divide(exp1, exp2){
  var a = exp1.evaluate();
  var b = exp2.evaluate();
  var value = a / b;
  Expression.call(this,value);
};

Divide.prototype = Object.create(Expression.prototype);

/******************************tests*****************************************************/

var Val8 = new Value(8);
var Val5 = new Value(5);
var Val2 = new Value(2);

var add1 = new Add(Val2, Val8);
var addAll = new Add(Val5, add1);
var divideMe = new Divide(Val8,Val2);
var multiplyMe = new Multiply(Val8,Val2);

console.log("multiply result is: " + multiplyMe.evaluate());//16
console.log("divide result is: " + divideMe.evaluate()); //4
console.log("sum of num: " + addAll.evaluate()); //15
