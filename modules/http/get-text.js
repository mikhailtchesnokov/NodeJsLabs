const http = require('http');

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  //console.log(request);

  if(request.url === '/about') {
    response.end('About Us\n');
  } else {
    response.end('Hello World\n');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log(`Dirname is ${__dirname}`);
  console.log(`Filename is ${__filename}`);
  console.log('Server running at http://127.0.0.1:3000/');
});
