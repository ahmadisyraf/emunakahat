const mongoose = require('mongoose');



const specialIncentiveApplicationSchema = new mongoose.Schema({
  
  SIA_ID: {
    required: true,
    type: String
  },
  USER_IC: {
    required: true,
    type: String
  },
  RI_ID: {
    required: true,
    type: String
  },
  SID_ID: {
    required: true,
    type: String
  },
  SIA_ACCOUNT_BANK_NO: {
    required: true,
    type: String
  },
  SIA_BANK_NAME: {
    required: true,
    type: String
  },
  SIA_BIRTH_PLACE: {
    required: true,
    type: String
  },
  SIA_AGE: {
    required: true,
    type: Number
  }
});

module.exports = mongoose.model('SpecialIncentiveApplication', specialIncentiveApplicationSchema);
