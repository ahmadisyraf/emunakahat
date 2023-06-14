const express = require("express");
const MarriageConsultation = require("../model/marriage_consultation");
const asyncHandler = require("express-async-handler");

const insertConsultation = asyncHandler(async (req, res) => {
    const data = req.body;

    try {
        const result = await MarriageConsultation.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getConsultationById = asyncHandler(async (req, res) => {
    const id = req.params.id;

    try {
        const result = await MarriageConsultation.findOne({ "MC_ID": id });

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
})

module.exports = { insertConsultation, getConsultationById }

