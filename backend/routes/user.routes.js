const express = require('express');
var cors = require('cors');
const router = express.Router();
const { registerUser, getUserByEmail, updateUser, getUserByIC} = require("../controller/user.controller");

router.post("/insertUser", registerUser);

router.get("/getUserByEmail/:USER_EMAIL", getUserByEmail);

router.put("/updateUser/:USER_EMAIL", updateUser);

router.get("/getUserByIC/:ic", getUserByIC);

module.exports = router;