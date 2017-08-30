//require core modules
var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Resource(m){

    var maxEvents = m;
    var self = this;

    //by using this we dont need to return anything!!

    process.nextTick(function(){
        var count = 0;
        self.emit('start');

        var t = setInterval(function(){
            self.emit('data', ++count);

            //if count hits the max number of times as given to function the kill it
            if(count === maxEvents){
                self.emit('end', count);
                //kills setInterval
                clearInterval(t);
            }

            if(count === 1){
                self.emit('first', count);
            }

            if(count === 3){
                self.emit('three', count);
            }

        },3000); //the ms definition for setInterval
    });
}

/* UTIL - Resource inherits EventEmitter functionality which elimanates the need to write this line
var e = new EventEmitter();

its sort of binding
*/
util.inherits(Resource, EventEmitter);
//export module
module.exports = Resource;
