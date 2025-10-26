import express from 'express';
const app = express();

app.get('/users', (req, res) => {
  res.json([{ id: 12345, name: 'John Doe' }]);
});

app.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'John Doe' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});
