window.onload = function () {
//
   var recButton = document.getElementById("rectangle-button");
   recButton.addEventListener("click", RandomShape);
//
   var ovalButton = document.getElementById("oval-button");
   ovalButton.addEventListener("click", RandomShape);
//
   var colorButton = document.getElementById("color-button");
   colorButton.addEventListener("click", openTable);
//-no
   var colorTable = document.getElementsByTagName("td");
   for (var i = 0; i < colorTable.length; ++i) {
       colorTable[i].addEventListener("click", changeShapeColor);
   }
//
   var deleteButton = document.getElementById("delete-button");
   deleteButton.addEventListener("click", deleteSelected);
//
   var saveButton = document.getElementById("save-button");
   saveButton.addEventListener("click", saveCanvas);
//
var LoadbButton = document.getElementById("load-button");
   LoadbButton.addEventListener("click", loadCanvas);
//
   var xSaveWindow = document.getElementById("x-button-save");
   xSaveWindow.addEventListener("click", closeSaveWindow);
//
   var xLoadWindow = document.getElementById("x-button-load");
   xLoadWindow.addEventListener("click", closeLoadWindow);
//
   function randomColor1() {
       return '#' + Math.round(0xffffff * Math.random()).toString(16);
   }
//
   function randomSize() {
       return ((Math.random() * 200) + 50) + "px";
   }
//
   function randomPositionWidth1() {
       return ((Math.random() * (window.innerWidth - 250) + "px"));
   }
//
   function randomPositionTop1() {
       return ((Math.random() * window.innerHeight + "px"));
   }

   function RandomShape() {
       var randomWidth = randomSize();
       var randomHeight = randomSize();
       var randomColor = randomColor1();
       var randomPositionWidth = randomPositionWidth1();
       var randomPositionTop = randomPositionTop1();
       makeShape(randomWidth, randomHeight, randomColor, randomPositionWidth, randomPositionTop)
   }
   function makeShape(width, height, color, positionLeft, positionTop) {
       var element = document.createElement("div");
       element.style.width = width;
       element.style.height = height;
       element.style.backgroundColor = color;
       element.style.left = positionLeft;
       element.style.top = positionTop;
       element = createWhiteSquares(element);
       element.addEventListener("click", displaySquare);
       element.addEventListener("mousedown", moveShape);
       element.classList.add("rectangleShape");
       document.getElementById('canvas').appendChild(element);
   }

   if (this.classList.contains("selected")) {
           this.onmousemove = function (e) {
               var left = parseInt(e.clientX - diffX);
               var top = parseInt(e.clientY - diffY);
               if (top < 0) { top = 0; }
               if (left < 0) { left = 0; }
               if (top > window.innerHeight - 1)
               { top = window.innerHeight - 1; }
               if (left > window.innerWidth - 1)
               { left = window.innerWidth - 1; }
               this.style.left = left + 'px';
               this.style.top = top + 'px';
           }
       }
       this.addEventListener("mouseup", function () {
           this.onmousemove = null;
       });

   }

   function openTable() {
       var colorTable = document.getElementById("color-table");
       colorTable.classList.toggle("displayTable");
   }

   function changeShapeColor() {
       var shapeSelected = document.getElementsByClassName("selected");
       for (var i = 0; i < shapeSelected.length; i++) {
           shapeSelected[i].style.backgroundColor = this.style.backgroundColor;
       }
   }

   function changeSizeBR() {
       event.stopPropagation();
       var shape = this.parentElement;
       var oldX = event.clientX;
       var oldY = event.clientY;

       this.onmousemove = function (e) {
           var newX = e.clientX - oldX;
           var newY = e.clientY - oldY;
           shape.style.width = shape.offsetWidth + newX + "px";
           shape.style.height = shape.offsetHeight + newY + "px";

           oldX = e.clientX;
           oldY = e.clientY;
       }
       this.addEventListener("mouseup", function () {
           this.onmousemove = null;
       });
   }

   function changeSizeBL() {
       event.stopPropagation();
       var shape = this.parentElement;
       var oldX = event.clientX;
       var oldY = event.clientY;

       this.onmousemove = function (e) {
           var newX = e.clientX - oldX;
           var newY = e.clientY - oldY;
           shape.style.width = shape.offsetWidth - newX + "px";
           shape.style.height = shape.offsetHeight + newY + "px";
           shape.style.left = shape.offsetLeft + newX + "px";

           oldX = e.clientX;
           oldY = e.clientY;
       }
       this.addEventListener("mouseup", function () {
           this.onmousemove = null;
       });
   }

   function changeSizeTL() {
       event.stopPropagation();
       var shape = this.parentElement;
       var oldX = event.clientX;
       var oldY = event.clientY;

       this.onmousemove = function (e) {
           var newX = e.clientX - oldX;
           var newY = e.clientY - oldY;
           shape.style.width = shape.offsetWidth - newX + "px";
           shape.style.height = shape.offsetHeight - newY + "px";
           shape.style.top = shape.offsetTop + newY + "px";
           shape.style.left = shape.offsetLeft + newX + "px";

           oldX = e.clientX;
           oldY = e.clientY;
       }
       this.addEventListener("mouseup", function () {
           this.onmousemove = null;
       });
   }

function changeSizeTR() {
       event.stopPropagation();
       var shape = this.parentElement;
       var oldX = event.clientX;
       var oldY = event.clientY;

       this.onmousemove = function (e) {
           var newX = e.clientX - oldX;
           var newY = e.clientY - oldY;

           shape.style.width = shape.offsetWidth + newX + "px";
           shape.style.height = shape.offsetHeight - newY + "px";
           shape.style.top = shape.offsetTop + newY + "px";

           oldX = e.clientX;
           oldY = e.clientY;
       }
       this.addEventListener("mouseup", function () {
           this.onmousemove = null;
       });
   }
   //
   function deleteSelected() {
       var shapes = document.getElementsByClassName("selected");
       var canvas = document.getElementById("canvas");
       while (shapes.length) {
           canvas.removeChild(shapes[0]);
       }
   }
   function saveCanvas() {
       var window = document.getElementById("save-window");
       var pause = document.getElementById("pause");
       window.classList.toggle("toggleWindow");
       pause.classList.toggle("togglePasue");
   }
   function loadCanvas() {
       var window = document.getElementById("load-window");
       var pause = document.getElementById("pause");
       window.classList.toggle("toggleWindow");
       pause.classList.toggle("togglePasue");
   }

   function closeSaveWindow() {
       var window = document.getElementById("save-window");
       var pause = document.getElementById("pause");
       window.classList.toggle("toggleWindow");
       pause.classList.toggle("togglePasue");
   }
   function closeLoadWindow() {
       var window = document.getElementById("load-window");
       var pause = document.getElementById("pause");
       window.classList.toggle("toggleWindow");
       pause.classList.toggle("togglePasue");
   }

}
