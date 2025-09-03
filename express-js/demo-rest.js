const express = require('express')
const app = express()

app.get('/users', (req, res) => {
  res.send('Hello Users')
})

app.get('/users/:id', (req, res) => {
  res.send(`Hello User ${req.params.id}`)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
