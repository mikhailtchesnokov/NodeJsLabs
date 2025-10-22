const EventEmitter = require('events').EventEmitter;

const myEmitter = new EventEmitter();

const listener1 = () => {
  console.log("Hi from listerner 1");
};
myEmitter.on('newEvent', listener1);

const listener2 = () => {
   console.log("Hi from listerner 2");
};
myEmitter.on('newEvent', listener2);

console.log(myEmitter.listenerCount('newEvent')); // 2
console.log(myEmitter.listeners('newEvent')); // [ [Function: listener1], [Function: listener2] ]

myEmitter.emit('newEvent');

myEmitter.off('newEvent', listener2);

myEmitter.emit('newEvent');
