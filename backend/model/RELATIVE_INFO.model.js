const mongoose = require('mongoose');

const relativeInfoSchema = new mongoose.Schema({


    RI_ID: {
        required: true,
        type: String
      },
    RI_OCCUPATION: {
        required: false,
        type: String
    },
    RI_JOB_TYPE: {
        required: false,
        type: String
    },
    RI_SALARY: {
        required: false,
        type: Number 
    },
    RI_EMPLOYER_NAME: {
        required: false,
        type: String 
    },
    RI_EMPLOYER_ADDRESS: {
        required: false,
        type: String 
    },
    RI_NAME: {
        required: false,
        type: String 
    },
    RI_RELATIONSHIP: {
        required: false,
        type: String 
    },
    RI_PHONE_NO: {
        required: false,
        type: String 
    }
});

module.exports = mongoose.model('RelativeInfo', relativeInfoSchema)