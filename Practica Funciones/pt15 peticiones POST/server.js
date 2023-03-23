var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/student', (req, res) => {
  res.render('student');
});
app.post('/addStudent', (req, res) => {
  res.render('displayData', { nombre: req.body.nombre, 
                              edad: req.body.edad,
                              nss: req.body.nss,
                              tipoSangre: req.body.tipoSangre});
})

app.get('/person/:id', (req, res) => {
  res.render('person', { ID: req.params.id, Message: req.query.message, Times: req.query.times});
});

app.listen(port);