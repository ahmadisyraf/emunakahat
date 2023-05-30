const express = require('express');
var cors = require('cors');
const router = express.Router();
const { registerUser, getAllUser } = require("../controller/user.controller");

router.post("/insertUser", registerUser);

router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

module.exports = router;