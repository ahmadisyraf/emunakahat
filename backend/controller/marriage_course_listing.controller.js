const express = require("express");
const Course = require("../model/marriage_course_listing.model");
const asyncHandler = require("express-async-handler");

const insertCourse = asyncHandler(async (req, res) => {
    const data = req.body;

    try {
        const insert = await Course.create(data);

        if (insert) {
            res.status(200).json({ insert });
        }

    } catch (err) {
        throw new Error(err);
    }
});

const getCourse = asyncHandler(async (req, res) => {
    try {
        const result = await Course.find();

        if (result) {
            res.status(200).json(result);
        }

    } catch (err) {
        res.status(400).json({ err });
    }
});

const getCourseById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Course.findById(id);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
})

module.exports = { insertCourse, getCourse, getCourseById }