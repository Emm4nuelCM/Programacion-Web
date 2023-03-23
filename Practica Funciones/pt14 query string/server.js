//INICIALIZAR SERVIDOR  //INICIALIZAR SERVIDOR  //INICIALIZAR SERVIDOR  //INICIALIZAR SERVIDOR
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

//ESTABLECER ERRAMIENTA DE VISTAS COMO EJS
app.set('view engine', 'ejs');

//PAGINA INICIAL DEL SERVIDOR  //PAGINA INICIAL DEL SERVIDOR  //PAGINA INICIAL DEL SERVIDOR
app.get('/', (req, res) => {
  res.render('index');
});

//SE RENDERIZA DEPENDIENDO DE LOS DATOS OBTENIDOS DEL URL  //SE RENDERIZA DEPENDIENDO DE LOS DATOS OBTENIDOS DEL URL
app.get('/person/:id', (req, res) => {
  res.render('person', { ID: req.params.id, Message: req.query.message, Times: req.query.times});
});

app.listen(port);