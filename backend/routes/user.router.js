const express = require('express');
const router = express.Router();
const { registerUser, getAllUser } = require("../controller/user.controller");

router.post("/register", registerUser);

router.get("/getAllUser", getAllUser)

module.exports = router;