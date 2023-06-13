const express = require("express");
const MarriageConsultation = require("../model/marriage_consultation.model");
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

const getCons = asyncHandler(async (req, res) => {
    try {
        const result = await Course.find();

        if (result) {
            res.status(200).json(result);
        }

    } catch (err) {
        res.status(400).json({ err });
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

module.exports = { insertConsultation, getCons, getConsultationById }

