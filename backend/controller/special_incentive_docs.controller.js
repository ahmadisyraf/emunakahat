const express = require("express");
const SpecialIncentiveDocument = require("../model/special_incentive_document.model");
const asyncHandler = require("express-async-handler");

const insertDocument = asyncHandler(async (req, res) => {

    const data = req.body;

    try {
        const result = await SpecialIncentiveDocument.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getDocument = asyncHandler(async (req, res) => {
    const ic = req.params.ic;

    try {
        const result = await SpecialIncentiveDocument.find({ "USER_IC": ic });

        if(result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
})

module.exports = { insertDocument, getDocument }