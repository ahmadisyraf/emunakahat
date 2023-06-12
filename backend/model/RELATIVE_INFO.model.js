const mongoose = require('mongoose');

const relativeInfoSchema = new mongoose.Schema({


    
    RI_OCCUPATION: {
        required: true,
        type: String
    },
    RI_JOB_TYPE: {
        required: true,
        type: String
    },
    RI_SALARY: {
        required: true,
        type: Number 
    },
    RI_EMPLOYER_NAME: {
        required: true,
        type: String 
    },
    RI_EMPLOYER_ADDRESS: {
        required: true,
        type: String 
    },
    RI_NAME: {
        required: true,
        type: String 
    },
    RI_RELATIONSHIP: {
        required: true,
        type: String 
    },
    RI_PHONE_NO: {
        required: true,
        type: String 
    }
})

module.exports = mongoose.model('RelativeInfo', relativeInfoSchema)