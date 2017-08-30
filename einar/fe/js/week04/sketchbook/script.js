/*
TODO
force ctrl key
choose items and move them together
make clear canvas function  and call it inside load function
seteventlistener function
*/


window.onload = function () {
  console.log("load me");
  // registerEvents();
  // loadCanvas();
  // clearCanvas();
  setEventListeners();
  sketchup();
};

// ***************************** ALL-BUTTONS EVENT LISTENING **********************************

function setEventListeners () {
    var rectBtn = document.getElementById("rectMakerBtn");
    rectBtn.addEventListener("click", createRect);

    var ovalBtn = document.getElementById("ovalMakerBtn");
    ovalBtn.addEventListener("click", createOval);

    var colorChangeBtn = document.getElementById("colorBtn");
    colorChangeBtn.addEventListener("click", colorChange);

    var saveDrawBtn = document.getElementById("saveDrawBtn");
    saveDrawBtn.addEventListener("click", saveDraw);

    var deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.addEventListener("click", removeShape);

    //delete VIA keyboard
    window.onkeypress = function(event) {
         if (event.keyCode == 127) {
            removeShape();
         }
      }

    this.addEventListener("mouseup", function(){
      this.onmousemove = null;
    });
}

function sketchup(){

    var canvas = document.getElementById("canvas");
    var selected = document.getElementsByClassName("selected");
    var colored = document.getElementsByClassName('selected');

    //save n load
    var saveModal = document.getElementById("saveModal");
    var loadModal = document.getElementById('loadModal');

    var saveBtn = document.getElementById("saveBtn");
    var closeSave = document.getElementById("xcloseSave");
    var loadBtn = document.getElementById("loadBtn");
    var closeLoad = document.getElementById("xcloseLoad");

    //colors
    var pallete = document.getElementById('pallete');
    pallete.classList.toggle("reveal");

    var blackBtn = document.getElementById("black");
    var redBtn = document.getElementById("red");
    var greenBtn = document.getElementById("green");
    var purpleBtn = document.getElementById("purple");
    var whiteBtn = document.getElementById("white");


///////////////////////// saving drawing ///////////////////////

  saveBtn.onclick = function() {
      saveModal.style.display = "block";
  }

  closeSave.onclick = function() {
      saveModal.style.display = "none";
  }

  // click anywhere outside of the popup, close it
  window.onclick = function(event) {
      if (event.target == saveModal) {
          saveModal.style.display = "none";
      }
  }

  var drawingNames = JSON.parse(localStorage.getItem("drawingNames"));
  if(drawingNames == null)
  	drawingNames = [];

  function saveDraw(){
    var userInput = document.getElementById("drawName").value;
    localStorage.setItem(userInput, canvas.innerHTML);
    drawingNames.push(userInput);
    localStorage.setItem("drawingNames",JSON.stringify(drawingNames));
    saveModal.getElementsByClassName("modal-body")[0].children[0].innerHTML = "Saved "+name;

    //presents comfirmation that element was saved
    setTimeout(function() {
    if(saveModal.style.display == "block")
    saveModal.style.display = "none";
    },3000);
    console.log(userInput);
  }

//////////////////loading /////////////////////////////////

    loadBtn.onclick = function() {
        loadModal.style.display = "block";
    }

    closeLoad.onclick = function() {
        loadModal.style.display = "none";
    }

    function loadDraw(){
      console.log("load function not working yet");
    }

    // click anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == loadModal) {
            loadModal.style.display = "none";
        }
    }


/////main event listener for selected item
  canvas.addEventListener("click", select)

  this.addEventListener("mouseup", function () {
      this.onmousemove = null;
  });

}

//********************************** end main ONLOAD function **********************************
function createRect(){
    var shape = createRandomShape();
    shape.classList.add("rectShape");
    document.getElementById('canvas').appendChild(shape);
  };

function createOval(){
   var shape = createRandomShape();
   shape.classList.add("ovalShape");
   document.getElementById('canvas').appendChild(shape);
}

//random color size and position
function randomSize() {
  return (Math.round(Math.random()*100) + 50) + "px";
}

function randomColor() {
    return '#'+ Math.round(0xffffff * Math.random()).toString(16);
}

function randomLocationWidth(){
  return ((Math.random() * (window.innerWidth)/2 + "px"));
}

function randomLocationTop(){
  return ((Math.random() * (window.innerHeight)/2 + "px"));
}

//make this function return an object
function createRandomShape () {
  var shape = document.createElement("div");
  shape.style.width = randomSize();
  shape.style.height = randomSize();
  shape.style.backgroundColor = randomColor();
  shape.style.left = randomLocationWidth();
  shape.style.top = randomLocationTop();
   return shape;
}

// *************************function SELECT / DESELECT item ***********************************

function select(e) {
  var choosen = e.target;
  var corners = choosen.children;

  //Find out if shapes classes is a descendant of a choosen element:
  if(choosen.classList.contains("ovalShape") || choosen.classList.contains("rectShape")) {

    //if item was already selected
      if(choosen.classList.contains("selected")){
          choosen.style.zIndex = "initial";
          choosen.classList.remove("selected");
          choosen.classList.remove("draggable");
          choosen.style.cursor = "auto";
          removeHandlers(choosen);
      }else{
    //if item was not selected before
          choosen.style.zIndex = "1";
          choosen.classList.add("selected");
          choosen.classList.add("draggable");
          choosen.style.cursor = "se-resize";
          showHandlers(choosen);
      }
   }

   var draggable = document.getElementsByClassName("draggable");
   var dragCount = draggable.length;

//the thing that initiates the dragging func - CHANGE IT
   if (dragCount > 0) {
       for (var i = 0; i < dragCount; ++i) {
           draggable[i].addEventListener("mousedown", initDrag);
       }
   }
}


