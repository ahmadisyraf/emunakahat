const express = require('express');
var cors = require('cors');
const router = express.Router();
const { insertDocument, getDocument } = require("../controller/special_incentive_docs.controller");

router.post("/insertDocument", insertDocument);
router.get("/getDocument/:id", getDocument);

module.exports = router;