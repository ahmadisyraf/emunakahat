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
});

const getBooking = asyncHandler(async (req, res) => {
    try {
        const result = await CourseBooking.find({});

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const updateBooking = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const data = req.body

    try {
        const result = await CourseBooking.findOneAndUpdate({ "_id": id }, data, { new: true });

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const deleteBooking = asyncHandler(async (req, res) => {
    const id = req.params.id;

    try {
        const result = await CourseBooking.findOneAndDelete({ "_id": id });

        if (result) {
            res.status(200).json({ message: "Success delete" })
        }
    } catch (err) {
        throw new Error(err); Z
    }
})

module.exports = { insertBooking, getBookingById, getBooking, updateBooking, deleteBooking }

