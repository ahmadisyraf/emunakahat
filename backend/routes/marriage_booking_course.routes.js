const express = require('express');
var cors = require('cors');
const router = express.Router();
const { insertBooking, getBookingById, getBooking, updateBooking, deleteBooking} = require("../controller/marriage_booking_course.controller");

router.post("/insertBooking", insertBooking);
router.get("/getBookingById/:id", getBookingById);
router.get("/getBooking", getBooking);
router.put("/updateBooking/:id", updateBooking);
router.delete("/deleteBooking/:id", deleteBooking);

module.exports = router;