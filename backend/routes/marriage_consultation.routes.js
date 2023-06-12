const express = require('express');
var cors = require('cors');
const router = express.Router();
const { insertConsultation, getCons, getConsultationById } = require("../controller/marriage_consultation.controller");

router.post("/insertConsultation", insertConsultation);
router.get("/getCons", getCons);
router.get("/getConsultationById/:id", getConsultationById);

module.exports = router;