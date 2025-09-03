const EventEmitter = require('events').EventEmitter;

const myEmitter = new EventEmitter();

myEmitter.on('newNumber', (n) => {
  setImmediate(() => console.log(n));
});

for (let i = 0; i < 5; i++) {
  myEmitter.emit('newNumber', i);
}
