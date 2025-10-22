const CustomError = require('./src/custom.error');
const EventEmitter = require('events').EventEmitter;

const myEmitter = new EventEmitter();

myEmitter.on('newNumber', (n, description) => {
  setImmediate(() => console.log(n, description));
});

myEmitter.on('error', (err) => {
  console.error('An error occurred:\n', JSON.stringify(err, null, 2));
});

myEmitter.emit('error', new CustomError("something bad happened", 500, { reason: "Invalid input" }));
