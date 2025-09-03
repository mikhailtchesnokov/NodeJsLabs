const express = require('express')
const app = express()

function requestLogger(req, res, next) {
  console.log(`Start processing request: ${req.method} ${req.url}`)
  next()
}

function productRequestLogger(req, res, next) {
  req.headers['x-product-request'] = 'true'
  console.log(`Product request logger: ${req.method} ${req.url}`)
  next()
}

app.use(requestLogger)

app.get('/users', (req, res) => {
  res.send('Hello Users')
})

app.get('/products', productRequestLogger, (req, res) => {
  console.log(req.headers['x-product-request'])
  res.send('Hello Products')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})





