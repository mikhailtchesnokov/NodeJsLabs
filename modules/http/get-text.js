const {createServer} = require('http');

const server = createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.setHeader('X-Custom-Header', 'MyHeaderValue');
  
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
