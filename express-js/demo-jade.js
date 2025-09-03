const express = require('express')
const app = express()

app.set('view engine', 'jade')
app.set('views', './views')

app.get('/hello', (req, res) => {
  res.render('hello', {    
    title: 'Hey',
    messageTitle: 'Hello there!',
    messageText: 'This is Jade template engine'
  })
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
