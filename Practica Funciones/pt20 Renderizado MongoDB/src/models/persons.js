const mongoose = require('mongoose');
let PersonSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    tipoSangre: {
        type: String,
        required: true
    },
    nss: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Persons', PersonSchema);