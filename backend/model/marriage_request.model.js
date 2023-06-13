const mongoose = require('mongoose');

const marriageRequestSchema = new mongoose.Schema({
    USER_IC: {
        type: String,
        required: true
    },
    MR_MARRIAGE_DATE: {
        type: String,
        required: false
    },
    MR_MARRIAGE_TIME: {
        type: String,
        required: false
    },
    MR_MARRIAGE_VENUE: {
        type: String,
        required: false
    },
    MR_MASKAHWIN_TYPE: {
        type: String,
        required: false
    },
    MR_MASKAHWIN: {
        type: String,
        required: false
    },
    MR_HANTARAN: {
        type: String,
        required: false
    },
    MR_JURUNIKAH_NAME: {
        type: String,
        required: false
    },
    MR_WALI_NAME: {
        type: String,
        required: false
    },
    MR_WALI_IC: {
        type: String,
        required: false
    },
    MR_PERSETUJUAN_WALI: {
        type: String,
        required: false
    },
    MR_AKUAN_PERMAUSTAUTIN: {
        type: String,
        required: false
    },
    MR_SARINGAN_UJIAN_HIV: {
        type: String,
        required: false
    },
    MR_PAYMENT_PROOF: {
        type: String,
        required: false
    },
    MR_STATUS: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('MarriageRequest', marriageRequestSchema)