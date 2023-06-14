const express = require('express');
var cors = require('cors');
const router = express.Router();
const { insertCourse, getCourse, getCourseById } = require("../controller/marriage_course_listing.controller");
const { insertMarriageRequest, getMarriageRequestByIC, getMarriageRequest } = require("../controller/marriage_request.controller");

router.post("/insertMarriageRequest", insertMarriageRequest);
router.get("/getMarriageRequestByIC/:ic", getMarriageRequestByIC);
router.get("/getMarriageRequest", getMarriageRequest);

module.exports = router;
