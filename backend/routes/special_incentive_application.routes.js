const express = require('express');
var cors = require('cors');
const router = express.Router();
const { insertIncentiveApplication, getIncentiveApplication } = require("../controller/special_incentive_application.controller");

router.post("/insertIncentiveApplication", insertIncentiveApplication);
router.get("/getIncentiveApplication/:id", getIncentiveApplication);

module.exports = router;