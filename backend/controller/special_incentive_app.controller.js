const express = require("express");
const SpecialIncentiveApplication = require("../model/special_incentive_application.model");
const asyncHandler = require("express-async-handler");

const insertIncentiveApplication = asyncHandler(async (req, res) => {

    const data = req.body;

    try {
        const result = await SpecialIncentiveApplication.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getIncentiveApplication = asyncHandler(async (req, res) => {
    const ic = req.params.ic;

    try {
        const result = await SpecialIncentiveApplication.find({ "USER_IC": ic });

        if(result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
})

module.exports = { insertIncentiveApplication, getIncentiveApplication }