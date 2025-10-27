import express from 'express';
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/index', (req, res) => {
  res.render("index", { username: "John", items: ["Apple", "Banana", "Cherry"] });
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
