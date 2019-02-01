

var EventEmitter = require('events').EventEmitter;

function getCount(maxCount){
    var e  = new EventEmitter();

    //emit events here
    //we delay the emit methods to load the subscribers first then then the emitter will be listed
    //this is done by the process.nextTick() method.

    process.nextTick(function(){
        var cnt = 0;
        e.emit('start');
        var t = setInterval(function(){
            e.emit('count',++cnt);      //emitter for count subscriber
            if(cnt==8){
                e.emit('error',cnt);
                clearInterval(t);
            }
            if(cnt==maxCount){
                e.emit('finish',cnt);
                clearInterval(t);
            }
        },1000);
    });
    return e;
}

var evt = getCount(10);

evt.on('start',()=>console.log("Loop started..."));

evt.on('count',(c)=>console.log("Loop count : "+c));

evt.on('error',(c)=>console.log("Error occured and count is : "+c));

evt.on('finish',(c)=>console.log("Loop ended at : "+c));