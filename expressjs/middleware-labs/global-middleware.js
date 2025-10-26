import express from 'express';
const app = express();

function removeHttpHeader(req, res, next) {
  res.removeHeader('E-Tag');
  next();
}

function logResponse(req, res, next) {
  console.log(`Start processing request: ${req.method} ${req.url}`);
  next();
  console.log(`Finished processing request: ${req.method} ${req.url}`);
}

function addCustomProp2Request(req, res, next) {
  req.customProperty = 'Initiated';
  next();
}

function setResponseHeader(req, res, next) {
  res.set({
    'X-Custom-Response-Header': 'Custom-Response-Value'
  });
  next();
}

app.use(removeHttpHeader);

app.use(logResponse);

app.use(addCustomProp2Request);

app.use(setResponseHeader);

app.get('/users', (req, res) => {
  console.log('Custom Property:', req.customProperty);
  res.send('Reading Users');
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})