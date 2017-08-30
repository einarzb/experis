//require node packacges
var EventEmitter = require('events').EventEmitter;

/************************** main func with events **************************************/
function setLoop(n) {
  var publisher = new EventEmitter();

  setTimeOut(function(){
      publisher.emit("start", "for loop starts here");

      while(n > 0) {
          publisher.emit("looping", counter);
          n--;
         }

      publisher.emit("end", "this loop ends now");

  },3000);

  return(publisher);
}

/************************** set subscribers**************************************/

startloop.on('start', function(data){
  console.log(data);
});

startloop.on('looping', function(n){
console.log(n + " im in process");
});

startloop.on('end', function(data){
  console.log(data);
});


//invoke
var startloop = setLoop(8);
