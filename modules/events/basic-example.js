const EventEmitter = require('events').EventEmitter;

const myEmitter = new EventEmitter();

myEmitter.on('newEvent', () => {
   console.log("Event emitted");
});

for (let i = 0; i < 5; i++) {
  myEmitter.emit('newEvent');
}
