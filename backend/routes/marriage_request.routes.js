const express = require('express');
var cors = require('cors');
const router = express.Router();
const { insertCourse, getCourse, getCourseById } = require("../controller/marriage_course_listing.controller");
const { insertMarriageRequest, getMarriageRequestByIC } = require("../controller/marriage_request.controller");

router.post("/insertMarriageRequest", insertMarriageRequest);
router.get("/getMarriageRequestByIC/:ic", getMarriageRequestByIC);

module.exports = router;
