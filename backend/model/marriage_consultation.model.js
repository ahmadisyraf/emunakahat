const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    MC_ID: {
        required: false,
        type: String,
    },
    USER_IC: {
        required: false,
        type: String,
    },
    USER_PARTNER_ID: {
        required: false,
        type: String,
    },
    STAFF_ID: {
        required: false,
        type: String,
    },
    MC_COMPLAINT_PURPOSE: {
        required: false,
        type: String,
    },
    MC_COMPLAINT_STATEMENT: {
        required: false,
        type: String,
    },
    MC_ADVISOR_STATEMENT: {
        required: false,
        type: String,
    },
    MC_TIME_SLOT: {
        required: false,
        type: String,
    },
    MC_CONSULTATION_DATE: {
        required: false,
        type: String,
    },
    MC_CONSULTATION_STATUS: {
        required: false,
        type: String,
    },
    MC_COMPLAINT_SOLUTION: {
        required: false,
        type: String,
    }
})

module.exports = mongoose.model('MarriageConsultation', courseSchema)