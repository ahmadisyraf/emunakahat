const mongoose = require('mongoose');



const specialIncentiveApplicationSchema = new mongoose.Schema({
  
  USER_IC: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to user model
    required: true
  },
  RI_ID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RelativeInfo', // Reference to relative info model
    required: true
  },
  SID_ID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SpecialIncentiveDocument', // Reference to special incentive document model
    required: true
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
