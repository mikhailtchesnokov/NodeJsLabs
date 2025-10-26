import express from 'express';
const app = express();

app.get('/users', (req, res) => {
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);
  console.log('Query Params:', req.query);  

  res.send('Hello Users');
})

app.get('/users/:id', (req, res) => {

  console.log('Method:', req.method);
  console.log('Headers:', req.headers);
  console.log('Query:', req.query);  
  console.log('Params:', req.params);

  res.send(`Hello User ${req.params.id}`);
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
