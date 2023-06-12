const express = require('express');
var cors = require('cors');
const router = express.Router();
const { insertCourse, getCourse, getCourseById } = require("../controller/marriage_course_listing.controller");

router.post("/insertCourse", insertCourse);
router.get("/getCourse", getCourse);
router.get("/getCourseById/:id", getCourseById);

module.exports = router;