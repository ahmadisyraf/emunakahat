const express = require('express');
var cors = require('cors');
const router = express.Router();
const { registerUser, getUserByEmail, getUserUpdate} = require("../controller/user.controller");

router.post("/insertUser", registerUser);

router.get("/getUserByEmail/:USER_EMAIL", getUserByEmail);

router.patch("/getUserUpdate/:USER_IC", getUserUpdate);

module.exports = router;