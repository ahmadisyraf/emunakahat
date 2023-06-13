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
        required: true,
        type: String
    },
    IS_STATUS: {
        required: true,
        type: String
      },

});


module.exports = mongoose.model('IncentiveApplication', incentiveStatusSchema);