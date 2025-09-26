var fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.on('data', function(chunk) {
  console.log('Received chunk:', chunk.length);
  writableStream.write(chunk);
});

readableStream.on('end', function() {
  console.log('No more data to read.');
  writableStream.end();
});
