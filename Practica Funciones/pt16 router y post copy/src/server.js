//VALORES DE ARRANQUE DEL SERVIDOR  //VALORES DE ARRANQUE DEL SERVIDOR  //VALORES DE ARRANQUE DEL SERVIDOR
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
//Inclusion del router que viene de personas, index, student y addStudent
let personRoute= require('./routes/person');
let indexRoute= require('./routes/index');

//LLamado de las distintas rutas 
app.use(personRoute);
app.use(indexRoute);
app.use('/assets', express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log('escuchando en el puerto 3000')
});