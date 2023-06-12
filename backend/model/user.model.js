const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    USER_IC: {
        required: true,
        type: String
    },
    USER_NAME: {
        required: true,
        type: String
    },
    USER_GENDER: {
        required: true,
        type: String
    },
    USER_PHONE_NO: {
        required: true,
        type: String,
    },
    USER_EMAIL: {
        required: true,
        type: String
    },
    USER_BIRTH_DATE: {
        required: false,
        type: String,
    },
    USER_RACE: {
        required: false,
        type: String
    },
    USER_NATIONALITY: {
        required: false,
        type: String
    },
    USER_ADDRESS: {
        required: false,
        type: String
    },
    USER_EDUCATIONAL_STATUS: {
        required: false,
        type: String
    },
    USER_EMPLOYMENT_POSITION: {
        required: false,
        type: String
    },
    USER_SALARY: {
        required: false,
        type: String
    },
    USER_MARRIAGE_STATUS: {
        required: false,
        type: String
    },
    USER_PARTNER_IC: {
        required: false,
        type: String
    },
    USER_NATIONALITY: {
        required: false,
        type: String
    }
})

module.exports = mongoose.model('User', userSchema)