// ****************************** DELETE SHAPES ***********************************************
      function removeShape(){
        var child = canvas.children;

        for (var i = 0; i < child.length; i++) {
          if ((child[i].classList.contains("selected"))) {
          canvas.removeChild(child[i]);
          i--;
        }
      }
    }

//*****************************   DRAG AROUND ***************************************************

function initDrag(e) {
    //initial
    var draggedItem = this;
    //calc position (mouse - object)
    var moveX = e.clientX - draggedItem.offsetLeft;
    var moveY = e.clientY - draggedItem.offsetTop;

    draggedItem.addEventListener('mouseup', stopDrag);
    draggedItem.addEventListener('mousemove', dragging);

    function dragging(e) {
        var left = parseInt(e.clientX - moveX);
        var top = parseInt(e.clientY - moveY);
        //ot
        if (top < 0) {
            top = 0;
        }
        if (left < 0) {
            left = 0;
        }
        if (top > window.innerHeight - 1) {
            top = window.innerHeight - 1;
        }
        if (left > window.innerWidth - 1) {
            left = window.innerWidth - 1;
        }

        draggedItem.style.left = left + 'px';
        draggedItem.style.top = top + 'px';
    }

    function stopDrag() {
        draggedItem.removeEventListener('mousemove', dragging);
        draggedItem.removeEventListener('mouseup', stopDrag);
    }
}


  // *************************CREATE SHAPE HANDLERS PART ***********************************************

  function removeHandlers() {
  }

  function showHandlers(choosen) {
    var handlers = [];
    for (var i = 0; i < 5; i++) {
         //create 4 handlers
          handlers = document.createElement("div");
          //style them each i(1-4) is different corner
          handlers.classList.add("handlers" + i);
          //invoke resizing
          handlers.addEventListener('mousedown', resizeShape);
          //append them to shape
          choosen.appendChild(handlers);
        }
        return choosen;
  }

  // *********************************RESIZE ******* ***********************************************

  function resizeShape(event){
  //  var resizedItem = this;\
    var shape = this.parentElement;
    var oldX = event.clientX;
    var oldY = event.clientY;

    //stop item to move when resizing
    this.parentNode.removeEventListener('mousedown', initDrag);
    //initialize resize function
    this.addEventListener('mousemove',resizeOn);


/*left top corner*/
    function resizeOn(e) {
      if (this.classList.contains("handlers1")) {
      var newX = e.clientX - oldX;
      var newY = e.clientY - oldY;
      shape.style.width = shape.offsetWidth - newX + "px";
      shape.style.height = shape.offsetHeight - newY + "px";
      shape.style.top = shape.offsetTop + newY + "px";
      shape.style.left = shape.offsetLeft + newX + "px";
    }

    /*right top corner*/
      if (this.classList.contains("handlers2")) {
      var newX = e.clientX - oldX;
      var newY = e.clientY - oldY;
      shape.style.width = shape.offsetWidth + newX + "px";
      shape.style.height = shape.offsetHeight - newY + "px";
      shape.style.top = shape.offsetTop + newY + "px";
    }

    /*left bottom corner*/
      if (this.classList.contains("handlers3")) {
        var newX = e.clientX - oldX;
        var newY = e.clientY - oldY;
        shape.style.width = shape.offsetWidth - newX + "px";
        shape.style.height = shape.offsetHeight + newY + "px";
        shape.style.left = shape.offsetLeft + newX + "px";
            }

    /*right bottom corner*/
       if (this.classList.contains("handlers4")) {
        var newX = e.clientX - oldX;
        var newY = e.clientY - oldY;
        shape.style.width = shape.offsetWidth + newX + "px";
        shape.style.height = shape.offsetHeight + newY + "px";
      }

        oldX = e.clientX;
        oldY = e.clientY;

    }

}// end resize shape

  // *************************SAVE TO LOCALHOST ***********************************************


function saveDraw(){
    var userInput = document.getElementById("drawName").value;
    // var savedDraw = document.getElementById("canvas");
    // localStorage["myDraw"] = JSON.stringify(savedDraw.innerHTML);
    console.log(userInput);
  }




// *************************COLOR CHANGES PART ***********************************************

//reveals color pallete - change to toggle method
function colorChange(){


var pinkBtn = document.getElementById("pink");
pinkBtn.addEventListener("click", makePink);

function makePink(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "pink";
  }
}

var blackBtn = document.getElementById("black");
blackBtn.addEventListener("click", makeBlack);

function makeBlack(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "black";
  }
}

var redBtn = document.getElementById("red");
redBtn.addEventListener("click", makeRed);

function makeRed(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "red";
  }
}

var greenBtn = document.getElementById("green");
greenBtn.addEventListener("click", makeGreen);

function makeGreen(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "green";
  }
}

var purpleBtn = document.getElementById("purple");
purpleBtn.addEventListener("click", makePurple);

function makePurple(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "purple";
  }
}

var whiteBtn = document.getElementById("white");
whiteBtn.addEventListener("click", makeWhite);

function makeWhite(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "white";
  }
}
}
