const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(function (req, res, next) {
  console.log('/'+ req.method);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/sharks', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/sharks.html'));
});

app.use(express.static(__dirname + '/views'));

app.listen(port, () => {
  console.log(`Server is running at http: //localhost:${port}`);
});
