/*event emitter is always listening for something to happen and would pass data once they are invoked.
unlike callback function.

*/

var EventEmitter = require('events').EventEmitter;

var getResource = function(c){
    var e = new EventEmitter();

    //iife function
    process.nextTick(function(){
        var count = 0;
        e.emit('start'); //invoke emitter (now its start)

        var t = setInterval(function(){
            e.emit('data', ++count);

            //if count hits the max number of times as given to function
            if(count === c){
                e.emit('end', count);
                //kills setInterval
                clearInterval(t);
            }

            if(count === 1){
                e.emit('first', count);
            }

            if(count === 3){
                e.emit('three', count);
            }

        },3000); //the ms definition for setInterval
    });
    return(e);
}

var r = getResource(5);

r.on('start', function(){
    console.log("I've started")
});

r.on('data', function(d){
    console.log("I've recived data number: " + d)
});

r.on('first', function(){
    console.log("You are number oneeee" )
});

r.on('three', function(){
    console.log("three is your lucky number")
});

r.on('end', function(t){
    console.log("I'm done with " + t + " data events")
});
