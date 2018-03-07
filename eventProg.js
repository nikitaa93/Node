let events = require ('events');

let eventEmitter = new events.EventEmitter();

let connectHandler = function connected(){
    console.log('connected successfully');
    eventEmitter.emit('data_rcvd');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_rcvd',function (){
    console.log('data received');
});

eventEmitter.emit('connection');
console.log('Program ended');