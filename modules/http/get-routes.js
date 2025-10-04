const { createServer } = require('http');

const books = JSON.stringify([
  { title: "The Alchemist", author: "Paulo Coelho", year: 198 },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const authors = JSON.stringify([
  { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
  { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);

const server = createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });

  switch (request.url) {
    case '/books':
      response.end(books);
      break;
    case '/authors':
      response.end(authors);
      break;
    default:
      response.writeHead(404, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log(`Dirname is ${__dirname}`);
  console.log(`Filename is ${__filename}`);
  console.log('Server running at http://127.0.0.1:3000/');
});
