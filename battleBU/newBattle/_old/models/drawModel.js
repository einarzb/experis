(function draw(){

         $("#hit").on("click", hitShip);

         function hitShip(){
           var hitCounter = $('#hitCounter').val();
           var selectedShip = $('#ships').val();
           var status = selectedShip + " was hitten " + hitCounter + " times";

           var displayStatus = document.getElementById("message");
           displayStatus.innerHTML = status;
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

 }
)(); //end draw function
// module.exports = {
//   draw:draw
// }
