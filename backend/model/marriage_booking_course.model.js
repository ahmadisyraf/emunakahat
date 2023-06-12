const mongoose = require('mongoose');

const courseBooking = new mongoose.Schema({
    MCB_USER_IC: {
        type: String,
        required: true,
    },
    MCL_ID: {
        type: String,
        required: true,
    },
    MCB_PAYMENT_PROOF: {
        type: String,
        required: false,
    },
    MCB_STATUS: {
        type: String,
        required: false,
    },
    MCB_CERTIFICATE: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('CourseBooking', courseBooking)