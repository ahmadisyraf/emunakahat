const express = require('express');
var cors = require('cors');
const router = express.Router();
const { registerStaff, getStaffByEmail, updateStaff} = require("../controller/staff.controller");

router.post("/insertStaff", registerStaff);

router.get("/getStaffByEmail/:STAFF_EMAIL", getStaffByEmail);

router.put("/updateStaff/:STAFF_EMAIL", updateStaff);

module.exports = router;