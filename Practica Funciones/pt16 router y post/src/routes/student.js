let express = require('express'); //Inyeccion de la dependencia
let router = express.Router();

router.get('/student', (req, res) => {
    res.render('student');
})

module.exports= router;