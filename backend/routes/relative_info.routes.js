const express = require('express');
var cors = require('cors');
const router = express.Router();
const { insertRelativeInfo } = require("../controller/relative_info.controller");

router.post("/insertRelativeInfo", insertRelativeInfo);
// router.get("/getRelativeInfo/:id", getRelativeInfo);

module.exports = router;