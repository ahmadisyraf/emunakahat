const express = require('express');
var cors = require('cors');
const router = express.Router();
const { registerUser, getUserByEmail } = require("../controller/user.controller");

router.post("/insertUser", registerUser);

router.get("/getUserByEmail/:USER_EMAIL", getUserByEmail);

module.exports = router;