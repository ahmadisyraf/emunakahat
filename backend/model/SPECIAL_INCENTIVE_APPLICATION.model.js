const mongoose = require('mongoose');



const specialIncentiveApplicationSchema = new mongoose.Schema({
  
  SIA_ID: {
    required: false,
    type: String
  },
  USER_IC: {
    required: false,
    type: String
  },
  RI_ID: {
    required: false,
    type: String
  },
  SID_ID: {
    required: false,
    type: String
  },
  SIA_ACCOUNT_BANK_NO: {
    required: false,
    type: String
  },
  SIA_BANK_NAME: {
    required: false,
    type: String
  },
  SIA_BIRTH_PLACE: {
    required: false,
    type: String
  },
  SIA_AGE: {
    required: false,
    type: Number
  }
});

module.exports = mongoose.model('SpecialIncentiveApplication', specialIncentiveApplicationSchema);
