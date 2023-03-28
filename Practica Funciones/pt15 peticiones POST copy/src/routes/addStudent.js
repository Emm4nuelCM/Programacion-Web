let express = require('express'); //Inyeccion de la dependencia
let router = express.Router();

router.post('/addStudent', (req, res) => {
    res.render('displayData', { nombre: req.body.nombre, 
                                edad: req.body.edad,
                                nss: req.body.nss,
                                tipoSangre: req.body.tipoSangre});
})

module.exports= router;