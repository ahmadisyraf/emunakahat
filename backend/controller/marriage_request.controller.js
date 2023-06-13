const express = require("express");
const MarriageRequest = require("../model/marriage_request.model");
const asyncHandler = require("express-async-handler");

const insertMarriageRequest = asyncHandler(async (req, res) => {
    const data = req.body;

    try {
        const result = await MarriageRequest.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getMarriageRequestByIC = asyncHandler(async (req, res) => {
    const ic = req.params.ic;

    try {
        const result = await MarriageRequest.find({ "USER_IC": ic });

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getMarriageRequest = asyncHandler(async (req, res) => {
    try {
        const result = await MarriageRequest.find();

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
})

module.exports = { insertMarriageRequest, getMarriageRequestByIC, getMarriageRequest }