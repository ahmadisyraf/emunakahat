const express = require("express");
const Staff = require("../model/staff.model");
const asyncHandler = require("express-async-handler");

const registerStaff = asyncHandler(async (req, res) => {
    const { STAFF_ID, STAFF_NAME, STAFF_GENDER, STAFF_PHONE_NO, STAFF_EMAIL, STAFF_ROLE } = req.body;

    if (!STAFF_ID || !STAFF_NAME, !STAFF_GENDER || !STAFF_PHONE_NO || !STAFF_EMAIL) {
        res.status(400);
        throw new Error("All field are mandatory");
    }

    //exist user based on STAFF ID
    const staffExist = await Staff.findOne({ STAFF_ID });

    if (staffExist) {
        res.status(400);
        throw new Error("Staff already exist");
    }
    const Staff = await Staff.create({
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

    const options = {new:true};

    const result = await Staff.findOneAndUpdate(ID, updatedData, options);

    if (result) {
        res.status(200).json({ result });
    } else {
        res.status(400).json({ message: "Failed to update"

});
    }

})

module.exports = {registerStaff, getStaffUpdate}