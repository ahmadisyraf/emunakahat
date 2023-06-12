const mongoose = require('mongoose');

const specialIncentiveDocumentSchema = new mongoose.Schema({

    
    SID_SALARY_SLIP: {
        required: true,
        type: Buffer
    },
    SID_RESIDENCY_CONFIRMATION: {
        required: true,
        type: Buffer
    },
    SID_IC_COPY: {
        required: true,
        type: Buffer
    },
    SID_AKAD_NIKAH_COPY: {
        required: true,
        type: Buffer
    },
    SID_BANK_STATEMENT_COPY: {
        required: true,
        type: Buffer
    }

})

module.exports = mongoose.model('SpecialIncentiveDocument', specialIncentiveDocumentSchema)