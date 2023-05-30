const express = require("express");
const User = require("../model/user.model");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
    const { USER_IC, USER_NAME, USER_GENDER, USER_PHONE_NO, USER_EMAIL } = req.body;

    if (!USER_IC || !USER_NAME, !USER_GENDER || !USER_PHONE_NO || !USER_EMAIL) {
        res.status(400);
        throw new Error("All field are mandatory");
    }

    const userExist = await User.findOne({ USER_IC });

    if (userExist) {
        res.status(400);
        throw new Error("User already exist");
    }
    const user = await User.create({
        USER_IC,
        USER_NAME,
        USER_GENDER,
        USER_PHONE_NO,
        USER_EMAIL
    });

    const userData = await User.findOne({ USER_IC });

    if (user) {
        res.status(200).json({ userData });
    } else {
        res.status(400);
        throw new Error("Failed to resgiter user");
    }

    res.status(200).json({ userData });
});

module.exports = { registerUser };


