const express = require('express');
var cors = require('cors');
const router = express.Router();
const { insertCourse, getCourse, getCourseById, deleteCourse, updateCourse } = require("../controller/marriage_course_listing.controller");

router.post("/insertCourse", insertCourse);
router.get("/getCourse", getCourse);
router.get("/getCourseById/:id", getCourseById);
router.delete("/deleteCourse/:id", deleteCourse)
router.put("/updateCourse/:id", updateCourse);

module.exports = router;