const path = require('path')
const express = require('express')
const app = express()
const port = 3000

const publicDirectoryPath = path.join(__dirname,'../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine','hbs');
app.get('/', (req, res) => {
  res.render('index',{
      title: "Home",
      name: "zainab"
  })
})

app.get('/contact', (req, res) => {
  res.render('contact',{
      title: "Home",
      name: "zainab"
  })
})

app.get('/projects', (req, res) => {
  res.render('projects',{
      title: "Home",
      name: "zainab"
  })
})

app.get('/about', (req, res) => {
    res.send('<h1>Hello World from about!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})