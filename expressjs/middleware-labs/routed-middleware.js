import express from 'express';
const app = express();


function userRequestLogger(req, res, next) { 
  console.log(`Users request logger: ${req.method} ${req.url}`)
  next()
}

function productRequestLogger(req, res, next) { 
  console.log(`Product request logger: ${req.method} ${req.url}`)
  next()
}


app.get('/users', userRequestLogger, (req, res) => { 
  res.send('Reading Users')
})

app.get('/products', productRequestLogger, (req, res) => { 
  res.send('Reading Products')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
