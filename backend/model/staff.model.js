const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    STAFF_ID: {
        required: true,
        type: String
    },
    STAFF_NAME: {
        required: true,
        type: String
    },
    STAFF_GENDER: {
        required: true,
        type: String
    },
    STAFF_PHONE_NO: {
        required: true,
        type: String,
    },
    STAFF_EMAIL: {
        required: true,
        type: String
    },
    STAFF_ROLE: {
        required: false,
        type: String,
    },

})

module.exports = mongoose.model('Staff', userSchema)