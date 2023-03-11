var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use('/', (req, res, next) => {
  console.log('Request Url:' + req.url);
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/api', (req,res) => {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.get('/person/:id', (req, res) => {
  let ID = req.params.id, value;
  let numbers = Array.from({length: ID}, (_, index) => index + 1);
  if(ID % 2 == 0) {
    value = "par";
  } else {
    value = "impar";
  }
  res.render('person', { ID, value, numbers});
});
app.get('/personas', (req, res) => {
  let data = [
    {id:1, nombre: "Hugo", apellido: "Estrada Ramirez", edad: 19},
    {id:2, nombre: "Estela", apellido: "Perez Suarez", edad: 18},
    {id:3, nombre: "Sabrina", apellido: "Contreras Morales", edad: 17},
  ];
  res.render('personas', {data});
});

//NOT INCLUIDED IN PRACTICE  //NOT INCLUIDED IN PRACTICE  //NOT INCLUIDED IN PRACTICE
app.get('/tienda', (req, res) => {
  res.render('tienda');
})

app.listen(port);