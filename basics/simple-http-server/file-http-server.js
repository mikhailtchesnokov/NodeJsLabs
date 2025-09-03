const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  fs.createReadStream('index.html').pipe(response);

  // fs.readFile('index.html', (err, data) => {
  //   if (err) {
  //     response.statusCode = 500;
  //     response.setHeader('Content-Type', 'text/plain');
  //     response.end('Internal Server Error\n');
  //     return;
  //   }
  //   response.statusCode = 200;
  //   response.setHeader('Content-Type', 'text/html');
  //   response.end(data);
  // });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
