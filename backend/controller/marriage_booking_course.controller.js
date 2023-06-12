const express = require("express");
const CourseBooking = require("../model/marriage_booking_course.model");
const asyncHandler = require("express-async-handler");

const insertBooking = asyncHandler(async (req, res) => {
    const data = req.body;

    try {
        const result = await CourseBooking.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getBookingById = asyncHandler(async (req, res) => {
    const id = req.params.id;

    try {
        const result = await CourseBooking.findOne({ "MCB_USER_IC": id });

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
})

module.exports = { insertBooking, getBookingById }

