let express = require('express'); //Inyeccion de la dependencia
let router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

module.exports= router;
