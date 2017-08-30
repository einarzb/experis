var title = "circle maker";
var pi = 3.14159;

var calcCircleArea = function(radius){
  return pi * radius * radius;
};

//exports var and function as modules
module.exports.pi = pi;
module.exports.calcCircleArea = calcCircleArea;
