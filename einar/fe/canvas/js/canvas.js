window.onload = function(){
  var canvas = new DrawOnCanvas(); //new instance of class draw
  canvas.draw(); //invoke function
  //  canvas.rotateRect(200,100,225,110,20);
  // canvas.drawImg();
  //canvas.writeText();
  // canvas.createHoverRect(200,150,200,150);


}//end onload

class DrawOnCanvas{
    constructor() {
          //get html canvas
          this.canvas = document.getElementById('draw-board');
          if(!this.canvas.getContext) throw Error('no canvas');

          this.ctx = this.canvas.getContext('2d'); //default
          this.width = this.canvas.width = this.canvas.clientWidth;
          this.height = this.canvas.height = this.canvas.clientHeight;


     }//end constructor

/******************************** FUNCTIONS TO EXECUTE *********************************/
createHoverRect(x,y,width,height) {
            //initialize
           this.ctx.fillStyle = 'red';
           this.ctx.fillRect(x, y, width, height);
           var self = this;
           //add event listener
           this.canvas.addEventListener('mousemove', (e) => {
               if (e.clientX > x && e.clientX < x+width && e.clientY < y+height && e.clientY > y) {

                   this.ctx.fillStyle = 'green';
                   this.ctx.fillRect(x, y, width, height);
               }
               else {
                   this.ctx.fillStyle = 'red';
                   this.ctx.fillRect(x, y, width, height);
               }
               console.log(e.clientX, e.clientY);
           })

           //initialize again
           this.ctx.fillStyle = 'red';
           this.ctx.fillRect(x, y, width, height);
}

writeText(){
    this.clearCanvas();
    this.ctx.fillStyle = '#F00'
    this.ctx.font = ('48px sans-serif');
    this.ctx.fillText("Einar yo", 120,120);
}

drawImg(){
  this.clearCanvas();
  var img = new Image();
  img.src = 'https://fb-s-c-a.akamaihd.net/h-ak-fbx/v/t1.0-9/15622467_10154907946797112_16810529566442403_n.jpg?oh=61ddbd7787056fd7343994faefdb1670&oe=5A357B9F&__gda__=1509077586_508c0a9f7281e302322fdaa4ed8d4d02';
  img.onload = () => {
     this.ctx.drawImage(img,400,50,100,500,250,120,399,240); //img,sx,sy,swidth, sheight,sx,sy,x,y
     this.ctx.drawImage(img,0,0,800,200,450,500,899,240); //img,sx,sy,swidth, sheight,sx,sy,x,y
  }
}

rotateRect(x,y,width,height, radius) {
  this.clearCanvas();
  if(width < 2 * radius)
     r = width / 2;
  if(height < 2 * radius)
     r = height /2;

    this.ctx.beginPath();
        //when you use save and restore it puts all in between in a stack
         this.ctx.save();

        this.ctx.strokeStyle = "red";
        this.ctx.lineWidth = 10;

        this.ctx.translate(200,200);
        this.ctx.rotate( (Math.PI / 180) * 30); //rotate 30  degrees.

        this.ctx.translate(200,20);
        this.ctx.rotate( (Math.PI / 180) * 50);
        this.ctx.scale(2,2);
         this.ctx.restore();

       //starting point
       this.ctx.moveTo(x+radius,y); //200 100
       this.ctx.arcTo(x+width,y,x+width,y+height,radius); // Create a horizontal line
       this.ctx.arcTo(x+width,y+height,x,y+height,radius);// Create a vertical line
       this.ctx.arcTo(x,y+height,x,y,radius);// Create a vertical line
       this.ctx.arcTo(x,y,x+width,y,radius);// Create a horizontal line


    this.ctx.stroke();
  }

  drawRoundedRect(x,y,width,height, radius) {
  this.clearCanvas();
  if(width < 2 * radius)
     r = width / 2;
  if(height < 2 * radius)
     r = height /2;

    this.ctx.beginPath();
       //starting point
       this.ctx.moveTo(x+radius,y); //200 100
       this.ctx.arcTo(x+width,y,x+width,y+height,radius); // Create a horizontal line
       this.ctx.arcTo(x+width,y+height,x,y+height,radius);// Create a vertical line
       this.ctx.arcTo(x,y+height,x,y,radius);// Create a vertical line
       this.ctx.arcTo(x,y,x+width,y,radius);// Create a vertical line

           //make arc

    this.ctx.stroke();


  }


/**************************   DRAW  ******************************************/
draw(){
        this.clearCanvas();
        //drawing cubes
        this.ctx.fillStyle = 'rgba(0,0,0, 0.5)';
        this.ctx.fillRect(10,10,100,100); // x,y,width, height
        //drawing cubes
        this.ctx.fillStyle = 'rgb(255,0,120)';
        this.ctx.fillRect(40,20,150,50); // x,y,width, height
        this.ctx.fillRect(40,80,150,50); // x,y,width, height

      //stroke
        this.ctx.strokeStyle = "#000";
        this.ctx.lineWidth = 10;
        this.ctx.strokeRect(100,110,150,50);

       //start drawing
       this.ctx.beginPath();
       //moves pen to starting point
       this.ctx.lineCap = "round"; //round corners of path
       this.ctx.moveTo(30,50); //x,y
       //course of drawing
       this.ctx.lineTo(630,70);
       this.ctx.lineTo(630,570);
       this.ctx.lineTo(430,250);
       //go back to start point - not so pretty
       this.ctx.lineTo(80,50);
       // or complete endings
       //this.ctx.closePath();

       //invokes all drawing path
       this.ctx.stroke();
       //fills line with color
       this.ctx.fill();

      /**** create arcs ****/
      /* yellow round*/
       this.ctx.beginPath();
       this.ctx.fillStyle = "#ff0"; //bg color
       this.ctx.strokeStyle = "#ff0"; //stroke color
       this.ctx.lineWidth = 5;
       this.ctx.arc(325,375,300,0,Math.PI*2, false); //x,y,radius, math.PI*2 perfect round, math.PI half,
       this.ctx.fill();
       this.ctx.stroke();

       /*smiley*/
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#000"; //stroke color
        this.ctx.lineWidth = 6;
        this.ctx.arc(315,400,230,0,Math.PI, false);
        this.ctx.stroke();
        /*left eye*/
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#000"; //stroke color
        this.ctx.lineWidth = 10;
        this.ctx.arc(250,250,50,0,Math.PI, true); //true makes it upside down
        this.ctx.stroke();
       /*right eye*/
        this.ctx.beginPath();
        this.ctx.lineTo(420,250);
        this.ctx.strokeStyle = "#000"; //stroke color
        this.ctx.lineWidth = 10;
        this.ctx.arc(410,250,50,0,Math.PI, true);
        this.ctx.stroke();
        /*nose*/
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#000"; //stroke color
        this.ctx.lineWidth = 10;
        this.ctx.arc(310,390,50,0,Math.PI, true);
        this.ctx.stroke();
  }

  /************************** CLEAR CANVAS **************************************/

      clearCanvas(){
          this.ctx.clearRect(0,0,this.width ,this.height); // x,y,width, height
      }

}//end class DrawOnCanvas


/*every shape need to be under this skeleton:
       this.ctx.beginPath();
      //defination
       this.ctx.stroke();
*/
