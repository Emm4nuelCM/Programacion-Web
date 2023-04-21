const express = require("express");
const router = express.Router();

//Create user
router.post('/users', (req, res) => {
    res.send('create user');
});

module.exports = router;