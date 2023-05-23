const express = require('express');

const router = express.Router()

module.exports = router;

router.get('/getUser', (req, res) => {
    res.send('Successfully get user');
})