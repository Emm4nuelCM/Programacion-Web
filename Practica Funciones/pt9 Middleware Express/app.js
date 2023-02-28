const express = require('express')
const app = express()

app.get('/', (req, res) =>  {
  res.send('Hello World, this is the root route');
})

app.listen(3000);
app.get('/uno', (req, res) => {
  res.send('Hello World, from route One');
});

app.get('/prueba', (req, res) => {
  res.send('Hello World, from route Prueba');
});