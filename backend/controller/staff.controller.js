const express = require("express");
const Staff = require("../model/staff.model");
const asyncHandler = require("express-async-handler");

const registerStaff = asyncHandler(async (req, res) => {
    const { STAFF_ID, STAFF_NAME, STAFF_GENDER, STAFF_PHONE_NO, STAFF_EMAIL, STAFF_ROLE } = req.body;

    if (!STAFF_ID || !STAFF_NAME, !STAFF_GENDER || !STAFF_PHONE_NO || !STAFF_EMAIL) {
        res.status(400);
        throw new Error("All field are mandatory");
    }

    //exist staff based on STAFF ID
    const staffExist = await Staff.findOne({ STAFF_ID });

    if (staffExist) {
        res.status(400);
        throw new Error("Staff already exist");
    }
    const staff = await Staff.create({
        STAFF_ID,
        STAFF_NAME,
        STAFF_GENDER,
        STAFF_PHONE_NO,
        STAFF_EMAIL,
        STAFF_ROLE
    });

    //get staff data based on STAFF ID
    const staffData = await Staff.findOne({ STAFF_ID });

    if (Staff) {
        res.status(200).json({ staffData });
    } else {
        res.status(400);
        throw new Error("Failed to register staff");
    }

    res.status(200).json({ staffData });
});

//get staff by email
const getStaffByEmail = asyncHandler(async (req, res) => {

    const email = req.params.STAFF_EMAIL;

    if (!email) {
        res.status(400);
        throw Error("All field are mandatory");
    }

    const staff = await Staff.findOne({ "STAFF_EMAIL": email });

    if (staff) {
        res.status(200).json({ staff });
    } else {
        res.status(400).json({ message: "Staff not found" });
    }

    res.status(200).json({ staff });
});


//update staff profile
const updateStaff = asyncHandler(async (req, res) => {
    const EMAIL = req.params.STAFF_EMAIL;
    const staffData = req.body;

    try {
        const result = await Staff.findOneAndUpdate({ "STAFF_EMAIL": EMAIL }, staffData, { upsert: true, new: true });

        if (result) {
            res.status(200).json({ result });
        } else {
            res.status(400).json({ message: "Failed to update" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to update user" });
    }
});

module.exports = {registerStaff, getStaffByEmail, updateStaff}