const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    MCL_ORGANIZER_NAME: {
        required: false,
        type: String,
    },
    MCL_START_DATE: {
        required: false,
        type: String,
    },
    MCL_END_DATE: {
        required: false,
        type: String,
    },
    MCL_START_TIME: {
        required: false,
        type: String,
    },
    MCL_END_TIME: {
        required: false,
        type: String,
    },
    MCL_PRICE: {
        required: false,
        type: String,
    },
    MCL_VENUE_NAME: {
        required: false,
        type: String,
    },
    MCL_VENUE_ADDRESS: {
        required: false,
        type: String,
    },
    MCL_SLOT: {
        required: false,
        type: String,
    },
    MCL_OFFICER_ON_DUTY: {
        required: false,
        type: String,
    },
    MCL_OFFICER_PHONE_NUM: {
        required: false,
        type: String,
    },
    MCL_DISPLAY_PUBLIC: {
        required: false,
        type: String,
    }

})

module.exports = mongoose.model('Course', courseSchema)