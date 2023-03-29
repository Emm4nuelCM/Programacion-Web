let express = require('express'); //Inyeccion de la dependencia
let router = express.Router();

router.get('/person', (req, res) => {
    res.send('has solicitado el listado de personas');
})

module.exports= router; 