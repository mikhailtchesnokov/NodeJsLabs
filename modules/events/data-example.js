const EventEmitter = require('events').EventEmitter;

const myEmitter = new EventEmitter();

myEmitter.on('newNumber', (n, description) => {
  setImmediate(() => console.log(n, description));
});

for (let i = 0; i < 5; i++) {
  myEmitter.emit('newNumber', i, "is a number");
}
