const mongoose = require('mongoose');



const incentiveStatusSchema = new mongoose.Schema({

    IS_ID: {
        required: true,
        type: String
      },
    USER_IC: {
        required: true,
        type: String
    },
    IS_DATE: {
        required: false,
        type: String
    },
    IS_STATUS: {
        required: false,
        type: String
      },

});


module.exports = mongoose.model('IncentiveApplication', incentiveStatusSchema);