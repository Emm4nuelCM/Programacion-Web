const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');

router.get('/gente', async (req, res) => {
    const Persons = await Person.find({});
    res.render('index', { Persons });
});

router.get('/addPerson', (req, res) => {
    res.render('addPerson');
});

router.get('/findById/:id', (req, res) => {
    Person.findById(req.params.id)
    .then((person) => {res.render('updatePerson', {person})})
    .catch((error)=>{res.json({message:error})});
});

router.post('/addPerson', (req, res) => {
    const newPerson = Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });

    newPerson
    .save()
    .then((data)=>{res.redirect('/gente')})
    .catch((error)=>{res.json({message:error})});
});

router.post('/updatePerson', (req, res) => {
    Person.findByIdAndUpdate(req.body.objId,
        {
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss 
        })
    .then((data)=>{res.redirect('/gente')})
    .catch((error)=>{res.json({message:error})});
});

module.exports=router;