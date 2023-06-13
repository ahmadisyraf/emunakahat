const mongoose = require('mongoose');

const specialIncentiveDocumentSchema = new mongoose.Schema({

    SID_ID: {
        required: true,
        type: String
      },
    SID_SALARY_SLIP: {
        required: false,
        type: Buffer
    },
    SID_RESIDENCY_CONFIRMATION: {
        required: false,
        type: Buffer
    },
    SID_IC_COPY: {
        required: false,
        type: Buffer
    },
    SID_AKAD_NIKAH_COPY: {
        required: false,
        type: Buffer
    },
    SID_BANK_STATEMENT_COPY: {
        required: false,
        type: Buffer
    }

});

module.exports = mongoose.model('SpecialIncentiveDocument', specialIncentiveDocumentSchema)