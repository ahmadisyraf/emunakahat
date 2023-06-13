const express = require("express");
const SpecialIncentiveStatus = require("../model/incentive_status.model");
const asyncHandler = require("express-async-handler");

const insertIncentiveStatus = asyncHandler(async (req, res) => {

    const data = req.body;

    try {
        const result = await SpecialIncentiveStatus.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getIncentiveStatus = asyncHandler(async (req, res) => {
    const ic = req.params.ic;

    try {
        const result = await SpecialIncentiveStatus.find({ "USER_IC": ic });

        if(result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
})

module.exports = { insertIncentiveStatus, getIncentiveStatus }