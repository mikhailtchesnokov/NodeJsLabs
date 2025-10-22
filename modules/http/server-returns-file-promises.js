const http = require('http');
const fs = require('fs').promises;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  fs.readFile('index.html', 'utf8').then(data => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(data);
  }).catch(err => { 
      response.statusCode = 500;
      response.setHeader('Content-Type', 'text/plain');
      response.end('Internal Server Error\n');
      return;
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
