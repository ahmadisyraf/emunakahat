const express = require('express');
var cors = require('cors');
const router = express.Router();
const { insertBooking, getBookingById } = require("../controller/marriage_booking_course.controller");

router.post("/insertBooking", insertBooking);
router.get("/getBookingById/:id", getBookingById);

module.exports = router;