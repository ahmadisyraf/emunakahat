const express = require('express');
var cors = require('cors');
const router = express.Router();
const { registerUser, getUserByEmail, updateUser, getUserByIC, getUsers} = require("../controller/user.controller");

// Route for registering a user
router.post("/insertUser", registerUser);

// Route for getting a user by email
router.get("/getUserByEmail/:USER_EMAIL", getUserByEmail);

// Route for updating a user
router.put("/updateUser/:USER_EMAIL", updateUser);

// Route for getting a user by IC
router.get("/getUserByIC/:ic", getUserByIC);

// Route for fetching the list of users
router.get("/getUsers", getUsers);

module.exports = router;