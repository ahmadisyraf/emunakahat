const express = require("express");
const Staff = require("../model/staff.model");
const asyncHandler = require("express-async-handler");

const registerStaff = asyncHandler(async (req, res) => {
    const { STAFF_ID, STAFF_NAME, STAFF_GENDER, STAFF_PHONE_NO, STAFF_EMAIL, STAFF_ROLE } = req.body;

    // Check if staff already exists based on email
    const staffExist = await Staff.findOne({ STAFF_EMAIL });

    if (staffExist) {
        res.status(400);
        throw new Error("Staff already exists");
    }

    // Create a new staff document
    const newStaff = await Staff.create({
        STAFF_ID,
        STAFF_NAME,
        STAFF_GENDER,
        STAFF_PHONE_NO,
        STAFF_EMAIL,
        STAFF_ROLE
    });

    // Get staff data based on email
    const staffData = await Staff.findOne({ STAFF_EMAIL });

    if (newStaff) {
        res.status(200).json({ staffData });
    } else {
        res.status(400);
        throw new Error("Failed to register staff");
    }
});

const getStaffUpdate = asyncHandler(async (req, res) => {

    const ID = req.params.STAFF_ID;

    const {
        STAFF_NAME,
        STAFF_GENDER,
        STAFF_PHONE_NO,
        STAFF_EMAIL,
        STAFF_ROLE_
    } = req.body;

    const updatedData = {
        STAFF_NAME,
        STAFF_GENDER,
        STAFF_PHONE_NO,
        STAFF_EMAIL,
        STAFF_ROLE_
    };

    const options = { new: true };

    const result = await Staff.findOneAndUpdate(ID, updatedData, options);

    if (result) {
        res.status(200).json({ result });
    } else {
        res.status(400).json({ message: "Failed to update" });
    }
});

const getStaffByEmail = asyncHandler(async (req, res) => {
    const email = req.params.email;

    try {
        const result = await Staff.findOne({ "STAFF_EMAIL": email });

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }

})



module.exports = { registerStaff, getStaffUpdate, getStaffByEmail }