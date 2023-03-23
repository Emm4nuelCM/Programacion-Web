//VALORES DE ARRANQUE DEL SERVIDOR  //VALORES DE ARRANQUE DEL SERVIDOR  //VALORES DE ARRANQUE DEL SERVIDOR
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
//Código usado por Express para procesar los datos 
//enviados a través de un formulario HTML que 
//utiliza el método POST en formato URL codificado.
app.use(express.urlencoded({ extended: false }));

//ESTABLECER ERRAMIENTA DE VISTAS COMO EJS
app.set('view engine', 'ejs');

//PAGINA INICIAL DEL SERVIDOR  //PAGINA INICIAL DEL SERVIDOR  //PAGINA INICIAL DEL SERVIDOR
app.get('/', (req, res) => {
  res.render('index');
});

//Muestra la pagina de /student  //Muestra la pagina de /student  //Muestra la pagina de /student
app.get('/student', (req, res) => {
  res.render('student');
});
//POST /student se RENDERIZAn los datos obtenidos en displayData.ejs
app.post('/addStudent', (req, res) => {
  res.render('displayData', { nombre: req.body.nombre, 
                              edad: req.body.edad,
                              nss: req.body.nss,
                              tipoSangre: req.body.tipoSangre});
})

app.listen(port);