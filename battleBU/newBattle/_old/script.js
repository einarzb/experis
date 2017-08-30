$(document).ready(function() {

 // function draw(){

          $("#hit").on("click", hitShip);

          function hitShip(){
            var hitCounter = $('#hitCounter').val();
            var selectedShip = $('#ships').val();
            var status = selectedShip + " was hitten " + hitCounter + " times";

            var displayStatus = document.getElementById("message");
            displayStatus.innerHTML = status;
          }

          $("#draw").on("click", drawBoard);
          function drawBoard(){
                  var newBoard = new Board;
                  console.log(newBoard);
          }

//main class
class Drawable{
          constructor(name, objectToDraw, target){
            this.name = name;
            this.objectToDraw = objectToDraw;
            this.target = target;
            Object.defineProperty(this, 'isHighlighted', {
              get:function(){
                return this.draw;
              }
            })
          }
          draw(){
            return true;
          }
}

class Board extends Drawable{
          constructor(objectToDraw = "board", target, size=7){
            super(objectToDraw,target);
            this.size = size;
          }
}

class MessageBoard extends Drawable{
          constructor(message){
            this.message = message;
          }
}

class BattleShip extends Drawable{
          constructor(name, target, size=7, hitsCounter){
            super(name,"SimpleBattleShip",target);
            this.size=size;
            this.hitsCounter = hitsCounter;
            }
            getDamage(){
              return this.hitsCounter;
            }
            tryHit(x,y){
                    if(this.hitsCounter > 0)
                    --this.hitsCounter;
            }
          }

class SimpleBattelShip extends BattleShip {
          constructor(r = 1, x, y) {
              super(x, y);
              this.radius = r;
          }
          isContainingOrigin() {
              return this.distance() < this.radius;
          }
}

class GoldenBattelShip extends BattleShip {
        constructor(r = 1, x, y) {
                super(x, y);
                this.radius = r;
        }
        isContainingOrigin() {
                return this.distance() < this.radius;
        }
}

// } //end draw function

// draw();

//create BattleShips
var mongo  = new BattleShip("mongoShip","Jordan", size=8, 2);
var dakar = new BattleShip("dakar", "Aqaba", size=4, 1);
var tapuz = new BattleShip("tapuz", "Egypt", size=5, 4);
var golda = new GoldenBattelShip(r=2, "golda", 4)
console.log(golda);
var mongoShip = document.getElementById("mongoShip");
mongoShip.text = mongo.name;
mongoShip.value  = mongo.name;

var dakarShip = document.getElementById("dakarShip");
dakarShip.text = dakar.name;
dakarShip.value = dakar.name;

var tapuzShip = document.getElementById("tapuzShip");
tapuzShip.text = tapuz.name;
tapuzShip.value = tapuz.name;

//hit
// var hit = mongo.hitsCounter(2);
// console.log(hit);
this.Board = new Board();

  // module.exports = {
  //   draw:draw
  // }
//end document ready
});








     //hit button was pressed
    // $("body").on('click', "#hit", function () {
    //   //options between ships
    //   $("#ships").change(function(){
    //   console.log($(this).val() + ' was hit! oh no ');
    //   });
    //   console.log('hit was hitting ');
    // });
