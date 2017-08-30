/******** car simulator**************/
//initialize
var myBike = {x: 10, y: 20};
var myCar = {x: 10, y: 20};
var myPedestrian = {x: 10, y: 20};

var bicycleAverageSpeed = 5;
var carAverageSpeed = 20;
var pedestrianAverageSpeed = 2;

var move = function (speed, vehicle) {
  vehicle.x = vehicle.x + speed * randomStep();
  vehicle.y = vehicle.y + speed * randomStep();
}

// A helper function that randomly returns either -1 or 1
var randomStep = function () {
  if (Math.random() < 0.5) {
    return -1;
  } else {
    return 1;
  }
}

move(bicycleAverageSpeed, myBike);
move(carAverageSpeed, myCar);
move(pedestrianAverageSpeed, myPedestrian);
