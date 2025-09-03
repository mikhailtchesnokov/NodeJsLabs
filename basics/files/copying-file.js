var fs = require('fs');

// const readableStream = fs.createReadStream('input.txt');
// const writableStream = fs.createWriteStream('output.txt');
// readableStream.pipe(writableStream);

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.on('data', function(chunk) {
  writableStream.write(chunk);
});

readableStream.on('end', function() {
  writableStream.end();
});
