//initialize

var suzukiBike = {
  x:10,
  y:20
};

var alpha = {
  x:10,
  y:20
}

var human = {
  x:10,
  y:20
}

var bikeSpeed = 25;
var carSpeed = 10;
var humanSpeed = 2;

function move (speed, vehicle){
  vehicle.x = vehicle.x + speed * randomStep();
  vehicle.y = vehicle.y + speed * randomStep();
};

function randomStep(){
  if (Math.random()<0.5) {
    return -1;
  } else {
    return 1;
  }
};

move(bikeSpeed,suzukiBike);
move(carSpeed,alpha);
