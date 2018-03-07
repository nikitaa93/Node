let events = require ('events');

let eventEmitter = new events.EventEmitter();

let list1 = function listener1(){
    console.log('Listener1');
}

let list2 = function listener2(){
    console.log('Listener2');
}

eventEmitter.addListener('connection',list1);

eventEmitter.emit('connection');

let listCount = events.EventEmitter.listenerCount(eventEmitter,'connection');

console.log('No of listeners listening : '+listCount);

eventEmitter.addListener('connection',list2);

eventEmitter.emit('connection');

listCount = events.EventEmitter.listenerCount(eventEmitter,'connection');

console.log('No of listeners listening : '+listCount);

eventEmitter.removeListener('connection',list1);
console.log("Listner1 will not listen now.");

eventEmitter.emit('connection');

listCount = events.EventEmitter.listenerCount(eventEmitter,'connection');

console.log('No of listeners listening : '+listCount);