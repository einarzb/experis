$.fn.center = function() {

//the choosen image
var element = this;

//makes sure img loads before adjusting center
// $(element).load(function(){

//first invoke
changeCss();

//listens to the window resize and change it - resize is the ame
$(window).bind("resize",function(){
  changeCss();
})

function changeCss(){
//initalize
  var imageHeight = $(element).height();
  var imageWidth = $(element).width();
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

//changing the css
  $(element).css({
    "position":"absolute",
    "left":windowWidth/2 - imageWidth/2,
    "top":windowHeight/2 - imageHeight/2
    });
  };

// })

};
