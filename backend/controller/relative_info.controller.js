const express = require("express");
const RelativeInfo = require("../model/relative_info.model");
const asyncHandler = require("express-async-handler");

const insertRelativeInfo = asyncHandler(async (req, res) => {

    const data = req.body;

    try {
        const result = await RelativeInfo.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getRelativeInfo = asyncHandler(async (req, res) => {
    const ic = req.params.ic;

    try {
        const result = await RelativeInfo.find({ "USER_IC": ic });

        if(result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
})

module.exports = { insertRelativeInfo, getRelativeInfo }